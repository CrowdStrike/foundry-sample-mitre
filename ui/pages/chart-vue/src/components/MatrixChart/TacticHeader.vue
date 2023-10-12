<script setup lang="ts">
/**
 * Tactic Header Component
 */
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type { Tactic } from '@mitre/vue-shared/types'
import DetectionsNumber from './DetectionsNumber.vue'
import FormattedTrend from './FormattedTrend.vue'
import { computed } from 'vue'

const matrixChartStore = useMatrixChartStore()

interface Props {
  tactic: Tactic
}

const props = defineProps<Props>()

const isOpaque = computed(() => {
  return (
    matrixChartStore.selectedTechnique !== undefined &&
    matrixChartStore.selectedTechnique?.tactic_id !== props.tactic.id
  )
})

const label = computed(() => props.tactic.label)

const showTrends = computed(() => matrixChartStore.showTrends && props.tactic.trend !== undefined)

const trendClass = computed(() =>
  props.tactic.trend === undefined
    ? ''
    : props.tactic.trend === 0
    ? 'bg-medium'
    : props.tactic.trend > 0
    ? 'bg-critical'
    : 'bg-positive'
)
</script>
<template>
  <h3
    :class="[
      'type-md-tight-medium',
      'text-titles-and-attributes',
      'w-full',
      'overflow-hidden',
      'text-ellipsis',
      'whitespace-nowrap',
      isOpaque ? 'opacity-50' : ''
    ]"
    :title="label"
  >
    {{ label }}
  </h3>
  <div class="flex items-center gap-2">
    <DetectionsNumber :detections="props.tactic.detections_number" />
    <div
      v-if="showTrends"
      :class="['type-xs-tight', 'rounded-sm', 'text-surface-inner', 'px-1', trendClass]"
    >
      <FormattedTrend :trend="props.tactic.trend" />
    </div>
  </div>
</template>
