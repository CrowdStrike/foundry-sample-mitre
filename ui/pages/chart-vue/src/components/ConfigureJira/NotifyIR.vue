<script setup lang="ts">
/**
 * Wizard step that configures the Jira action to notify Incident Response
 */
import { useConfigureJiraStore } from '@/stores/configure-jira'
import { type AlertsPlugin } from '@mitre/vue-shared/plugins/alerts'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject, ref } from 'vue'
import NotifyConfigEdit from './NotifyConfigEdit.vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const configureJira = useConfigureJiraStore()
const alerts: AlertsPlugin = inject(SYMBOLS.ALERTS) as AlertsPlugin
const saving = ref(false)

const saveResult = async () => {
  saving.value = true
  try {
    const result = await configureJira.saveNotifyIR()

    if (result.saved) {
      configureJira.hideConfigureDialog()

      alerts.notify({
        variant: 'success',
        message: t('jiraIssueConfigured')
      })
    } else {
      alerts.notify({
        variant: 'danger',
        message: result.error?.message ?? t('errorConfiguringJiraIssue')
      })
    }
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <NotifyConfigEdit
    @submit="saveResult"
    @cancel="configureJira.hideConfigureDialog"
    step="RansomwareRemediation:NotifyIR"
    :saving="saving"
  />
</template>
