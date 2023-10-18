<script setup lang="ts">
/**
 * Configures a Jira Auto Remediation action
 * it's shared by either NotifyIT or NotifyIR at the moment
 */
import { useConfigureJiraStore, type WizardState } from '@/stores/configure-jira'
import type FalconApi from '@crowdstrike/foundry-js'
import { ActionsPrivacyPanel, VariableSelector } from '@mitre/vue-shared/components'
import type { AlertsPlugin } from '@mitre/vue-shared/plugins/alerts'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import {
  retrieveJiraAccountProjects,
  retrieveJiraIntegrationAccounts,
  retrieveJiraProjectData
} from '@mitre/vue-shared/utils'
import { DEFAULT_SUMMARY } from '@mitre/vue-shared/utils/jira'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import type {
  JiraIntegrationAccount,
  JiraProjectData,
  JiraProjectItem
} from '@mitre/vue-shared/types'
import { computed, inject, ref, watch } from 'vue'

const alerts: AlertsPlugin = inject(SYMBOLS.ALERTS) as AlertsPlugin
const emit = defineEmits(['submit', 'cancel'])
const props = defineProps<{ step: WizardState; saving?: boolean }>()
const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const isLoading = ref(true)
const accountsLoaded = ref(false)
const projectsLoaded = ref(false)
const projectDataLoaded = ref(false)
const summaryElement = ref()
const descriptionElement = ref()
const accountElement = ref()
const projectElement = ref()
const labelsElement = ref()
const priorityElement = ref()
const issueTypeElement = ref()

const configureJira = useConfigureJiraStore()
const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi

const integrationAccounts = ref<JiraIntegrationAccount[]>()
const accountProjects = ref<JiraProjectItem[]>([])
const projectData = ref<JiraProjectData>()

const state = computed(() => props.step)
const saving = computed(() => props.saving)

const account = computed<string>(() => configureJira.getWizardStateProperty<string>('account', ''))
const project = computed<string>(() => configureJira.getWizardStateProperty<string>('project', ''))

const labels = computed<string[]>(() => {
  const out = configureJira.getWizardStateProperty<string[]>('labels', [])
  return out
})

const priority = computed<string>(() =>
  configureJira.getWizardStateProperty<string>('priority', '')
)

const issueType = computed<string>(() =>
  configureJira.getWizardStateProperty<string>('issueType', '')
)

const summary = computed<string>(() =>
  configureJira.getWizardStateProperty<string>('summary', DEFAULT_SUMMARY)
)

const description = computed<string>(() =>
  configureJira.getWizardStateProperty<string>('description', '')
)

const setAccount = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value
  configureJira.setWizardStateProperty('account', newValue)
  configureJira.setWizardStateProperty('project', undefined)
  configureJira.setWizardStateProperty('priority', undefined)
  configureJira.setWizardStateProperty('labels', undefined)
  configureJira.setWizardStateProperty('issueType', undefined)
  configureJira.setWizardStateProperty('summary', undefined)
  configureJira.setWizardStateProperty('description', undefined)

  await loadAccountProjects()

  checkValidity()
}

const setProject = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value
  configureJira.setWizardStateProperty('project', newValue)
  configureJira.setWizardStateProperty('priority', undefined)
  configureJira.setWizardStateProperty('labels', undefined)
  configureJira.setWizardStateProperty('issueType', undefined)
  configureJira.setWizardStateProperty('summary', undefined)
  configureJira.setWizardStateProperty('description', undefined)

  await loadProjectData()

  checkValidity()
}

const projectDataInputDisabled = computed(
  () =>
    !projectDataLoaded.value ||
    !accountsLoaded.value ||
    !account.value ||
    !project.value ||
    isLoadingConfig.value
)

const projectDataInputLoading = computed(
  () => !projectDataLoaded.value && accountsLoaded.value && account.value && project.value
)

const projectInputDisabled = computed(
  () => !projectsLoaded.value || !accountsLoaded.value || !account.value || isLoadingConfig.value
)

const projectInputLoading = computed(
  () => !projectsLoaded.value && accountsLoaded.value && account.value
)

const setLabels = (event: { target: { selectedOptions: Array<{ value: string }> } }) => {
  const selectedOptions = (event?.target?.selectedOptions ?? []).map(
    (item) => item.value
  ) as string[]

  configureJira.setWizardStateProperty('labels', selectedOptions)

  checkValidity()
}

const setPriority = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value

  configureJira.setWizardStateProperty('priority', newValue)

  checkValidity()
}

const setIssueType = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value

  configureJira.setWizardStateProperty('issueType', newValue)

  checkValidity()
}

const setSummary = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value

  configureJira.setWizardStateProperty('summary', newValue.trim() || DEFAULT_SUMMARY)

  checkValidity()
}

const setDescription = async (event: { target: { value: string } }) => {
  const newValue = event?.target?.value

  configureJira.setWizardStateProperty('description', newValue.trim())

  checkValidity()
}

