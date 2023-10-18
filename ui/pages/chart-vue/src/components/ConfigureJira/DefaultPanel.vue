<script setup lang="ts">
/**
 * Default wizard initial step
 */
import { useConfigureJiraStore } from '@/stores/configure-jira'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { computed, inject } from 'vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const configureJira = useConfigureJiraStore()

const isNotifyITConfigured = computed(() => configureJira.isNotifyITConfigured)
const isNotifyIRConfigured = computed(() => configureJira.isNotifyIRConfigured)
const isLoading = computed(() => configureJira.isLoading)
const configuredActions = computed(() => {
  return 0 + (isNotifyITConfigured.value ? 1 : 0) + (isNotifyIRConfigured.value ? 1 : 0)
})
const totalActions = 2
const textClass = computed(() => {
  return configuredActions.value === totalActions
    ? 'text-positive'
    : configuredActions.value > 0
    ? 'text-high'
    : 'text-critical'
})

configureJira.loadExistingConfigurations()
</script>

<template>
  <div class="mb-4">
    <h3 class="type-lg text-titles-and-attributes mb-2">
      {{ t('availableRemediationWorkflows') }}
    </h3>
    <div
      class="shadow-lg p-3 bg-surface-lg interactive-none hover:bg-surface-2xl cursor-pointer rounded"
      @click="configureJira.setWizardState('RansomwareRemediation:Step1')"
    >
      <h4 class="type-md-tight-medium text-titles-and-attributes mb-2">
        {{ t('ransomwareRemediation') }}
      </h4>
      <p class="type-md-tight mb-2">
        {{ t('createAJiraTicket') }}
      </p>
      <p v-if="isLoading" class="type-md-tight flex gap-2">
        <sl-spinner slot="prefix"></sl-spinner>
        <span>{{ t('loading') }}</span>
      </p>
      <p v-else class="type-md-tight flex gap-2">
        <span :class="textClass">&#x25CF;</span>
        <span>{{ t('workflowsConfigured', { configuredActions, totalActions }) }}</span>
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <sl-button
      @click="configureJira.hideConfigureDialog()"
      variant="neutral"
      size="small"
      slot="trigger"
    >
      {{ t('cancel') }}
    </sl-button>
  </div>
</template>
