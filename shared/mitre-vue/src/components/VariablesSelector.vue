<script setup lang="ts">
/**
 * Variables selector component for summary/description text input/area.
 * Will show current value if a detection object is loaded.
 * Used in both the main app's page and the extension
 */
import type FalconApi from '@crowdstrike/foundry-js'
import { Info16 } from './icons/index'
import type { I18NComposer } from '../plugins/i18n'
import { JiraVariablesMapping, mapVariableToDetection } from '../utils/detection-jira-variables'
import SYMBOLS from '../utils/symbols'
import type { DetectionItem } from '../utils/types'
import { inject, ref } from 'vue'

const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi
const i18n = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const { t } = i18n

const dropdownEl = ref()
const emit = defineEmits(['addVariable'])
const open = ref(false)
const props = defineProps<{ exampleDetection?: DetectionItem; disabled?: boolean }>()

interface SlChangeEvent {
  detail: {
    item?: { value: string }
  }
}

/**
 * Select a variable, adding it to the input element
 */
const selectVariable = (event: SlChangeEvent) => {
  dropdownEl?.value.hide()

  if (event.detail.item?.value) {
    emit('addVariable', `\${${event.detail.item?.value}}`)
  }
}

/**
 * Retrieve the detection's current value, formatting it if needed
 */
const mapVariable = (key: string): string => {
  return mapVariableToDetection(falconApi, i18n, key, props.exampleDetection, '---')
}
</script>
<template>
  <div class="flex gap-1 items-center mt-2">
    <span v-if="props.disabled" class="inline-block text-xs text-disabled">Insert variable</span>
    <sl-dropdown
      ref="dropdownEl"
      v-else
      @sl-after-show="open = true"
      @sl-after-hide="open = false"
      hoist
    >
      <a
        slot="trigger"
        class="inline-block cursor-pointer text-xs underline focusable-outer focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"
      >
        {{ t('insertVariable') }}
      </a>
      <sl-menu @sl-select="selectVariable">
        <sl-menu-item v-for="(value, key) in JiraVariablesMapping" :key="key" :value="key">
          {{ key }}
          <sl-tooltip
            v-if="props.exampleDetection && mapVariable(key) !== 'undefined'"
            slot="suffix"
            style="--max-width: 90vw"
            :content="mapVariable(key)"
            hoist
          >
            <Info16 />
          </sl-tooltip>
        </sl-menu-item>
      </sl-menu>
    </sl-dropdown>
    <sl-tooltip :content="t('insertVariableTooltip')">
      <Info16 />
    </sl-tooltip>
  </div>
</template>
<style scoped>
sl-menu-item,
.menu-item,
sl-menu-item::part(label) {
  font-size: var(--cs-font-size-s);
}

sl-dropdown::part(panel),
.dropdown__panel,
::slotted(sl-menu),
.dropdown::part(popup) {
  --auto-size-available-height: 45vh;
}
</style>
