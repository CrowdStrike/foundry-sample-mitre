import type { DetectionItem, NotifyConfig } from './types'
import type FalconApi from '@crowdstrike/foundry-js'
import type { I18NComposer } from '../plugins/i18n'
import type { JiraCreatedResponseValue } from './jira'
import { deepToRaw } from './deepToRaw'

/**
 * Collection that will host the Auto Remediation action's config for Jira.
 * Needs to match the manifest's collection name.
 * Collections are created when app is deployed successfully at least once
 *
 * @type {"mitreAutoRemediationJira"}
 */
export const MITRE_AUTO_REMEDIATION_COLLECTION = 'mitreAutoRemediationJira'
/**
 * Collection that will host the history of auto remediation Jira issues created for the detections.
 * Needs to match the manifest's collection name.
 * Collections are created when app is deployed successfully at least once
 *
 * @type {"mitreAutoRemediationCreatedIssues"}
 */
export const MITRE_AUTO_REMEDIATION_CREATED_ISSUES_COLLECTION = 'mitreAutoRemediationCreatedIssues'

/**
 * An error class with additional error code
 *
 * @export
 * @class ErrorWithCode
 * @typedef {ErrorWithCode}
 * @extends {Error}
 */
export class ErrorWithCode extends Error {
  /**
   * Error code
   *
   * @type {?(string | number)}
   */
  code?: string | number
}

/**
 * The available auto remediation notify keys
 *
 * @typedef {notifyKey}
 */
type notifyKey = 'ransomwareNotifyIT' | 'ransomwareNotifyIR'

/**
 * Notify IT auto remediation key
 *
 * @type {notifyKey}
 */
const notifyITKey: notifyKey = 'ransomwareNotifyIT'
/**
 * Notify IR auto remediation key
 *
 * @type {notifyKey}
 */
const notifyIRKey: notifyKey = 'ransomwareNotifyIR'

/**
 * A flag to avoid checking multiple times the existence of auto remediation collection
 *
 * @type {(boolean | undefined)}
 */
let baseCollectionChecked: boolean | undefined = undefined

/**
 * Result of saveNotifyIT | saveNotifyIR function call
 *
 * @export
 * @interface SaveNotifyResult
 * @typedef {SaveNotifyResult}
 */
export interface SaveNotifyResult {
  /**
   * If the configuration was saved or not
   *
   * @type {boolean}
   */
  saved: boolean
  /**
   * Error, if exists, that happened when saving
   *
   * @type {?Error}
   */
  error?: Error
}

/**
 * The expected result from collection.write call
 *
 * @interface CollectionResult
 * @typedef {CollectionResult}
 */
interface CollectionResult {
  /**
   * Errors, if any, returned from the call
   *
   * @type {?Array<{ message: string }>}
   */
  errors?: Array<{ message: string }>
  /**
   * Resources, if any, returned from the call
   *
   * @type {?Array<unknown>}
   */
  resources?: Array<unknown>
}

/**
 * Notification types
 *
 * @export
 * @typedef {NotificationType}
 */
export type NotificationType = 'notifyIT' | 'notifyIR'

/**
 * The saved values for Jira issues created for detections using this tool. Will reflect the schema in collections/mitre-auto-remediation-created-schema.json file
 *
 * @export
 * @interface CreatedIssuesValues
 * @typedef {CreatedIssuesValues}
 * @extends {Record<string, string | string[]>}
 */
export interface CreatedIssuesValues extends Record<string, string | string[]> {
  /**
   * Account ID
   *
   * @type {string}
   */
  account: string
  /**
   * Priority Id
   *
   * @type {string}
   */
  priority: string
  /**
   * Issue Type Id
   *
   * @type {string}
   */
  issueType: string
  /**
   * Summary of the Jira issue (with variables replaced)
   *
   * @type {string}
   */
  summary: string
  /**
   * Description of the Jira issue (with variables replaced)
   *
   * @type {string}
   */
  description: string
  /**
   * Project Id
   *
   * @type {string}
   */
  project: string
  /**
   * Jira labels assigned to the created issue
   *
   * @type {string[]}
   */
  labels: string[]
  /**
   * Created issue's Id (numeric)
   *
   * @type {string}
   */
  issueId: string
  /**
   * Created issue's Key (human readable)
   *
   * @type {string}
   */
  issueKey: string
  /**
   * Issue's API link
   *
   * @type {string}
   */
  issueLink: string
  /**
   * Related detection's Id
   *
   * @type {string}
   */
  detectionId: string
  /**
   * Issue's creation date
   *
   * @type {string}
   */
  creationDate: string
  /**
   * Notification Type
   *
   * @type {NotificationType}
   */
  notificationType: NotificationType
}

