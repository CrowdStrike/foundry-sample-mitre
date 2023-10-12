<script setup lang="ts">
/**
 * Available remediations component
 */
import { useExtensionDataStore } from '@/stores/extension'
import { computed, onMounted } from 'vue'
import RansomwareRemediation from './Remediations/RansomwareRemediation.vue'

const extensionStore = useExtensionDataStore()

const hasRansomwareRemediation = computed(() => extensionStore.hasRansomwareRemediation)

onMounted(() => {
  extensionStore.loadData()
})
</script>
<template>
  <div class="bg-surface-lg flex h-full w-full flex-col">
    <div v-if="extensionStore.isLoading" class="h-full w-full flex-grow p-6 text-center">
      <sl-spinner style="font-size: 3rem"></sl-spinner>
    </div>
    <RansomwareRemediation v-if="hasRansomwareRemediation && !extensionStore.isLoading" />
  </div>
</template>
