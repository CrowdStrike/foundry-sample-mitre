<script setup lang="ts">
/**
 * Mitre Chart TimeSpan Selector Component
 */
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import {
  TimeRanges,
  TimeRangesLabels,
  TimeRangesTranslations,
  type TimeRangeValue
} from '@mitre/vue-shared/types'
import { computed, inject } from 'vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
interface SlChangeEvent {
  detail: {
    item?: { value: TimeRangeValue }
  }
}

const matrixChartStore = useMatrixChartStore()

const selectedTimeRange = computed(() => {
  return TimeRangesTranslations[TimeRangesLabels[matrixChartStore.timeRange]]
})

const changeTimeRange = (item: SlChangeEvent) => {
  matrixChartStore.changeTimeRange(item?.detail?.item?.value ?? '1d')
}
</script>
<template>
  <div class="h-8">
    <sl-dropdown>
      <sl-button variant="neutral" size="small" slot="trigger" class="h-8" caret>{{
        t(selectedTimeRange)
      }}</sl-button>
      <sl-menu @sl-select="changeTimeRange">
        <sl-menu-item
          v-for="(_value, key) in TimeRanges"
          :key="key"
          :value="key"
          :data-value="key"
          >{{ t(TimeRangesTranslations[TimeRangesLabels[key]]) }}</sl-menu-item
        >
      </sl-menu>
    </sl-dropdown>
  </div>
</template>
