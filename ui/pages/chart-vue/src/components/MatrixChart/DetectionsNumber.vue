<script setup lang="ts">
/**
 * Formatted detections number (compact format after 9999)
 */
import { MitreDetectionFilledIcon, MitreDetectionOutlinedIcon } from '@mitre/vue-shared/icons'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { computed, inject } from 'vue'

const { n } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const props = defineProps<{ detections: number; smallIcon?: boolean }>()

const absDetections = computed(() => Math.abs(props.detections))

const formattedDetections = computed(() => {
  return n(absDetections.value, 'detections')
})

const shortenedDetections = computed(() => {
  return absDetections.value > 9999
    ? n(absDetections.value, 'detectionsCompact')
    : n(absDetections.value, 'detections')
})
</script>
<template>
  <span class="inline-flex items-center whitespace-nowrap">
    <span class="mr-1 inline-block">
      <MitreDetectionOutlinedIcon :size="16" color="default" v-if="props.smallIcon" />
      <MitreDetectionFilledIcon :size="20" color="default" v-else />
    </span>
    <span :title="formattedDetections">
      {{ shortenedDetections }}
    </span>
  </span>
</template>
