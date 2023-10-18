<script setup lang="ts">
/**
 * Wizard Dialog to configure Jira Auto Remediation actions
 */
import { useConfigureJiraStore } from '@/stores/configure-jira'
import { CaretLeft16 } from '@mitre/vue-shared/icons'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject } from 'vue'
import DefaultPanel from './DefaultPanel.vue'
import NotifyIR from './NotifyIR.vue'
import NotifyIT from './NotifyIT.vue'
import RansomwareRemediationStep1 from './RansomwareRemediationStep1.vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const configureJira = useConfigureJiraStore()
</script>
<template>
  <sl-dialog
    class="dialog-overview"
    :open="configureJira.configureDialogShown"
    @sl-after-hide.self="configureJira.hideConfigureDialog()"
    style="--width: 45vw"
  >
    <div v-if="configureJira.wizardState === 'Default:DefaultPanel'" slot="label">
      {{ t('actionConfigureJiraAction') }}
    </div>

    <div
      class="cursor-pointer"
      slot="label"
      v-else-if="configureJira.wizardState === 'RansomwareRemediation:Step1'"
      @click="configureJira.setWizardState('Default:DefaultPanel')"
    >
      <CaretLeft16 class="inline-block mr-2" />{{ t('ransomwareRemediation') }}
    </div>

    <div
      class="cursor-pointer"
      slot="label"
      v-else-if="configureJira.wizardState === 'RansomwareRemediation:NotifyIT'"
      @click="configureJira.setWizardState('RansomwareRemediation:Step1')"
    >
      <CaretLeft16 class="inline-block mr-2" />{{ t('notifyIT') }}
    </div>

    <div
      class="cursor-pointer"
      slot="label"
      v-else-if="configureJira.wizardState === 'RansomwareRemediation:NotifyIR'"
      @click="configureJira.setWizardState('RansomwareRemediation:Step1')"
    >
      <CaretLeft16 class="inline-block mr-2" />{{ t('notifyIR') }}
    </div>

    <DefaultPanel v-if="configureJira.wizardState === 'Default:DefaultPanel'" />

    <RansomwareRemediationStep1
      v-else-if="configureJira.wizardState === 'RansomwareRemediation:Step1'"
    />

    <NotifyIT v-else-if="configureJira.wizardState === 'RansomwareRemediation:NotifyIT'" />

    <NotifyIR v-else-if="configureJira.wizardState === 'RansomwareRemediation:NotifyIR'" />
  </sl-dialog>
</template>
<style scoped></style>
