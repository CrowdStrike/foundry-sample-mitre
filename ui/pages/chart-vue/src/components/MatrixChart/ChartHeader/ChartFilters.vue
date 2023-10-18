<script setup lang="ts">
/**
 * Mitre Chart Filters Component
 */
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { computed, inject } from 'vue'
import ActionsButton from './ActionsButton.vue'
import NanoSwitch from './NanoSwitch.vue'
import TimeSpanSelector from './TimeSpanSelector.vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const matrixChart = useMatrixChartStore()

// Computed
const showTrends = computed(() => matrixChart.showTrends)
const showSubtechniques = computed(() => matrixChart.showSubtechniques)
const isLoading = computed(() => matrixChart.isLoading)

const isShowTrendsDisabled = computed(() => isLoading.value)
const isShowSubTechniquesDisabled = computed(() => isLoading.value)
</script>
<template>
  <NanoSwitch
    :value="showTrends"
    :disabled="isShowTrendsDisabled"
    @change="matrixChart.toggleShowTrends()"
    >{{ t('filterShowTrend') }}</NanoSwitch
  >
  <NanoSwitch
    :value="showSubtechniques"
    :disabled="isShowSubTechniquesDisabled"
    @change="matrixChart.toggleShowSubtechniques()"
    >{{ t('filterShowSubTechniques') }}</NanoSwitch
  >

  <TimeSpanSelector />
  <ActionsButton />
</template>