const loadIntegrationAccounts = async () => {
  try {
    const getOrigin = inject<() => string>(SYMBOLS.FALCON_API_GET_ORIGINS) as () => string

    accountsLoaded.value = false
    isLoading.value = true
    integrationAccounts.value = await retrieveJiraIntegrationAccounts(falconApi, getOrigin())

    if (!integrationAccounts.value?.length) {
      alerts.notify({
        variant: 'danger',
        message: t('noJiraAccount')
      })
    }
    accountsLoaded.value = true
  } finally {
    isLoading.value = false
  }
}

const loadAccountProjects = async () => {
  try {
    projectsLoaded.value = false
    isLoading.value = true
    if (account.value) {
      accountProjects.value = await retrieveJiraAccountProjects(falconApi, account.value)
    } else {
      accountProjects.value = []
    }
    if (!accountProjects.value?.length) {
      alerts.notify({
        variant: 'danger',
        message: t('noJiraProject')
      })
    }
    projectsLoaded.value = true
  } finally {
    isLoading.value = false
  }
}

const loadProjectData = async () => {
  try {
    projectDataLoaded.value = false
    isLoading.value = true
    if (account.value && project.value) {
      const accountItem = integrationAccounts.value?.find((item) => item.id === account.value)
      const projectItem = accountProjects.value?.find((item) => item.id === project.value)
      if (accountItem && projectItem) {
        projectData.value = await retrieveJiraProjectData(falconApi, accountItem, projectItem)

        if (!projectData.value?.issueTypes?.length) {
          alerts.notify({
            variant: 'danger',
            message: t('noJiraIssueType')
          })
        }

        if (!projectData.value?.priorities?.length) {
          alerts.notify({
            variant: 'danger',
            message: t('noJiraPriority')
          })
        }

        if (!projectData.value?.labels?.length) {
          alerts.notify({
            variant: 'danger',
            message: t('noJiraLabels')
          })
        }
      } else {
        projectData.value = undefined
      }
    } else {
      projectData.value = undefined
    }
    projectDataLoaded.value = true
  } finally {
    isLoading.value = false
  }
}

const isValid = computed(() => {
  return configureJira.isStepValid
})

const addVariableToSummary = (variable: string) => {
  configureJira.setWizardStateProperty('summary', `${summary.value.trim()} ${variable}`.trim())

  summaryElement.value.focus()

  checkValidity()
}

const addVariableToDescription = (variable: string) => {
  configureJira.setWizardStateProperty(
    'description',
    `${description.value.trim()} ${variable}`.trim()
  )

  descriptionElement.value.focus()

  checkValidity()
}

const submit = () => {
  if (checkValidity()) {
    emit('submit')
  }
}

const isLoadingConfig = computed(() => configureJira.isLoading || !accountsLoaded.value)

const footerButtonsDisabled = computed(() => {
  return (
    saving.value ||
    isLoadingConfig.value ||
    isLoading.value ||
    projectDataInputLoading.value ||
    projectInputLoading.value ||
    !accountsLoaded.value
  )
})

const validationMessages = computed(() => {
  return configureJira.validationMessages
})

const init = async () => {
  configureJira.setWizardState(state.value)

  configureJira.setWizardStateProperty('account', undefined)
  configureJira.setWizardStateProperty('priority', undefined)
  configureJira.setWizardStateProperty('project', undefined)
  configureJira.setWizardStateProperty('labels', undefined)
  configureJira.setWizardStateProperty('issueType', undefined)
  configureJira.setWizardStateProperty('summary', DEFAULT_SUMMARY)
  configureJira.setWizardStateProperty('description', undefined)

  await loadIntegrationAccounts()

  await configureJira.loadExistingConfigurations()

  if (account.value) {
    await loadAccountProjects()
  }

  if (project.value) {
    await loadProjectData()
  }

  checkValidity()
}

const checkValidity = () => {
  const { project, account, priority, labels, issueType, summary, description } =
    validationMessages.value

  projectElement.value?.setCustomValidity(project)
  accountElement.value?.setCustomValidity(account)
  priorityElement.value?.setCustomValidity(priority)
  labelsElement.value?.setCustomValidity(labels)
  issueTypeElement.value?.setCustomValidity(issueType)
  summaryElement.value.setCustomValidity(summary)
  descriptionElement.value?.setCustomValidity(description)

  if (!projectElement.value?.disabled) projectElement.value?.reportValidity()
  if (!accountElement.value?.disabled) accountElement.value?.reportValidity()
  if (!priorityElement.value?.disabled) priorityElement.value?.reportValidity()
  if (!labelsElement.value?.disabled) labelsElement.value?.reportValidity()
  if (!issueTypeElement.value?.disabled) issueTypeElement.value?.reportValidity()
  if (!summaryElement.value?.disabled) summaryElement.value?.reportValidity()
  if (!descriptionElement.value?.disabled) descriptionElement.value?.reportValidity()

  return isValid.value
}

watch(
  () => labels,
  (labels) => {
    if (labelsElement.value) {
      labelsElement.value.value = labels
    }
  }
)

