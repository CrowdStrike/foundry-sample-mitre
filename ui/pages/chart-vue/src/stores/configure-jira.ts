/**
 * Jira Configuration Pinia Store
 */
import type FalconApi from '@crowdstrike/foundry-js'
import { type AlertsPlugin } from '@mitre/vue-shared/plugins/alerts'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import {
  checkBaseCollectionConfigured,
  getNotifyIRConfig,
  getNotifyITConfig,
  setNotifyIRConfig,
  setNotifyITConfig
} from '@mitre/vue-shared/utils'
import {
  MITRE_AUTO_REMEDIATION_COLLECTION,
  type SaveNotifyResult
} from '@mitre/vue-shared/utils/collections'
import { DEFAULT_SUMMARY } from '@mitre/vue-shared/utils/jira'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import type { NotifyConfig } from '@mitre/vue-shared/types'
import { defineStore } from 'pinia'
import { computed, inject, reactive, ref } from 'vue'

/**
 * Jira Wizard steps
 *
 * @export
 * @typedef {WizardState}
 */
export type WizardState =
  | 'Default:DefaultPanel'
  | 'RansomwareRemediation:Step1'
  | 'RansomwareRemediation:NotifyIT'
  | 'RansomwareRemediation:NotifyIR'

/**
 * Jira wizard saved values per step
 *
 * @export
 * @typedef {WizardStateValues}
 */
export type WizardStateValues = {
  [key in WizardState]?: Record<string, unknown>
}

/**
 * Jira Pinia Store initializer
 *
 * @type {*}
 */
