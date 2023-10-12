<script setup lang="ts">
/**
 * App view for the Mitre chart
 */

import ConfigureJiraDialog from '@/components/ConfigureJira/ConfigureJiraDialog.vue'
import MatrixChart from '@/components/MatrixChart/MatrixChart.vue'
import type { UrlState, UrlStatePlugin } from '@/plugins/url-state'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject, onBeforeMount, onMounted, ref } from 'vue'

const props = defineProps<UrlState>()

const timeRange = ref()
const calculateTimeRange = () => {
  const sevenDays = 7 * 24 * 60 * 60 * 60 * 1000

  timeRange.value = {
    from: new Date(new Date().getTime() - sevenDays),
    to: new Date()
  }
}

onMounted(() => {
  const recalculateTimeRange = setInterval(calculateTimeRange, 1000 * 60)

  onBeforeMount(() => {
    clearInterval(recalculateTimeRange)
  })

  const urlState: UrlStatePlugin = inject(SYMBOLS.URL_STATE) as UrlStatePlugin

  urlState.restoreState(props)
})

calculateTimeRange()
</script>

<template>
  <div class="text-body-and-labels relative">
    <div class="flex flex-col">
      <MatrixChart />
      <ConfigureJiraDialog />
    </div>
  </div>
</template>