init()
</script>

<template>
  <div>
    <div class="mb-4">
      <h3 class="type-lg text-titles-and-attributes mb-2">
        {{ t('configureTheJiraAction') }}
      </h3>
    </div>
    <div v-if="isLoadingConfig" class="type-4xl p-6 flex items-center justify-center">
      <sl-spinner></sl-spinner>
    </div>
    <form v-else @submit.prevent="submit">
      <div class="w-full mb-3">
        <sl-select
          :label="t('account')"
          :value="account"
          @sl-change.self="setAccount"
          placement="bottom"
          :disabled="!accountsLoaded || saving"
          ref="accountElement"
          required
        >
          <sl-spinner v-if="!accountsLoaded" slot="prefix"></sl-spinner>
          <sl-option
            v-for="integrationAccount in integrationAccounts"
            :key="integrationAccount.id"
            :value="integrationAccount.id"
            >{{ integrationAccount.name }}</sl-option
          >
        </sl-select>
      </div>
      <div class="w-full mb-3">
        <sl-select
          :label="t('projects')"
          :value="project"
          @sl-change.self="setProject"
          placement="bottom"
          :disabled="projectInputDisabled || saving"
          ref="projectElement"
          required
        >
          <sl-spinner v-if="projectInputLoading" slot="prefix"></sl-spinner>
          <sl-option
            v-for="accountProject in accountProjects"
            :key="accountProject.id"
            :value="accountProject.id"
            >{{ accountProject.name }}</sl-option
          >
        </sl-select>
      </div>
      <div class="w-full mb-3">
        <sl-select
          :label="t('labels')"
          :value="labels"
          @sl-change.self="setLabels"
          placement="bottom"
          :disabled="projectDataInputDisabled || saving"
          ref="labelsElement"
          multiple
          clearable
          required
        >
          <sl-spinner v-if="projectDataInputLoading" slot="prefix"></sl-spinner>
          <sl-option v-for="jiraLabel in projectData?.labels" :key="jiraLabel" :value="jiraLabel">{{
            jiraLabel
          }}</sl-option>
        </sl-select>
      </div>
      <div class="w-full mb-3">
        <sl-select
          :label="t('priority')"
          :value="priority"
          @sl-change.self="setPriority"
          placement="bottom"
          :disabled="projectDataInputDisabled || saving"
          ref="priorityElement"
          required
        >
          <sl-spinner v-if="projectDataInputLoading" slot="prefix"></sl-spinner>
          <sl-option
            v-for="priority in projectData?.priorities"
            :key="priority.id"
            :value="priority.id"
            >{{ priority.name }}</sl-option
          >
        </sl-select>
      </div>
      <div class="w-full mb-3">
        <sl-select
          :label="t('issueType')"
          :value="issueType"
          @sl-change.self="setIssueType"
          placement="bottom"
          :disabled="projectDataInputDisabled || saving"
          ref="issueTypeElement"
          required
        >
          <sl-spinner v-if="projectDataInputLoading" slot="prefix"></sl-spinner>
          <sl-option
            v-for="issueType in projectData?.issueTypes"
            :key="issueType.id"
            :value="issueType.id"
            >{{ issueType.name }}</sl-option
          >
        </sl-select>
      </div>
      <div class="w-full mb-3">
        <sl-input
          :label="t('summary')"
          :value="summary"
          ref="summaryElement"
          @sl-change.self="setSummary"
          :disabled="projectDataInputDisabled || saving"
          required
        ></sl-input>
        <VariableSelector
          @add-variable="addVariableToSummary"
          :disabled="projectDataInputDisabled || saving"
        ></VariableSelector>
      </div>
      <div class="w-full mb-3">
        <sl-textarea
          :label="t('description')"
          :value="description"
          ref="descriptionElement"
          @sl-change.self="setDescription"
          :disabled="projectDataInputDisabled || saving"
        ></sl-textarea>
        <VariableSelector
          @add-variable="addVariableToDescription"
          :disabled="projectDataInputDisabled || saving"
        ></VariableSelector>
      </div>
      <div class="w-full mb-6">
        <ActionsPrivacyPanel />
      </div>
    </form>
  </div>
  <div slot="footer">
    <div class="flex items-center justify-stretch w-full form-buttons">
      <sl-button
        @click="$emit('cancel')"
        variant="neutral"
        size="small"
        slot="trigger"
        class="grow w-full"
        :disabled="footerButtonsDisabled"
      >
        {{ t('cancel') }}
      </sl-button>
      <sl-button
        @click="submit()"
        :disabled="footerButtonsDisabled || !isValid"
        variant="primary"
        size="small"
        slot="trigger"
        class="grow w-full"
      >
        <sl-spinner v-if="saving" class="mr-1 inline-block"></sl-spinner>
        <span>{{ t('save') }}</span>
      </sl-button>
    </div>
  </div>
</template>
<style scoped>
.form-buttons sl-button:first-child::part(base) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.form-buttons sl-button:last-child::part(base) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
