<script setup lang="ts">
/**
 * Mitre Matrix Chart Main Component
 */
import ChartHeader from '@/components/MatrixChart/ChartHeader/ChartHeader.vue'
import InfoPanel from '@/components/MatrixChart/InfoPanel/InfoPanel.vue'
import SeverityLegend from '@/components/MatrixChart/SeverityLegend.vue'
import TacticColumn from '@/components/MatrixChart/TacticColumn.vue'
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { Activity24 } from '@mitre/vue-shared/icons'
import type { SlDrawer } from '@shoelace-style/shoelace'
import { computed, inject, onMounted, ref, watch } from 'vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const matrixChart = useMatrixChartStore()
let drawer = ref<SlDrawer>()

// Computed
const isLoading = computed(() => matrixChart.isLoading)

const selectedItem = computed(() => matrixChart.selectedTechnique)

const sidePanelOpen = computed(() => selectedItem?.value?.id !== undefined)

const emptyResult = computed(
  () => matrixChart.firstLoadDone && matrixChart.loadedTactics.length === 0
)

/**
 * We are choosing a manual toggle because this component's child contains a
 * `sl-details`, and its `sl-hide/show` event clashes with the same event from `sl-drawer`
 * rendered here
 */
watch(selectedItem, (selectedItem) => {
  if (selectedItem) {
    drawer?.value?.show()
  } else {
    drawer?.value?.hide()
  }
})

// Methods
const loadData = async () => {
  matrixChart.reloadData()
}

// Mounted
onMounted(() => {
  loadData()
})
</script>
<template>
  <div class="matrix-chart bg-ground-floor flex max-w-full select-none flex-col">
    <ChartHeader />
    <div
      :class="[
        'g-3 flex flex-row items-stretch p-4 transition-all',
        sidePanelOpen ? 'side-panel-open' : null
      ]"
    >
      <div class="flex w-full flex-grow flex-col">
        <div class="mitre-content relative top-0 h-full w-full overflow-x-auto pb-3">
          <div
            v-if="emptyResult"
            class="empty-results flex h-full w-full items-center justify-center"
          >
            <div class="flex w-96 flex-none flex-col items-center justify-center text-center">
              <div class="inline-block p-6"><Activity24 /></div>
              <h2 class="type-xl text-titles-and-attributes">
                {{ t('noMatchingMitreDetections') }}
              </h2>
              <p class="type-md-tight text-body-and-labels">{{ t('updateYourDetection') }}</p>
            </div>
          </div>
          <div
            v-else
            :class="[
              'flex',
              'flex-grow',
              'flex-row',
              'gap-1',
              isLoading ? 'pointer-events-none touch-none opacity-50' : null
            ]"
          >
            <TacticColumn
              v-for="tactic in matrixChart.loadedTactics"
              :key="tactic.id"
              :tactic="tactic"
            />
          </div>
          <div
            v-if="isLoading"
            class="type-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
          >
            <sl-spinner></sl-spinner>
          </div>
        </div>
        <div class="flex flex-row justify-end pt-3">
          <SeverityLegend />
        </div>
      </div>
      <sl-drawer
        ref="drawer"
        contained
        class="drawer-contained chart-side-panel"
        noHeader
        style="--size: 524px"
      >
        <InfoPanel :selected-item="selectedItem" />
      </sl-drawer>
    </div>
  </div>
</template>
<style scoped>
.matrix-chart .mitre-content {
  /* Those values are to fill the full Falcon page height, with no scroll, removing the space used by the header, sub header and navigation bar */
  min-height: calc(100vh - 125px - 56px);
}

.side-panel-open {
  padding-right: 540px;
}

.chart-side-panel::part(body) {
  background-color: var(--surface-lg);
  padding: 0;
}
</style>