/**
 * Gets the required Jira configuration from the MITRE_AUTO_REMEDIATION_COLLECTION collection, if it exists
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {notifyKey} key
 * @returns {(Promise<Partial<NotifyConfig> | undefined>)}
 */
async function getNotifyValue(
  falconApi: FalconApi,
  key: notifyKey
): Promise<Partial<NotifyConfig> | undefined> {
  try {
    const collection = falconApi.collection({ collection: MITRE_AUTO_REMEDIATION_COLLECTION })
    const result: any = await collection.read(key)

    if (result && 'errors' in result && Array.isArray(result.errors) && result.errors.length > 0) {
      const error = new ErrorWithCode(result.errors[0].message)
      if (result.errors[0].code) {
        error.code = Number(result.errors[0].code)
      }

      throw error
    } else if (result && 'account' in result && 'project' in result) {
      return result as Partial<NotifyConfig>
    } else {
      return undefined
    }
  } catch (error: any) {
    if (error.message?.includes('object not found') || error.code === 404) {
      return undefined
    } else {
      throw error
    }
  }
}

/**
 * Checks for MITRE_AUTO_REMEDIATION_COLLECTION base existence. Collections are created on app deployment, so it will not exists unless the user has deployed the app at least once
 *
 * @export
 * @async
 * @param {FalconApi} falconApi
 * @returns {Promise<boolean>}
 */
export async function checkBaseCollectionConfigured(falconApi: FalconApi): Promise<boolean> {
  if (baseCollectionChecked !== undefined) {
    return baseCollectionChecked
  }

  let baseCollectionCheckedValue = true

  try {
    const collection = await falconApi.collection({ collection: MITRE_AUTO_REMEDIATION_COLLECTION })

    baseCollectionCheckedValue = typeof collection?.read === 'function'

    if (baseCollectionCheckedValue) {
      await Promise.all([
        getNotifyValue(falconApi, 'ransomwareNotifyIT'),
        getNotifyValue(falconApi, 'ransomwareNotifyIR')
      ])

      baseCollectionCheckedValue = true
    }
  } catch (error) {
    console.error(error)
    baseCollectionCheckedValue = false
  } finally {
    baseCollectionChecked = baseCollectionCheckedValue
  }

  return baseCollectionChecked
}

/**
 * Gets the NotifyIT config from the MITRE_AUTO_REMEDIATION_COLLECTION
 *
 * @async
 * @param {FalconApi} falconApi
 * @returns {(Promise<Partial<NotifyConfig> | undefined>)}
 */
export const getNotifyITConfig = async function (
  falconApi: FalconApi
): Promise<Partial<NotifyConfig> | undefined> {
  if (await checkBaseCollectionConfigured(falconApi)) {
    return getNotifyValue(falconApi, notifyITKey)
  }

  return undefined
}

/**
 * Gets the NotifyIR config from the MITRE_AUTO_REMEDIATION_COLLECTION
 *
 * @async
 * @param {FalconApi} falconApi
 * @returns {(Promise<Partial<NotifyConfig> | undefined>)}
 */
export const getNotifyIRConfig = async function (
  falconApi: FalconApi
): Promise<Partial<NotifyConfig> | undefined> {
  if (await checkBaseCollectionConfigured(falconApi)) {
    return getNotifyValue(falconApi, notifyIRKey)
  }

  return undefined
}

/**
 * Saves the NotifyIT config in the MITRE_AUTO_REMEDIATION_COLLECTION
 * Configuration object must follow collections/mitre-auto-remediation-jira-schema.json schema
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {I18NComposer} i18n
 * @param {Partial<NotifyConfig>} values
 * @returns {Promise<SaveNotifyResult>}
 */
export const setNotifyITConfig = async function (
  falconApi: FalconApi,
  i18n: I18NComposer,
  values: Partial<NotifyConfig>
): Promise<SaveNotifyResult> {
  try {
    if (await checkBaseCollectionConfigured(falconApi)) {
      const collection = falconApi.collection({ collection: MITRE_AUTO_REMEDIATION_COLLECTION })

      const result = (await collection.write(notifyITKey, deepToRaw(values))) as CollectionResult

      if (result.errors?.length) {
        return {
          saved: false,
          error: new Error(result.errors[0].message)
        }
      } else {
        return { saved: true }
      }
    } else {
      return {
        saved: false,
        error: new Error(i18n.t('collectionNotFound'))
      }
    }
  } catch (error) {
    console.error(error)
    return {
      saved: false,
      error: error as Error
    }
  }
}