export const useConfigureJiraStore = defineStore('configure-jira', () => {
  const isLoading = ref(true)
  const collectionConfigured = ref(false)
  const configureDialogShown = ref(false)
  const isNotifyITConfigured = ref(false)
  const isNotifyIRConfigured = ref(false)
  const wizardState = ref<WizardState>()
  const wizardStateValues = reactive<WizardStateValues>({})
  const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi
  const alerts: AlertsPlugin = inject(SYMBOLS.ALERTS) as AlertsPlugin
  const i18n = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

  const { t } = i18n

  /**
   * Shows the jira configuration dialog
   *
   * @async
   * @param {WizardState} [newState='Default:DefaultPanel']
   * @returns {*}
   */
  const showConfigureDialog = async (newState: WizardState = 'Default:DefaultPanel') => {
    if (!configureDialogShown.value) {
      configureDialogShown.value = true

      if (wizardState.value !== newState) {
        wizardState.value = newState
      }
    }
  }

  /**
   * Hides the jira configuration dialog
   *
   * @async
   * @returns {*}
   */
  const hideConfigureDialog = async () => {
    if (configureDialogShown.value) {
      configureDialogShown.value = false

      wizardState.value = undefined
      falconApi.navigation.navigateTo({ path: '', type: 'internal' })
    }
  }

  /**
   * Set the wizard state, eventually priming it with passed values
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
   * Sets a property for the current wizard state
   *
   * @param {string} key
   * @param {unknown} value
   */
  const setWizardStateProperty = (key: string, value: unknown) => {
    if (wizardState.value) {
      wizardStateValues[wizardState.value] = {
        ...wizardStateValues[wizardState.value],
        [key]: value
      }
    }
  }

  /**
   * Get a value from current wizard state
   *
   * @template T
   * @param {string} key
   * @param {(T | undefined)} [defaultValue=undefined]
   * @returns {T}
   */
  const getWizardStateProperty = <T>(key: string, defaultValue: T | undefined = undefined): T => {
    if (wizardState.value) {
      return (getWizardStateStep(wizardState.value)[key] ?? defaultValue) as T
    } else {
      return defaultValue as T
    }
  }

  /**
   * Gets the full current wizard state
   *
   * @returns {Partial<NotifyConfig>}
   */
  const getWizardState = (): Partial<NotifyConfig> => {
    if (wizardState.value) {
      const out = getWizardStateStep(wizardState.value) as Partial<NotifyConfig>

      if (out) {
        out.summary = out.summary || DEFAULT_SUMMARY
      }

      return out
    } else {
      return {}
    }
  }

  /**
   * Clear the current wizard state value
   *
   * @param state
   */
  const clearWizardStateStep = (state: WizardState) => {
    wizardStateValues[state] = {}
  }

  /**
   * Changes the wizard state, eventually priming it with default values
   *
   * @param {WizardState} state
   * @param {Record<string, unknown>} defaultValue
   */
  const setWizardStateStep = (state: WizardState, defaultValue: Record<string, unknown>) => {
    wizardStateValues[state] = { ...defaultValue }
  }

  /**
   * Gets the selected wizard state step values
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

  /**
   * Tests if the jira configuration collection can be accessed
   *
   */
  const testExistingBaseCollection = async () => {
    collectionConfigured.value = await checkBaseCollectionConfigured(falconApi)

    if (!collectionConfigured.value) {
      alerts.notify({
        variant: 'danger',
        message: `"${MITRE_AUTO_REMEDIATION_COLLECTION}" ${t('customObjectCollectionNotFound')}`
      })
    } else {
      loadExistingConfigurations()
    }
  }

  /**
   * Loads existing Jira Issues configurations, and fill existing values for the wizard
   *
   * @async
   * @returns {*}
   */
  const loadExistingConfigurations = async () => {
    if (collectionConfigured.value) {
      isLoading.value = true

      try {
        const notifyIT = await getNotifyITConfig(falconApi)
        const notifyIR = await getNotifyIRConfig(falconApi)

        isNotifyITConfigured.value = notifyIT !== undefined
        isNotifyIRConfigured.value = notifyIR !== undefined

        setWizardStateStep('RansomwareRemediation:NotifyIT', notifyIT ?? {})
        setWizardStateStep('RansomwareRemediation:NotifyIR', notifyIR ?? {})
      } finally {
        isLoading.value = false
      }
    } else {
      isLoading.value = false
    }
  }

  /**
   * Saves the NotifyIT Jira configuration
   *
   * @async
   * @returns {Promise<SaveNotifyResult>}
   */
  const saveNotifyIT = async (): Promise<SaveNotifyResult> => {
    if (wizardState.value === 'RansomwareRemediation:NotifyIT' && isStepValid.value) {
      const object = getWizardState()

      return await setNotifyITConfig(falconApi, i18n, object)
    }

    return {
      saved: false,
      error: new Error(t('requiredValuesMissing'))
    }
  }

  /**
   * Saves the NotifyIR Jira configuration
   *
   * @async
   * @returns {Promise<SaveNotifyResult>}
   */
  const saveNotifyIR = async () => {
    if (wizardState.value === 'RansomwareRemediation:NotifyIR' && isStepValid.value) {
      const object = getWizardState()

      return await setNotifyIRConfig(falconApi, i18n, object)
    }

    return {
      saved: false,
      error: new Error(t('requiredValuesMissing'))
    }
  }

  /**
   * Checks current wizard step validity
   *
   * @type {*}
   */
  const isStepValid = computed(() => {
    if (
      wizardState.value === 'RansomwareRemediation:NotifyIT' ||
      wizardState.value === 'RansomwareRemediation:NotifyIR'
    ) {
      const val = getWizardState()
      return (
        (val.account?.length ?? 0) > 0 &&
        (val.priority?.length ?? 0) > 0 &&
        (val.project?.length ?? 0) > 0 &&
        (val.issueType?.length ?? 0) > 0 &&
        (val.summary?.length ?? 0) > 0 &&
        (val.labels?.length ?? 0) > 0
      )
    }

    return true
  })

  /**
   * Validation messages (if any) for the current state
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

  // The store will test for collection proper working state/initialization
  testExistingBaseCollection()

  return {
    configureDialogShown,
    showConfigureDialog,
    hideConfigureDialog,
    setWizardState,
    setWizardStateProperty,
    clearWizardStateStep,
    setWizardStateStep,
    getWizardStateProperty,
    getWizardState,
    wizardState,
    wizardStateValues,
    isLoading,
    isNotifyITConfigured,
    isNotifyIRConfigured,
    saveNotifyIT,
    saveNotifyIR,
    loadExistingConfigurations,
    isStepValid,
    collectionConfigured,
    validationMessages
  }
})
