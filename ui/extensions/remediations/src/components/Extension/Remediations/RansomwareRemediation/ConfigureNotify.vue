<script setup lang="ts">
/**
 * Shared Auto Remediation Configuration component
 */
import { useExtensionDataStore, type WizardState } from '@/stores/extension'
import { ActionsPrivacyPanel, VariableSelector } from '@mitre/vue-shared/components'
import type { AlertsPlugin } from '@mitre/vue-shared/plugins/alerts'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import { DEFAULT_SUMMARY } from '@mitre/vue-shared/utils/jira'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import type { JiraPriorityItem } from '@mitre/vue-shared/types'
import type { SlAlert } from '@shoelace-style/shoelace'
import { computed, inject, ref } from 'vue'

let timeoutToNavigate: any | undefined = undefined
let openedAlert: SlAlert | undefined = undefined

const alerts: AlertsPlugin = inject(SYMBOLS.ALERTS) as AlertsPlugin
const temporaryStatus = ref<string>()
const summaryElement = ref()
const descriptionElement = ref()
const priorityElement = ref()

const setTemporaryStatus = (value: string) => {
  temporaryStatus.value = value

  setTimeout(() => {
    temporaryStatus.value = undefined
  }, 10 * 1000)
}

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const props = defineProps<{ step: WizardState }>()
const extensionStore = useExtensionDataStore()
const state = computed(() => props.step)

const priority = computed<string>(() =>
  extensionStore.getWizardStateProperty<string>('priority', '')
)

const priorities = computed<JiraPriorityItem[]>(() => {
  if (state.value === 'RansomwareRemediation:NotifyIT') {
    return extensionStore.notifyITPriorities
  } else if (state.value === 'RansomwareRemediation:NotifyIR') {
    return extensionStore.notifyIRPriorities
  } else {
    return []
  }
})

const title = computed<string>(() => {
  if (state.value === 'RansomwareRemediation:NotifyIT') {
    return t('notifyIT')
  } else if (state.value === 'RansomwareRemediation:NotifyIR') {
    return t('notifyIR')
  } else {
    return ''
  }
})

const summary = computed<string>(() => extensionStore.getWizardStateProperty<string>('summary', ''))

const description = computed<string>(() =>
  extensionStore.getWizardStateProperty<string>('description', '')
)

const setPriority = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value

  extensionStore.setWizardStateProperty('priority', newValue)

  checkValidity()
}

const setSummary = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value

  extensionStore.setWizardStateProperty('summary', newValue.trim() || DEFAULT_SUMMARY)

  checkValidity()
}

const setDescription = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value

  extensionStore.setWizardStateProperty('description', newValue.trim())

  checkValidity()
}

const isValid = computed(() => {
  return extensionStore.isStepValid
})

const validationMessages = computed(() => {
  return extensionStore.validationMessages
})

const addVariableToSummary = (variable: string) => {
  extensionStore.setWizardStateProperty('summary', `${summary.value.trim()} ${variable}`.trim())

  summaryElement.value.focus()

  checkValidity()
}

const addVariableToDescription = (variable: string) => {
  extensionStore.setWizardStateProperty(
    'description',
    `${description.value.trim()} ${variable}`.trim()
  )

  descriptionElement.value.focus()

  checkValidity()
}

const isLoadingConfig = computed(() => extensionStore.isLoading)
const isSaving = computed(() => extensionStore.isSaving)

const init = async () => {
  extensionStore.setWizardState(state.value)

  if (state.value === 'RansomwareRemediation:NotifyIT') {
    extensionStore.setWizardStateStep(
      state.value,
      (extensionStore.notifyITConfig ?? {}) as Record<string, unknown>
    )
  } else if (state.value === 'RansomwareRemediation:NotifyIR') {
    extensionStore.setWizardStateStep(
      state.value,
      (extensionStore.notifyIRConfig ?? {}) as Record<string, unknown>
    )
  }

  checkValidity()
}

const navigateBack = async () => {
  clearTimeout(timeoutToNavigate)

  openedAlert?.hide()

  if (extensionStore.wizardState !== 'RansomwareRemediation:DefaultPanel') {
    await extensionStore.loadExistingTickets()

    extensionStore.setWizardState('RansomwareRemediation:DefaultPanel')
  }
}

