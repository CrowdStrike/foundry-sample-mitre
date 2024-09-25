/**
 * Extension Pinia Store
 */
import type FalconApi from '@crowdstrike/foundry-js'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import type { DetectionItem, JiraPriorityItem, NotifyConfig } from '@mitre/vue-shared/types'
import {
  getCreatedIssue,
  getNotifyIRConfig,
  getNotifyITConfig,
  retrieveDetection
} from '@mitre/vue-shared/utils'
import type { CreatedIssuesValues } from '@mitre/vue-shared/utils/collections'
import {
  createJiraIssue,
  retrieveJiraAccountPriorities,
  type JiraCreatedResponseValue
} from '@mitre/vue-shared/utils/jira'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { defineStore } from 'pinia'
import { computed, inject, reactive, ref } from 'vue'

/**
 * Set the current extension state
 *
 * @export
 * @typedef {WizardState}
 */
export type WizardState =
  | 'RansomwareRemediation:DefaultPanel'
  | 'RansomwareRemediation:NotifyIT'
  | 'RansomwareRemediation:NotifyIR'

/**
 * Extension state values repository
 *
 * @export
 * @typedef {WizardStateValues}
 */
export type WizardStateValues = {
  [key in WizardState]?: Record<string, unknown>
}

/**
 * Extension Store initializer
 *
 * @type {*}
 */
