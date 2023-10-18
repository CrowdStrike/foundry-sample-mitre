<script setup lang="ts">
/**
 * Selected Technique/SubTechnique Side Panel Detail Component
 */
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type FalconApi from '@crowdstrike/foundry-js'
import { HorizontalRight16 } from '@mitre/vue-shared/icons'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import { type Technique } from '@mitre/vue-shared/types'
import { calculateDetectionsLink } from '@mitre/vue-shared/utils'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { computed, inject, ref } from 'vue'
import SubTechniques from './SubTechniques.vue'
import TechniqueDetections from './TechniqueDetections.vue'
import TechniqueOverview from './TechniqueOverview.vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi

// Necessary as:
// - sl-button doesn't allow for internal elements to take 100% width
// - falconApi.navigation.click accepts href only from anchors
const seeDetectionAnchor = ref()
const matrixChart = useMatrixChartStore()

const props = defineProps<{
  selectedItem?: Technique
}>()

const detectionUrl = computed(() =>
  calculateDetectionsLink(props.selectedItem, matrixChart.timeRange)
)

function goToDetections(e: MouseEvent) {
  falconApi.navigation.onClick(e, '_blank')
}
</script>

<template>
  <div class="flex flex-col justify-between h-full">
    <div>
      <div class="flex justify-between py-2 px-3 text-titles-and-attributes bg-surface-inner">
        <span class="text-lg text-titles-and-attributes">{{ props.selectedItem?.label }}</span>
        <div
          class="cursor-pointer rounded-sm bg-normal-idle shadow flex justify-center items-center w-8 h-8 p-1 shrink-0"
          @click="matrixChart.clearSelected()"
        >
          <HorizontalRight16 />
        </div>
      </div>
      <TechniqueOverview v-if="props.selectedItem" :technique="props.selectedItem" />
      <SubTechniques
        v-if="props.selectedItem?.sub_techniques?.length"
        :sub-techniques="props.selectedItem.sub_techniques"
      />
      <TechniqueDetections
        v-if="props.selectedItem?.severity_details"
        :detection-url="detectionUrl"
        :go-to-detections="goToDetections"
        :severity-details="props.selectedItem?.severity_details"
        :detections-number="props.selectedItem.detections_number"
      />
    </div>
    <div class="p-3 border-t border-lines-light">
      <sl-button variant="primary" class="w-full" @click="seeDetectionAnchor?.click()">
        <a
          :href="detectionUrl"
          @click.prevent.self="goToDetections"
          ref="seeDetectionAnchor"
          class="type-md-medium"
        >
          {{ t('buttonSeeDetections') }}
        </a>
      </sl-button>
    </div>
  </div>
</template>
