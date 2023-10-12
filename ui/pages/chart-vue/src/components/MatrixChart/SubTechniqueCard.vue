<script setup lang="ts">
/**
 * Sub Technique Component
 */
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type { Technique } from '@mitre/vue-shared/types'
import { computed } from 'vue'

interface Props {
  subtechnique: Technique
  index: number
  total: number
}

const props = defineProps<Props>()
const matrixChartStore = useMatrixChartStore()

const label = computed(() => props.subtechnique.label)
const borderClass = computed(() => `border-${props.subtechnique.severity.toLowerCase()}`)
const animationDelay = computed(() => `${props.index * 0.05}s`)
const zIndex = computed(() => props.total - props.index)

const isSelected = computed(
  () => matrixChartStore.selectedTechnique?.technique_id === props.subtechnique?.technique_id
)
const isFaded = computed(
  () =>
    matrixChartStore.selectedTechnique?.technique_id &&
    matrixChartStore.selectedTechnique?.technique_id !== props.subtechnique?.technique_id
)

const subtechniqueClasses = computed(() => [
  'subtechnique',
  'flex',
  'flex-row',
  'gap-2',
  'overflow-hidden',
  'rounded',
  'bg-surface-2xl',
  'px-2',
  'py-3',
  'mb-1',
  'overflow-hidden',
  'border-l-4',
  'shadow-md',
  isSelected.value ? 'selected' : null,
  isFaded.value ? 'opacity-50' : null,
  borderClass.value
])
</script>
<template>
  <div class="wrapper relative top-0 overflow-hidden" :style="{ 'z-index': zIndex }">
    <div
      :class="subtechniqueClasses"
      :style="{ '--animation-delay': animationDelay }"
      @click.stop="matrixChartStore.selectTechnique(props.subtechnique)"
    >
      <h5
        class="type-xs-tight w-full flex-grow overflow-hidden text-ellipsis whitespace-nowrap"
        :title="label"
      >
        {{ label }}
      </h5>
      <div class="type-xs-tight flex-none">{{ props.subtechnique.detections_number }}</div>
    </div>
  </div>
</template>
<style scoped>
@keyframes resize {
  from {
    max-height: 0;
  }

  to {
    max-height: 3rem;
  }
}

.wrapper {
  animation: resize 0.1s linear;
  animation-delay: var(--animation-delay);
}
</style>
