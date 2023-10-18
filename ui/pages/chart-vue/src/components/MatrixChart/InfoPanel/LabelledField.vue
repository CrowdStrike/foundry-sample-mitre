<script setup lang="ts">
/**
 * Labelled Field and value Component
 */
const props = defineProps<{
  label: string
  fieldClass?: string
  fieldTextColor?: string
}>()
</script>
<template>
  <div class="flex flex-col flex-grow">
    <span class="text-xs leading-5 text-body-and-labels">{{ props.label }}</span>
    <div
      :class="`text-base leading-6 ${props.fieldTextColor ?? 'text-titles-and-attributes'} ${
        fieldClass ?? ''
      }`"
    >
      <slot />
    </div>
  </div>
</template>
