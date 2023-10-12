<script setup lang="ts">
import { type DetectionIconSize } from '../../utils/types'
const props = defineProps<{
  size: DetectionIconSize
}>()
</script>
<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M21 3H3C2.448 3 2 3.448 2 4V13H22V4C22 3.448 21.552 3 21 3ZM15.268 18H8.732L7.433 20.25C7.24 20.583 7.481 21 7.866 21H16.134C16.519 21 16.759 20.583 16.567 20.25L15.268 18ZM2 16C2 16.552 2.448 17 3 17H21C21.552 17 22 16.552 22 16V14H2V16Z"
    />
  </svg>
</template>
