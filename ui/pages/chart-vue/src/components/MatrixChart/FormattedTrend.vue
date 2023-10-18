<script setup lang="ts">
/**
 * Formatted Trend Component
 *
 * A positive trend means an INCREASE of detections, so it will be shown in red
 * A negative trend means a DECREASE of detections, so it will be shown in green
 * Stable trend has no color
 */
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { computed, inject } from 'vue'

const props = defineProps<{ trend?: number }>()
const { n } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const formattedTrend = computed(() => {
  if (props.trend === undefined) {
    return ''
  }

  return n(Math.abs(props.trend), 'trend')
})

const trendSymbol = computed(() => {
  if (props.trend === undefined) {
    return ''
  }

  const arrow = props.trend === 0 ? '&nbsp;' : props.trend > 0 ? '&uarr;' : '&darr;'
  return arrow
})
</script>
<template>
  <span v-if="props.trend !== undefined" class="inline-flex items-center whitespace-nowrap">
    <span v-html="trendSymbol"></span>
    <span>{{ formattedTrend }}</span>
  </span>
</template>
