<script setup lang="ts">
/**
 * Mitre Chart Header Component
 */
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type FalconApi from '@crowdstrike/foundry-js'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { type ContentOptions, type ContentType } from '@mitre/vue-shared/types'
import type { SlSelectEvent } from '@shoelace-style/shoelace'
import { computed, inject } from 'vue'
import ChartFilters from './ChartFilters.vue'

const { t, d } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const matrixChart = useMatrixChartStore()
const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi

const contentOptions: ContentOptions = {
  enterprise: t('matrixForEnterprise'),
  mobile: t('matrixForMobile'),
  detection_enterprise: t('detectionForEnterprise'),
  detection_mobile: t('detectionForMobile')
}

const contentType = computed(() => matrixChart.contentType)

// Computed
const from = computed(() => matrixChart.from)
const to = computed(() => matrixChart.to)
const selectedItem = computed(() => matrixChart.selectedTechnique)
const infoPanelOpen = computed(() => selectedItem?.value?.id !== undefined)

const formattedFrom = computed(() => {
  return matrixChart.timeRange === '1h'
    ? d(from.value, 'hourRange', falconApi.data?.locale as string)
    : d(from.value, 'dateRange', falconApi.data?.locale as string)
})

const formattedTo = computed(() => {
  return matrixChart.timeRange === '1h'
    ? d(to.value, 'hourRange', falconApi.data?.locale as string)
    : d(to.value, 'dateRange', falconApi.data?.locale as string)
})

const selectContentType = (value: SlSelectEvent) => {
  matrixChart.setContentType(value.detail.item.value as ContentType)
}
</script>
<template>
  <div
    :class="[
      'flex h-16 w-full flex-none flex-row justify-center gap-4 p-3 px-4 transition-all',
      infoPanelOpen ? 'info-panel-open' : null
    ]"
  >
    <h1
      class="type-xl text-titles-and-attributes flex flex-none flex-grow flex-row items-center gap-4"
    >
      <sl-dropdown>
        <sl-button slot="trigger" variant="primary" caret>
          <span class="inline-block">
            {{ contentOptions[contentType] }}
          </span>
        </sl-button>
        <sl-menu @sl-select="selectContentType">
          <sl-menu-item
            v-for="(option, index) of contentOptions"
            :key="index"
            :value="index"
            :disabled="index !== 'enterprise' ? true : false"
          >
            {{ option }}
          </sl-menu-item>
        </sl-menu>
      </sl-dropdown>
      <span class="type-md text-body-and-labels mr-8 inline-block capitalize"
        >{{ formattedFrom }} - {{ formattedTo }}</span
      >
    </h1>
    <span
      class="type-xl flex flex-none items-center justify-center gap-4 self-center justify-self-end"
    >
      <ChartFilters />
    </span>
  </div>
</template>
<style>
.info-panel-open {
  padding-right: 560px;
}
</style>