/**
 * Saves the NotifyIR config in the MITRE_AUTO_REMEDIATION_COLLECTION
 * Configuration object must follow collections/mitre-auto-remediation-jira-schema.json schema
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {I18NComposer} i18n
 * @param {Partial<NotifyConfig>} values
 * @returns {Promise<SaveNotifyResult>}
 */
export const setNotifyIRConfig = async function (
  falconApi: FalconApi,
  i18n: I18NComposer,
  values: Partial<NotifyConfig>
): Promise<SaveNotifyResult> {
  try {
    if (await checkBaseCollectionConfigured(falconApi)) {
      const collection = falconApi.collection({ collection: MITRE_AUTO_REMEDIATION_COLLECTION })

      const result = (await collection.write(notifyIRKey, deepToRaw(values))) as CollectionResult

      if (result.errors?.length) {
        return {
          saved: false,
          error: new Error(result.errors[0].message)
        }
      } else {
        return { saved: true }
      }
    } else {
      return {
        saved: false,
        error: new Error(i18n.t('collectionNotFound'))
      }
    }
  } catch (error) {
    console.error(error)
    return {
      saved: false,
      error: error as Error
    }
  }
}

/**
 * Create a key for the saved issue with a combination of Detection ID and NotificationType.
 *
 * @param {FalconApi} falconApi
 * @param {NotificationType} notificationType
 * @returns {string}
 */
export const calculateCreatedIssueKey = function (
  falconApi: FalconApi,
  notificationType: NotificationType
): string {
  return `${falconApi.data?.detectionId}-${notificationType}`.replace(/[^a-zA-Z\d\-_]/gi, '_')
}

/**
 * Gets a created issue's object, if exists, for the specified notificationType
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {NotificationType} notificationType
 * @returns {unknown}
 */
export const getCreatedIssue = async function (
  falconApi: FalconApi,
  notificationType: NotificationType
) {
  const key = calculateCreatedIssueKey(falconApi, notificationType)

  try {
    const collection = falconApi.collection({
      collection: MITRE_AUTO_REMEDIATION_CREATED_ISSUES_COLLECTION
    })
    const result: CreatedIssuesValues = (await collection.read(key)) as CreatedIssuesValues

    if (result?.account && result?.project && result?.issueId) {
      return result
    } else {
      return undefined
    }
  } catch (error: any) {
    if (error.message?.includes('object not found')) {
      return undefined
    } else {
      console.error(error)
    }
  }

  return undefined
}

/**
 * Saves an historical log for the created Jira issue for the specified detection and notification type
 * If an existing log already exists it will be overwritten
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {DetectionItem} detection
 * @param {NotifyConfig} jiraConfig
 * @param {JiraCreatedResponseValue} issueValues
 * @param {NotificationType} notificationType
 * @returns {Promise<CreatedIssuesValues | undefined>}
 */
export const saveCreatedIssue = async function (
  falconApi: FalconApi,
  detection: DetectionItem,
  jiraConfig: NotifyConfig,
  issueValues: JiraCreatedResponseValue,
  notificationType: NotificationType
): Promise<CreatedIssuesValues | undefined> {
  if (issueValues.created) {
    const values: CreatedIssuesValues = {
      account: jiraConfig.account ?? 'N/A',
      priority: jiraConfig.priority ?? 'N/A',
      issueType: jiraConfig.issueType ?? 'N/A',
      summary: jiraConfig.summary ?? '',
      description: jiraConfig.description ?? '',
      project: jiraConfig.project ?? 'N/A',
      labels: jiraConfig.labels ?? [],
      issueId: issueValues.id,
      issueKey: issueValues.key,
      issueLink: issueValues.api_link,
      detectionId: detection.id,
      creationDate: new Date().toISOString(),
      notificationType: notificationType
    }

    const collection = falconApi.collection({
      collection: MITRE_AUTO_REMEDIATION_CREATED_ISSUES_COLLECTION
    })

    const key = calculateCreatedIssueKey(falconApi, notificationType)
    const result = (await collection.write(key, deepToRaw(values))) as CollectionResult

    return !result.errors?.length ? values : undefined
  }
}
