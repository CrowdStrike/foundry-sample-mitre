<script setup lang="ts">
/**
 * Stylized Micro Switch Component
 */
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject } from 'vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const emit = defineEmits(['change'])
const props = defineProps<{ value: boolean; disabled?: boolean }>()

function onChange() {
  emit('change')
}
</script>
<template>
  <div class="type-md-tight flex items-center justify-center gap-3">
    <div><slot></slot></div>
    <sl-switch
      :disabled="props.disabled"
      size="small"
      :checked="props.value"
      @sl-change="onChange"
      style="--width: 24px; --height: 12px; --thumb-size: 10px"
    >
      <span v-if="props.value">{{ t('filterSwitchOn') }}</span>
      <span v-else>{{ t('filterSwitchOff') }}</span>
    </sl-switch>
  </div>
</template>
