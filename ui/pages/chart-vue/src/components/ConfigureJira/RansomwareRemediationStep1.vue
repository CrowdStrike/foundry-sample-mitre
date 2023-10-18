<script setup lang="ts">
/**
 * Wizard to configure "Ransomware remediation" workflow
 * allowing the user to configure either the Notify IT or Notify IR action
 */
import { useConfigureJiraStore } from '@/stores/configure-jira'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { computed, inject } from 'vue'

const configureJira = useConfigureJiraStore()
const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const isNotifyITConfigured = computed(() => configureJira.isNotifyITConfigured)
const isNotifyIRConfigured = computed(() => configureJira.isNotifyIRConfigured)
const isLoading = computed(() => configureJira.isLoading)

configureJira.loadExistingConfigurations()
</script>

<template>
  <div class="mb-4">
    <h3 class="type-lg text-titles-and-attributes mb-2">
      {{ t('configureJiraActionsFollowing') }}
    </h3>
    <div
      class="shadow-lg p-3 bg-surface-lg interactive-none hover:bg-surface-2xl type-md-tight flex gap-2 justify-between mb-3 cursor-pointer rounded"
      @click="configureJira.setWizardState('RansomwareRemediation:NotifyIT')"
    >
      <span>{{ t('notifyIT') }}</span>
      <span v-if="isLoading" class="flex gap-2">
        <sl-spinner slot="prefix"></sl-spinner>
        <span>{{ t('loading') }}</span>
      </span>
      <span v-else-if="isNotifyITConfigured" class="flex gap-2">
        <span class="text-positive">&#x25CF;</span>
        <span>{{ t('configured') }}</span>
      </span>
      <span v-else class="flex gap-2">
        <span class="text-critical">&#x25CF;</span>
        <span>{{ t('notConfigured') }}</span>
      </span>
    </div>
    <div
      class="shadow-lg p-3 bg-surface-lg interactive-none hover:bg-surface-2xl type-md-tight flex gap-2 justify-between cursor-pointer rounded"
      @click="configureJira.setWizardState('RansomwareRemediation:NotifyIR')"
    >
      <span>{{ t('notifyIR') }}</span>
      <span v-if="isLoading" class="flex gap-2">
        <sl-spinner slot="prefix"></sl-spinner>
        <span>{{ t('loading') }}</span>
      </span>
      <span v-else-if="isNotifyIRConfigured" class="flex gap-2">
        <span class="text-positive">&#x25CF;</span>
        <span>{{ t('configured') }}</span>
      </span>
      <span v-else class="flex gap-2">
        <span class="text-critical">&#x25CF;</span>
        <span>{{ t('notConfigured') }}</span>
      </span>
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
