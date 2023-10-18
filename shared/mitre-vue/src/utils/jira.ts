import type { ApiResponsePayload } from '@crowdstrike/foundry-js'
import FalconApi from '@crowdstrike/foundry-js'
import type { I18NComposer } from '../plugins/i18n'
import { saveCreatedIssue, type CreatedIssuesValues, type NotificationType } from './collections'
import { deepToRaw } from './deepToRaw'
import { replaceVariables } from './detection-jira-variables'
import type {
  DetectionItem,
  JiraIntegrationAccount,
  JiraIssueTypeItem,
  JiraPriorityItem,
  JiraProjectData,
  JiraProjectItem,
  NotifyConfig
} from './types'

/**
 * The default Jira issue summary
 *
 * @type {"Ransomware ${Tactic} via ${Technique} detected on ${Hostname}"}
 */
export const DEFAULT_SUMMARY = 'Ransomware ${Tactic} via ${Technique} detected on ${Hostname}'
/**
 * The possible resulting value of getEntitiesConfigsV1 function call
 *
 * @interface IntegrationResource
 * @typedef {IntegrationResource}
 */
interface IntegrationResource {
  /**
   * The shape of the returned resource
   *
   * @type {{
      id: string
      config_id: string
      name: string
      permissions: string[]
    }}
   */
  config: {
    id: string
    config_id: string
    name: string
    permissions: string[]
  }
  /**
   * It can contains other values, but they are not used in this app
   */
  [key: string]: unknown
}

/**
 * Generic Jira api response shape
 *
 * @interface JiraResponse
 * @typedef {JiraResponse}
 * @template T
 */
interface JiraResponse<T> {
  /**
   * Id of the response
   *
   * @type {string}
   */
  id: string
  /**
   * Status code returned from the API call
   *
   * @type {number}
   */
  status_code: number
  /**
   * Returned headers
   *
   * @type {unknown}
   */
  headers: unknown
  /**
   * The response body
   *
   * @type {T}
   */
  response_body: T
}

/**
 * Project definition object returned from the API call
 *
 * @typedef {ProjectDefinition}
 */
type ProjectDefinition = JiraResponse<
  Array<{
    entityId: string
    avatarUrls: Record<string, string>
    expand: string
    id: string
    isPrivate: boolean
    issueTypes: Array<{
      avatarId: string
      description: string
      hierarchyLevel: number
      iconUrl: string
      id: string
      name: string
      self: string
      subtask: boolean
    }>
    key: string
    name: string
    projectTypeKey: string
    properties: unknown
    self: string
    simplified: boolean
    style: string
    uuid: string
  }>
>

/**
 * Label definition object returned from the API call
 *
 * @typedef {LabelDefinition}
 */
type LabelDefinition = JiraResponse<{
  isLast: boolean
  maxResults: number
  startAt: number
  total: number
  values: string[]
}>

/**
 * Priority definition object returned from the API call
 *
 * @typedef {PriorityDefinition}
 */
type PriorityDefinition = JiraResponse<
  Array<{
    description: string
    iconUrl: string
    id: string
    name: string
    self: string
    statusColor: string
  }>
>

/**
 * Jira issue response returned from the API call when creating new issues programmatically
 *
 * @typedef {JiraIssueCreated}
 */
type JiraIssueCreated = JiraResponse<{
  id: string
  key: string
  self: string
}>

/**
 * Issue Type definition object returned from the API call
 *
 * @typedef {IssueTypeDefinition}
 */
type IssueTypeDefinition = JiraResponse<
  Array<{
    avatarId: number
    description: string
    hierarchyLevel: number
    iconUrl: string
    id: string
    name: string
    scope: {
      [key: string]: unknown
      type: string
    }
    self: string
    subtask: boolean
    untranslatedName: string
  }>
>

/**
 * Response that is returned when creating new Jira issues
 *
 * @export
 * @interface JiraCreatedResponseValue
 * @typedef {JiraCreatedResponseValue}
 */
