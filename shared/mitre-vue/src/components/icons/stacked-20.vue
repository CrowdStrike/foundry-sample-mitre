<script setup lang="ts">
import getIconColorClass from '../../utils/get-icon-color-class'
import { type DetectionIconColor, type DetectionIconSize } from '../../utils/types'
import { computed } from 'vue'

const props = defineProps<{
  size: DetectionIconSize
  color: DetectionIconColor
}>()

const iconColorClass = computed(() => getIconColorClass(props.color))
</script>
<template>
  <svg :class="iconColorClass" :width="size" :height="size" viewBox="0 0 20 20" fill="currentColor">
    <path
      d="m12.5 1.591-1.5.866 5.75 3.32c.155.089.25.254.25.433v6.639l1.5-.866c.309-.179.5-.509.5-.866V5.343c0-.357-.191-.687-.5-.866l-5-2.887a1 1 0 0 0-1 .001ZM8 4.189l5.75 3.32c.155.089.25.254.25.433v6.639l1.5-.866c.309-.179.5-.509.5-.866V7.076c0-.357-.191-.687-.5-.866l-5-2.887a.998.998 0 0 0-1 0L8 4.189ZM1 8.808v5.773c0 .357.191.687.5.866l5 2.887a.998.998 0 0 0 1 0l5-2.887c.309-.179.5-.509.5-.866V8.808c0-.357-.191-.687-.5-.866l-5-2.887a.998.998 0 0 0-1 0l-5 2.887a1 1 0 0 0-.5.866Z"
    />
  </svg>
</template>
