<script setup lang="ts">
/**
 * Ransomware remediation main component
 */
import { useExtensionDataStore } from '@/stores/extension'
import type FalconApi from '@crowdstrike/foundry-js'
import { CollapsiblePanel } from '@mitre/vue-shared/components'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { computed, inject } from 'vue'
import DefaultPanel from './RansomwareRemediation/DefaultPanel.vue'
import NotifyIR from './RansomwareRemediation/NotifyIR.vue'
import NotifyIT from './RansomwareRemediation/NotifyIT.vue'
import {
  calculateHostNameRef,
  calculateMitreTacticUrl,
  calculateMitreTechniqueUrl
} from '@mitre/vue-shared/utils'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const extensionStore = useExtensionDataStore()

const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi

const tacticHref = computed(() => calculateMitreTacticUrl(extensionStore.detection))

const techniqueHref = computed(() => calculateMitreTechniqueUrl(extensionStore.detection))

const hostnameHref = computed(() => calculateHostNameRef(extensionStore.detection))

const onClick = (e: MouseEvent) => falconApi.navigation.onClick(e, '_blank', 'falcon')
</script>
<template>
  <CollapsiblePanel :label="t('ransomwareRemediation')" font-class="type-md-medium" :open="true">
    <div class="bg-surface-md h-full w-full overflow-y-auto max-w-full">
      <div class="p-3">
        <div class="flex flex-row items-center justify-items-start gap-3 mb-3">
          <div class="w-2/3 truncate">
            <dt class="type-xs truncate text-body-and-labels" title="{{ t('tacticAndTechnique') }}">
              {{ t('tacticAndTechnique') }}
            </dt>
            <dd class="type-sm min-h-6 text-titles-and-attributes truncate">
              <a
                @click.stop.prevent="onClick"
                @auxclick.stop.prevent="onClick"
                class="underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"
                :href="tacticHref"
                target="_blank"
                :title="extensionStore.detection?.tactic"
                >{{ extensionStore.detection?.tactic }}</a
              >
              {{ t('via') }}
              <a
                @click.stop.prevent="onClick"
                @auxclick.stop.prevent="onClick"
                class="underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"
                :href="techniqueHref"
                target="_blank"
                :title="extensionStore.detection?.technique"
                >{{ extensionStore.detection?.technique }}</a
              >
            </dd>
          </div>
          <div class="w-1/3 truncate">
            <dt class="type-xs truncate text-body-and-labels">{{ t('hostname') }}</dt>
            <dd
              class="type-sm min-h-6 text-titles-and-attributes truncate"
              :title="extensionStore.detection?.device?.hostname"
            >
              <a
                @click.stop.prevent="onClick"
                @auxclick.stop.prevent="onClick"
                class="underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"
                :href="hostnameHref"
                target="_blank"
                >{{ extensionStore.detection?.device?.hostname }}</a
              >
            </dd>
          </div>
        </div>
        <div class="flex flex-row items-center justify-items-start gap-3 mb-3">
          <div class="w-full truncate">
            <dt class="type-xs truncate text-body-and-labels">{{ t('description') }}</dt>
            <dd class="type-sm min-h-6 text-titles-and-attributes w-full">
              {{ t('createAJiraTicket') }}
            </dd>
          </div>
        </div>
      </div>
      <DefaultPanel v-if="extensionStore.wizardState === 'RansomwareRemediation:DefaultPanel'" />
      <NotifyIT v-if="extensionStore.wizardState === 'RansomwareRemediation:NotifyIT'" />
      <NotifyIR v-if="extensionStore.wizardState === 'RansomwareRemediation:NotifyIR'" />
    </div>
  </CollapsiblePanel>
</template>
<style scoped>
sl-details::part(content) {
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline: 0;
}
</style>