export interface JiraCreatedResponseValue {
  /**
   * Eventual error messages
   *
   * @type {string[]}
   */
  errors: string[]
  /**
   * Boolean indicating if the issue was succesfully created or not
   *
   * @type {boolean}
   */
  created: boolean
  /**
   * The id of the newly created issue
   *
   * @type {string}
   */
  id: string
  /**
   * The human readable key of the newly created issue
   *
   * @type {string}
   */
  key: string
  /**
   * The internal API link of the new issue on the Jira instance
   *
   * @type {string}
   */
  api_link: string
  /**
   * Data used to create the issue
   *
   * @type {?CreatedIssuesValues}
   */
  logged_data?: CreatedIssuesValues
}

/**
 * Environment unique keys for interacting with Jira backend
 *
 * @type {{ default: string; }}
 */
const environments = {
  default: 'bb5c382c865347fd8ce08749cc2f64fc'
}

/**
 * Labels mus be "escaped" to be usable in the multiselect, as the shoelace multiselect component
 * does not accept "spaces" in the passed values.
 * This mapping will restore the correct values before creating the Jira issue
 *
 * @type {Record<string, string>}
 */
const labelsMapper: Record<string, string> = {}

/**
 * Get the correct appId to interact with Jira for the current environment
 *
 * @async
 * @param {string} origin
 * @returns {Promise<string>}
 */
const getAppId = async (origin: string): Promise<string> => {
  return (
    Object.entries(environments).find(([key, _value]) => origin.includes(key))?.[1] ??
    environments['default']
  )
}

/**
 * Retrieve Jira accounts from the backend instance
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {string} origin
 * @returns {Promise<JiraIntegrationAccount[]>}
 */
export const retrieveJiraIntegrationAccounts = async function (
  falconApi: FalconApi,
  origin: string
): Promise<JiraIntegrationAccount[]> {
  const appId = await getAppId(origin)

  const result = (await falconApi.api.plugins.getEntitiesConfigsV1({
    appId
  })) as ApiResponsePayload<IntegrationResource>

  return (result.resources ?? [])
    ?.filter((resource) => {
      return (
        resource.config?.permissions.includes('read:jira-work') &&
        resource.config?.permissions.includes('write:jira-work') &&
        resource.config?.id
      )
    })
    .map((resource) => {
      return {
        name: resource.config.name,
        id: resource.config.id
      } as JiraIntegrationAccount
    })
}

/**
 * Retrieve Jira project from the backend instance for the passed account
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {string} configId
 * @returns {Promise<JiraProjectItem[]>}
 */
export const retrieveJiraAccountProjects = async function (
  falconApi: FalconApi,
  configId: string
): Promise<JiraProjectItem[]> {
  const result = (await falconApi.api.plugins.postEntitiesExecuteV1({
    resources: [
      {
        id: 'jira.get_projects_deprecated',
        config_id: configId,
        request: {}
      }
    ]
  })) as ApiResponsePayload<ProjectDefinition>

  falconApi.api.plugins.postEntitiesExecuteV1

  return (result.resources ?? [])
    ?.filter((resource) => {
      return resource.status_code === 200 && (resource.response_body?.length ?? 0) > 0
    })
    .flatMap((resource) => {
      return resource.response_body.map((project) => {
        return {
          id: project.id,
          name: project.name,
          isPrivate: project.isPrivate,
          href: project.self
        }
      })
    })
}

/**
 * Retrieve Jira labels from the backend instance for the passed account and project
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {string} configId
 * @returns {Promise<string[]>}
 */