export const useExtensionDataStore = defineStore('extension', () => {
  const loadingError = ref()

  const isSaving = ref(false)
  const isLoadingDetection = ref(false)
  const isLoadingConfiguration = ref(false)
  const isLoadingExistingTickets = ref(false)
  const detection = ref<DetectionItem>()
  const wizardState = ref<WizardState>('RansomwareRemediation:DefaultPanel')
  const wizardStateValues = reactive<WizardStateValues>({})

  const notifyITConfig = ref<Partial<NotifyConfig>>()
  const notifyIRConfig = ref<Partial<NotifyConfig>>()

  const existingTicketIT = ref<CreatedIssuesValues>()
  const existingTicketIR = ref<CreatedIssuesValues>()

  const notifyITPriorities = ref<JiraPriorityItem[]>([])
  const notifyIRPriorities = ref<JiraPriorityItem[]>([])

  const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi
  const i18n = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
  const getOrigin = inject<() => string>(SYMBOLS.FALCON_API_GET_ORIGINS) as () => string

  const detectionId = ref<string>(String(falconApi.data?.detectionId))
  const { t } = i18n

  /**
   * Load focused Detection
   *
   * @async
   * @returns {*}
   */
  const loadDetection = async () => {
    try {
      isLoadingDetection.value = true
      detection.value = undefined

      if (detectionId.value) {
        detection.value = await retrieveDetection(falconApi, detectionId.value)
      }
    } catch (error) {
      loadingError.value = error
      console.error(error)
    } finally {
      isLoadingDetection.value = false
    }
  }

  /**
   * Load configured Ransomware Jira configuration
   *
   * @async
   * @returns {*}
   */
  const loadRansomwareConfigurations = async () => {
    try {
      isLoadingConfiguration.value = true

      notifyITConfig.value = await getNotifyITConfig(falconApi)
      notifyIRConfig.value = await getNotifyIRConfig(falconApi)

      if (notifyITConfig.value?.account) {
        notifyITPriorities.value = await retrieveJiraAccountPriorities(
          falconApi,
          notifyITConfig.value?.account
        )
      }

      if (notifyIRConfig.value?.account) {
        notifyIRPriorities.value = await retrieveJiraAccountPriorities(
          falconApi,
          notifyIRConfig.value?.account
        )
      }
    } catch (error) {
      loadingError.value = error
      console.error(error)
    } finally {
      isLoadingConfiguration.value = false
    }
  }

  /**
   * Load eventually existing Jira tickets created with this extension for this detection
   *
   * @async
   * @returns {*}
   */
  const loadExistingTickets = async () => {
    try {
      isLoadingExistingTickets.value = true

      if (detectionId.value) {
        existingTicketIT.value = await getCreatedIssue(falconApi, 'notifyIT')
        existingTicketIR.value = await getCreatedIssue(falconApi, 'notifyIR')
      }
    } catch (error) {
      loadingError.value = error
      console.error(error)
    } finally {
      isLoadingExistingTickets.value = false
    }
  }

  /**
   * Static method as, for the moment, only Ransomware Remediation has been enabled
   */
  const hasRansomwareRemediation = computed(() => {
    return true
  })

  /**
   * Returns the current extension state
   *
   * @returns {Partial<NotifyConfig>}
   */
  const getWizardState = (): Partial<NotifyConfig> => {
    if (wizardState.value) {
      const out = getWizardStateStep(wizardState.value) as Partial<NotifyConfig>

      return out
    } else {
      return {}
    }
  }

  /**
   * Set the current state, eventually priming its values using the passed object
   *
   * @param {WizardState} newState
   * @param {?Record<string, unknown>} [values]
   */
  const setWizardState = (newState: WizardState, values?: Record<string, unknown>) => {
    wizardState.value = newState

    if (values) {
      wizardStateValues[newState] = values
    }
  }

  /**
   * Sets a value for a property in current state
   *
   * @param {string} key
   * @param {unknown} value
   */
  const setWizardStateProperty = (key: string, value: unknown) => {
    wizardStateValues[wizardState.value] = { ...wizardStateValues[wizardState.value], [key]: value }
  }

  /**
   * Returns a value from the current state
   *
   * @template T
   * @param {string} key
   * @param {(T | undefined)} [defaultValue=undefined]
   * @returns {T}
   */
  const getWizardStateProperty = <T>(key: string, defaultValue: T | undefined = undefined): T => {
    return (getWizardStateStep(wizardState.value)[key] ?? defaultValue) as T
  }

  /**
   * Clears a state
   *
   * @param {WizardState} state
   */
  const clearWizardStateStep = (state: WizardState) => {
    wizardStateValues[state] = {}
  }

  /**
   * Sets the values for the passed state
   *
   * @param {WizardState} state
   * @param {Record<string, unknown>} defaultValue
   */
  const setWizardStateStep = (state: WizardState, defaultValue: Record<string, unknown>) => {
    wizardStateValues[state] = { ...defaultValue }
  }

  /**
   * Gets the saved values for the passed state
   *
   * @param {WizardState} state
   * @returns {Record<string, unknown>}
   */
  const getWizardStateStep = (state: WizardState): Record<string, unknown> => {
    if (!wizardStateValues[state]) {
      wizardStateValues[state] = {}
    }

    return wizardStateValues[state] ?? {}
  }

  const isLoading = computed(
    () =>
      isLoadingConfiguration?.value || isLoadingDetection?.value || isLoadingExistingTickets?.value
  )

  /**
   * Loads the necessary extension data
   *
   * @async
   * @returns {*}
   */
  const loadData = async () => {
    await Promise.all([loadDetection(), loadRansomwareConfigurations(), loadExistingTickets()])
  }

  /**
   * Validates the current extension step values
   *
   * @type {*}
   */
  const isStepValid = computed(() => {
    if (
      wizardState.value === 'RansomwareRemediation:NotifyIT' ||
      wizardState.value === 'RansomwareRemediation:NotifyIR'
    ) {
      return (
        getWizardStateProperty<string>('account', '').length > 0 &&
        getWizardStateProperty<string>('priority', '').length > 0 &&
        getWizardStateProperty<string>('issueType', '').length > 0 &&
        getWizardStateProperty<string>('summary', '').length > 0 &&
        getWizardStateProperty<string[]>('labels', []).length > 0
      )
    }

    return true
  })

  /**
   * Creates a Jira issue for the focused Detection using the current state step.
   * It can either Create a Notify IT or Notify IR issue
   *
   * @async
   * @returns {Promise<JiraCreatedResponseValue>}
   */
  const createJiraIssueFromCurrentStep = async (): Promise<JiraCreatedResponseValue> => {
    try {
      isSaving.value = true
      if (
        isStepValid.value &&
        (wizardState.value === 'RansomwareRemediation:NotifyIT' ||
          wizardState.value === 'RansomwareRemediation:NotifyIR')
      ) {
        const result = await createJiraIssue(
          falconApi,
          i18n,
          getOrigin(),
          wizardState.value === 'RansomwareRemediation:NotifyIT' ? 'notifyIT' : 'notifyIR',
          getWizardStateStep(wizardState.value) as NotifyConfig,
          detection.value as DetectionItem
        )
        return result
      } else {
        return {
          errors: [t('errorCreatingJiraIssueDataMissing')],
          created: false,
          id: '',
          api_link: '',
          key: ''
        }
      }
    } finally {
      isSaving.value = false
    }
  }

  /**
   * Retrieve validation messages, if any, for the current state step
   *
   * @type {*}
   */
  const validationMessages = computed<Record<string, string>>(() => {
    const out: Record<string, string> = {
      account: '',
      project: '',
      priority: '',
      labels: '',
      issueType: '',
      summary: '',
      description: ''
    }

    if (!isStepValid.value) {
      const val = getWizardState()

      if (!val.account?.length) {
        out['account'] = t('selectAccount')
      }

      if (!val.project?.length) {
        out['project'] = t('selectProject')
      }

      if (!val.priority?.length) {
        out['priority'] = t('selectPriority')
      }

      if (!val.labels?.length) {
        out['labels'] = t('enterOneOrMoreLabels')
      }

      if (!val.issueType?.length) {
        out['issueType'] = t('selectIssueType')
      }

      if (!val.summary?.length) {
        out['summary'] = t('enterSummary')
      }
    }

    return out
  })

  /**
   * Auto reload data when focused detection changes
   */
  falconApi.events.on('data', (e) => {
    const newDetectionId = String(e.detectionId)

    if (newDetectionId && detectionId.value !== newDetectionId) {
      if (falconApi.data) {
        falconApi.data.detectionId = newDetectionId
      }
      detectionId.value = newDetectionId

      loadData()
    }
  })

  return {
    notifyITConfig,
    notifyIRConfig,
    notifyITPriorities,
    notifyIRPriorities,
    loadData,
    isLoading,
    loadingError,
    hasRansomwareRemediation,
    detection,
    setWizardState,
    setWizardStateProperty,
    clearWizardStateStep,
    setWizardStateStep,
    wizardState,
    wizardStateValues,
    getWizardStateStep,
    getWizardStateProperty,
    isStepValid,
    createJiraIssueFromCurrentStep,
    isSaving,
    validationMessages,
    existingTicketIT,
    existingTicketIR,
    loadExistingTickets
  }
})