const createTicket = async () => {
  if (checkValidity() && !temporaryStatus.value) {
    const result = await extensionStore.createJiraIssueFromCurrentStep()
    if (result.created && result) {
      setTemporaryStatus('success')

      timeoutToNavigate = setTimeout(navigateBack, 10000)

      openedAlert = alerts.notify(
        {
          variant: 'success',
          message: t('jiraIssueCreated', { key: result.key, id: result.id }),
          backdrop: true,
          position: 'bottom-center',
          margin: 'var(--sl-spacing-2x-large)',
          afterHide: () => {
            temporaryStatus.value = undefined
            navigateBack()
          }
        },
        false
      )
    } else {
      setTemporaryStatus('danger')

      openedAlert = alerts.notify(
        {
          variant: 'danger',
          backdrop: true,
          message: result.errors?.[0] ?? t('errorCreatingJiraIssue'),
          position: 'bottom-center',
          margin: 'var(--sl-spacing-2x-large)',
          afterHide: () => {
            temporaryStatus.value = undefined
          }
        },
        false
      )
    }
  }
}

const cancel = () => {
  extensionStore.setWizardState('RansomwareRemediation:DefaultPanel')
}

const checkValidity = () => {
  const { priority, summary, description } = validationMessages.value

  priorityElement.value?.setCustomValidity(priority)
  summaryElement.value?.setCustomValidity(summary)
  descriptionElement.value?.setCustomValidity(description)

  if (!priorityElement.value?.disabled) priorityElement.value?.reportValidity()
  if (!summaryElement.value?.disabled) summaryElement.value?.reportValidity()
  if (!descriptionElement?.value?.disabled) descriptionElement.value?.reportValidity()

  return isValid.value
}

init()
</script>
<template>
  <div class="flex flex-col items-start justify-items-center gap-3 p-3 border-t border-lines-light">
    <h1 class="type-md-medium text-text-and-icons mb-3">{{ title }}</h1>
    <div class="w-full">
      <sl-select
        :label="t('priority')"
        :value="priority"
        @sl-change.self="setPriority"
        placement="bottom"
        :disabled="isLoadingConfig"
        ref="priorityElement"
      >
        <sl-option v-for="priority in priorities" :key="priority.id" :value="priority.id">{{
          priority.name
        }}</sl-option>
      </sl-select>
    </div>
    <div class="w-full">
      <sl-input
        :label="t('summary')"
        :value="summary"
        ref="summaryElement"
        @sl-change.self="setSummary"
        :disabled="isLoadingConfig"
      ></sl-input>
      <VariableSelector
        @add-variable="addVariableToSummary"
        :disabled="isLoadingConfig"
        :example-detection="extensionStore.detection"
      ></VariableSelector>
    </div>
    <div class="w-full">
      <sl-textarea
        :label="t('description')"
        :value="description"
        ref="descriptionElement"
        :disabled="isLoadingConfig"
        @sl-change.self="setDescription"
      ></sl-textarea>
      <VariableSelector
        @add-variable="addVariableToDescription"
        :disabled="isLoadingConfig"
        :example-detection="extensionStore.detection"
      ></VariableSelector>
    </div>
    <div class="w-full">
      <ActionsPrivacyPanel />
    </div>
    <div class="w-full flex flex-row justify-end items-center gap-3">
      <sl-button
        @click="cancel()"
        :disabled="isSaving || temporaryStatus"
        variant="neutral"
        size="small"
        slot="trigger"
      >
        {{ t('cancel') }}
      </sl-button>
      <sl-button
        @click="createTicket()"
        :disabled="isSaving || !extensionStore.isStepValid"
        :variant="temporaryStatus ? temporaryStatus : 'primary'"
        size="small"
        slot="trigger"
      >
        <sl-spinner v-if="isSaving" class="mr-1 inline-block"></sl-spinner>
        <sl-icon
          v-else-if="temporaryStatus === 'danger'"
          name="x-octagon"
          class="mr-1 inline-block"
        ></sl-icon>
        <sl-icon
          v-else-if="temporaryStatus === 'success'"
          name="check-circle"
          class="mr-1 inline-block"
        ></sl-icon>
        {{ t('createTicket') }}
      </sl-button>
    </div>
  </div>
</template>