export const retrieveJiraAccountLabels = async function (
  falconApi: FalconApi,
  configId: string
): Promise<string[]> {
  const result = (await falconApi.api.plugins.postEntitiesExecuteV1({
    resources: [
      {
        id: 'jira.get_labels',
        config_id: configId,
        request: {}
      }
    ]
  })) as ApiResponsePayload<LabelDefinition>

  return (result.resources ?? [])
    ?.filter((resource) => {
      return resource.status_code === 200 && (resource.response_body?.values?.length ?? 0) > 0
    })
    .flatMap((resource) => {
      return resource.response_body.values
    })
    .map((label) => {
      const labelConverted = label.replace(/ /g, '_') // MultiSelection is not handling spaces correctly;
      labelsMapper[labelConverted] = label
      return labelConverted
    })
}

/**
 * Retrieve Jira priorities from the backend instance for the passed account and project
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {string} configId
 * @returns {Promise<JiraPriorityItem[]>}
 */
export const retrieveJiraAccountPriorities = async function (
  falconApi: FalconApi,
  configId: string
): Promise<JiraPriorityItem[]> {
  const result = (await falconApi.api.plugins.postEntitiesExecuteV1({
    resources: [
      {
        id: 'jira.get_priorities',
        config_id: configId,
        request: {}
      }
    ]
  })) as ApiResponsePayload<PriorityDefinition>

  return (result.resources ?? [])
    ?.filter((resource) => {
      return resource.status_code === 200 && (resource.response_body?.length ?? 0) > 0
    })
    .flatMap((resource) => {
      return resource.response_body.map((priorityDef) => {
        return {
          id: priorityDef.id,
          name: priorityDef.name,
          href: priorityDef.self,
          description: priorityDef.description
        }
      })
    })
}

/**
 * Retrieve Jira issue types from the backend instance for the passed account and project
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {string} configId
 * @param {string} projectId
 * @returns {Promise<JiraIssueTypeItem[]>}
 */
export const retrieveJiraAccountAndProjectIssueTypes = async function (
  falconApi: FalconApi,
  configId: string,
  projectId: string
): Promise<JiraIssueTypeItem[]> {
  const result = (await falconApi.api.plugins.postEntitiesExecuteV1({
    resources: [
      {
        id: 'jira.get_issue_types',
        config_id: configId,
        request: {
          params: {
            query: {
              projectId
            }
          }
        }
      }
    ]
  })) as ApiResponsePayload<IssueTypeDefinition>

  return (result.resources ?? [])
    ?.filter((resource) => {
      return resource.status_code === 200 && (resource.response_body?.length ?? 0) > 0
    })
    .flatMap((resource) => {
      return resource.response_body.map((issueType) => {
        return {
          id: issueType.id,
          name: issueType.name,
          href: issueType.self,
          description: issueType.description
        }
      })
    })
}

/**
 * Retrieve Jira full data from the backend instance for the passed account and project
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {JiraIntegrationAccount} account
 * @param {JiraProjectItem} project
 * @returns {Promise<JiraProjectData>}
 */
export const retrieveJiraProjectData = async function (
  falconApi: FalconApi,
  account: JiraIntegrationAccount,
  project: JiraProjectItem
): Promise<JiraProjectData> {
  const results = await Promise.all([
    retrieveJiraAccountLabels(falconApi, account.id),
    retrieveJiraAccountPriorities(falconApi, account.id),
    retrieveJiraAccountAndProjectIssueTypes(falconApi, account.id, project.id)
  ])

  return {
    account,
    project,
    labels: results[0],
    priorities: results[1],
    issueTypes: results[2]
  }
}

/**
 * Create a new Jira issue from the passed configuration.
 * This function will also replace variables in the summary and description from
 * the related Detection
 *
 * @async
 * @param {FalconApi} falconApi
 * @param {I18NComposer} i18n
 * @param {string} origin
 * @param {NotificationType} notificationType
 * @param {NotifyConfig} config
 * @param {DetectionItem} detection
 * @returns {Promise<JiraCreatedResponseValue>}
 */
