<script setup lang="ts">
/**
 * Technique Card Component
 * Can contain one or more "SubTechniqueCard"
 */

import { useMatrixChartStore } from '@/stores/matrix-chart'
import {
  ChevronUp16Component,
  GroupRows16Component,
  UngroupRows16Component
} from '@mitre/vue-shared/icons'
import { computed } from 'vue'
import DetectionsNumber from './DetectionsNumber.vue'
import FormattedTrend from './FormattedTrend.vue'
import SubTechnique from './SubTechniqueCard.vue'

import type { Technique } from '@mitre/vue-shared/types'

interface Props {
  technique: Technique
}

const props = defineProps<Props>()
const matrixChartStore = useMatrixChartStore()

// Computed
const label = computed(() => props.technique.label)
const subtechniques = computed(() => props.technique.sub_techniques ?? [])
const showTrends = computed(
  () => matrixChartStore.showTrends && props.technique.trend !== undefined
)

const isSelected = computed(
  () =>
    matrixChartStore.selectedTechnique?.technique_id === props.technique?.technique_id ||
    matrixChartStore.selectedTechnique?.parent_technique_id === props.technique?.technique_id
)
const isFaded = computed(
  () =>
    matrixChartStore.selectedTechnique?.technique_id &&
    matrixChartStore.selectedTechnique?.technique_id !== props.technique?.technique_id &&
    matrixChartStore.selectedTechnique?.parent_technique_id !== props.technique?.technique_id
)
const showSubtechniques = computed(() => matrixChartStore.showSubtechniques)
const isExpanded = computed(() => matrixChartStore.expandedTechniques.includes(props.technique.id))
const hasSubTechniques = computed(() => subtechniques.value.length > 0 && showSubtechniques.value)
const boxClass = computed(() => `bg-${props.technique.severity.toLowerCase()}`)

const containerClasses = computed(() => [
  'relative',
  'z-10',
  'technique-box',
  'flex',
  'flex-col',
  'rounded',
  'p-2',
  'text-mezzanine',
  'cursor-pointer',
  isExpanded.value ? 'shadow-inner-md' : 'shadow-base',
  isSelected.value ? 'selected' : null,
  isExpanded.value ? 'expanded' : 'collapsed',
  hasSubTechniques.value ? 'has-subtechniques' : 'no-subtechniques',
  boxClass.value
])

const subtechniqueIndicatorClasses = computed(() => [
  'relative',
  'z-0',
  'subtechniques-indicator',
  'h-0.5',
  'mt-0.5',
  'ml-2',
  'rounded-b-sm',
  'shadow-md',
  boxClass.value
])

// Methods
const toggleExpanded = () => {
  matrixChartStore.toggleTechnique(props.technique.id)
}
</script>

<template>
  <div :class="['mb-1 flex flex-col', isFaded ? 'opacity-50' : null]">
    <div
      :class="containerClasses"
      :data-is-expanded="isExpanded"
      :data-has-subtechniques="hasSubTechniques"
      @click.stop="matrixChartStore.selectTechnique(props.technique)"
    >
      <div class="flex flex-row items-start gap-2">
        <div class="type-xs-tight flex-none">
          <DetectionsNumber :detections="props.technique.detections_number" :small-icon="true" />
        </div>
        <div v-if="showTrends" class="type-xs-tight flex-none">
          <FormattedTrend :trend="props.technique.trend" />
        </div>
        <div class="flex-grow justify-self-end text-right" v-if="hasSubTechniques">
          <button type="button" @click.stop="toggleExpanded">
            <UngroupRows16Component v-if="isExpanded" />
            <GroupRows16Component v-else />
          </button>
        </div>
      </div>
      <h4
        class="type-xs-tight mt-2 w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold"
        :title="label"
      >
        {{ label }}
      </h4>
    </div>
    <div v-if="hasSubTechniques">
      <div v-if="isExpanded" class="subtechniques flex flex-col pl-2 pt-1">
        <SubTechnique
          v-for="(subtechnique, index) in subtechniques"
          :key="subtechnique.id"
          :subtechnique="subtechnique"
          :index="index"
          :total="subtechniques.length"
        ></SubTechnique>
        <button
          class="interactive-none hover:bg-surface-md mb-1 flex items-center justify-center rounded-sm p-1"
          type="button"
          @click.stop="toggleExpanded"
        >
          <ChevronUp16Component />
        </button>
      </div>
      <div v-else :class="subtechniqueIndicatorClasses"></div>
    </div>
  </div>
</template>
<style scoped>
.technique-box.no-subtechniques {
  min-height: 4.25rem;
}

.technique-box.has-subtechniques {
  min-height: calc(4rem - 0.25rem);
}
</style>
