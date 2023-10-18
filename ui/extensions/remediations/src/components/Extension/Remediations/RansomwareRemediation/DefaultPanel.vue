<script setup lang="ts">
/**
 * Default extension panel component
 */
import { useExtensionDataStore } from '@/stores/extension'
import type FalconApi from '@crowdstrike/foundry-js'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject } from 'vue'

const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi
const extensionStore = useExtensionDataStore()
const { t, d } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const showNotifyIT = () => {
  extensionStore.clearWizardStateStep('RansomwareRemediation:NotifyIR')
  extensionStore.setWizardState('RansomwareRemediation:NotifyIT')
}

const showNotifyIR = () => {
  extensionStore.clearWizardStateStep('RansomwareRemediation:NotifyIT')
  extensionStore.setWizardState('RansomwareRemediation:NotifyIR')
}

/**
 * Will open the wizard at the related step on the main app page
 */
const openActionsConfiguration = () => {
  if (!extensionStore.notifyITConfig && !extensionStore.notifyIRConfig) {
    falconApi.navigation.navigateTo({
      path: `/wizard`,
      type: 'internal',
      target: '_blank'
    })
  } else if (!extensionStore.notifyITConfig) {
    falconApi.navigation.navigateTo({
      path: `/notify-it`,
      type: 'internal',
      target: '_blank'
    })
  } else if (!extensionStore.notifyIRConfig) {
    falconApi.navigation.navigateTo({
      path: `/notify-ir`,
      type: 'internal',
      target: '_blank'
    })
  }
}
</script>
<template>
  <div class="p-3">
    <div
      v-if="extensionStore.notifyITConfig || extensionStore.notifyIRConfig"
      class="flex flex-row items-center justify-items-start gap-3 mb-4"
    >
      <sl-button
        :disabled="!extensionStore.notifyITConfig"
        @click="showNotifyIT()"
        variant="neutral"
        size="small"
        slot="trigger"
      >
        {{ t('notifyIT') }}
      </sl-button>
      <sl-button
        :disabled="!extensionStore.notifyIRConfig"
        @click="showNotifyIR()"
        variant="neutral"
        size="small"
        slot="trigger"
      >
        {{ t('notifyIR') }}
      </sl-button>
    </div>
    <div v-if="!extensionStore.notifyITConfig && !extensionStore.notifyIRConfig">
      <h2 class="text-critical type-md-medium">{{ t('actionNotConfigured') }}</h2>
      <p class="type-sm mb-4">{{ t('configureActionsInAppMessage') }}</p>
      <sl-button @click="openActionsConfiguration()" variant="neutral" size="small" slot="trigger">
        {{ t('configureInApp') }}
      </sl-button>
    </div>
    <div v-else-if="!extensionStore.notifyITConfig">
      <h2 class="text-high type-md-medium">{{ t('notifyITNotConfigured') }}</h2>
      <p class="type-sm mb-4">{{ t('configureNotifyITInAppMessage') }}</p>
      <sl-button @click="openActionsConfiguration()" variant="neutral" size="small" slot="trigger">
        {{ t('configureInApp') }}
      </sl-button>
    </div>
    <div v-else-if="!extensionStore.notifyIRConfig">
      <h2 class="text-high type-md-medium">{{ t('notifyIRNotConfigured') }}</h2>
      <p class="type-sm mb-4">{{ t('configureNotifyIRInAppMessage') }}</p>
      <sl-button @click="openActionsConfiguration()" variant="neutral" size="small" slot="trigger">
        {{ t('configureInApp') }}
      </sl-button>
    </div>

    <div v-if="extensionStore.existingTicketIT || extensionStore.existingTicketIR" class="pt-3">
      <h2 class="type-md-medium text-titles-and-attributes mb-3">
        {{ t('remediationHistory') }}
      </h2>

      <div
        v-if="extensionStore.existingTicketIT"
        class="mb-4 bg-surface-inner p-3 flex gap-3 justify-between"
      >
        <div class="w-1/4 truncate">
          <h3 class="type-xs text-body-and-labels">{{ t('action') }}</h3>
          <p class="type-sm text-titles-and-attributes">{{ t('notifyIT') }}</p>
        </div>

        <div class="w-1/3 truncate">
          <h3 class="type-xs text-body-and-labels">{{ t('jiraTicket') }}</h3>
          <p class="type-sm text-titles-and-attributes">
            {{ extensionStore.existingTicketIT.issueKey }}
          </p>
        </div>

        <div class="truncate">
          <h3 class="type-xs text-body-and-labels">{{ t('executionDate') }}</h3>
          <p class="type-sm text-titles-and-attributes">
            {{ d(new Date(extensionStore.existingTicketIT.creationDate), 'fullDateTime') }}
          </p>
        </div>
      </div>

      <div
        v-if="extensionStore.existingTicketIR"
        class="mb-4 bg-surface-inner p-3 flex gap-3 justify-between"
      >
        <div class="w-1/4 truncate">
          <h3 class="type-xs text-body-and-labels">{{ t('action') }}</h3>
          <p class="type-sm text-titles-and-attributes">{{ t('notifyIR') }}</p>
        </div>

        <div class="w-1/3 truncate">
          <h3 class="type-xs text-body-and-labels">{{ t('jiraTicket') }}</h3>
          <p class="type-sm text-titles-and-attributes">
            {{ extensionStore.existingTicketIR.issueKey }}
          </p>
        </div>

        <div class="truncate">
          <h3 class="type-xs text-body-and-labels">{{ t('executionDate') }}</h3>
          <p class="type-sm text-titles-and-attributes">
            {{ d(new Date(extensionStore.existingTicketIR.creationDate), 'fullDateTime') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