export const createJiraIssue = async function (
  falconApi: FalconApi,
  i18n: I18NComposer,
  origin: string,
  notificationType: NotificationType,
  config: NotifyConfig,
  detection: DetectionItem
): Promise<JiraCreatedResponseValue> {
  try {
    const {
      account,
      project,
      priority,
      labels = [],
      summary = '',
      description = '',
      issueType
    } = deepToRaw(config)

    if (account && project && priority && labels?.length && summary && issueType) {
      const [accounts, accountProjects, accountPriorities, projectIssueTypes, accountLabels] =
        await Promise.all([
          retrieveJiraIntegrationAccounts(falconApi, origin),
          retrieveJiraAccountProjects(falconApi, account),
          retrieveJiraAccountPriorities(falconApi, account),
          retrieveJiraAccountAndProjectIssueTypes(falconApi, account, project),
          retrieveJiraAccountLabels(falconApi, account)
        ])

      const definedAccount = accounts?.find(
        (accountEl) =>
          String(accountEl.id) === String(account) || String(accountEl.name) === String(account)
      )

      const definedProject = accountProjects?.find(
        (projectEl) =>
          String(projectEl.id) === String(project) || String(projectEl.name) === String(project)
      )

      const definedPriority = accountPriorities?.find(
        (priorityEl) =>
          String(priorityEl.id) === String(priority) || String(priorityEl.name) === String(priority)
      )

      const definedIssueType = projectIssueTypes?.find(
        (issueTypeEl) =>
          String(issueTypeEl.id) === String(issueType) ||
          String(issueTypeEl.name) === String(issueType)
      )

      const workedLabels = labels
        .map((label) => {
          return labelsMapper[label] ?? label.replace(/_/g, '') // We restore back the correct label
        })
        .filter((label) => accountLabels.includes(label)) // We filter for existing labels

      if (
        definedAccount &&
        definedProject &&
        definedPriority &&
        definedIssueType &&
        workedLabels.length
      ) {
        const replacedDescription = replaceVariables(falconApi, i18n, description, detection)
        const replacedSummary = replaceVariables(falconApi, i18n, summary, detection)

        const result = (await falconApi.api.plugins.postEntitiesExecuteV1({
          resources: [
            {
              id: 'jira.create_issue',
              config_id: account,
              request: {
                json: {
                  fields: {
                    description: replacedDescription,
                    issuetype: {
                      name: definedIssueType.name
                    },
                    labels: workedLabels,
                    priority: {
                      id: definedPriority.id
                    },
                    project: {
                      id: definedProject.id
                    },
                    summary: replacedSummary
                  }
                }
              }
            }
          ]
        })) as ApiResponsePayload<JiraIssueCreated>

        if (result?.resources?.length && !result?.errors?.length) {
          const out: JiraCreatedResponseValue = {
            errors: [],
            created: true,
            id: result?.resources?.[0].response_body?.id,
            key: result?.resources?.[0].response_body?.key,
            api_link: result?.resources?.[0].response_body?.self
          }

          try {
            out.logged_data = await saveCreatedIssue(
              falconApi,
              detection,
              {
                account: definedAccount.name,
                project: definedProject.name,
                priority: definedPriority.name,
                issueType: definedIssueType.name,
                labels: labels ?? [],
                description: replacedDescription ?? '',
                summary: replacedSummary ?? ''
              },
              out,
              notificationType
            )
          } catch (error) {
            console.error(error)
          }

          return out
        } else {
          return {
            errors: (result?.errors ?? []).map((error) => error.message),
            created: false,
            id: '',
            key: '',
            api_link: ''
          }
        }
      } else {
        return {
          errors: [i18n.t('errorCreatingJiraIssueDataMissing')],
          created: false,
          id: '',
          key: '',
          api_link: ''
        }
      }
    } else {
      return {
        errors: [i18n.t('errorCreatingJiraIssueDataMissing')],
        created: false,
        id: '',
        key: '',
        api_link: ''
      }
    }
  } catch (error: any) {
    console.error(error)

    return {
      errors: [error.message],
      created: false,
      id: '',
      key: '',
      api_link: ''
    }
  }
}
