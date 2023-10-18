<script setup lang="ts">
/**
 * Collapsible Detail Section Component
 */
import { CollapseIcon, ExpandIcon } from '@mitre/vue-shared/icons'
import type { DetectionIconColor, DetectionIconSize } from '@mitre/vue-shared/types'
import type { Component } from 'vue'

const props = defineProps<{
  iconComponent: Component
  iconProps: {
    color: DetectionIconColor
    size: DetectionIconSize
  }
  label: string
  count: number
}>()
</script>

<template>
  <sl-details class="details-section-accordion">
    <div slot="expand-icon">
      <CollapseIcon />
    </div>
    <div slot="collapse-icon">
      <ExpandIcon />
    </div>
    <div
      class="flex justify-between type-lg-tight-medium text-titles-and-attributes w-full"
      slot="summary"
    >
      <div class="flex">
        <div class="pr-3 self-center">
          <props.iconComponent v-bind="props.iconProps" />
        </div>
        <span>{{ props.label }}</span>
      </div>
      <div class="pr-0.5">
        {{ count }}
      </div>
    </div>
    <slot />
  </sl-details>
</template>

<style>
sl-details.details-section-accordion[open]::part(summary-icon) {
  /* Disable the expand/collapse animation */
  rotate: 180deg;
}

.details-section-accordion::part(base) {
  border-left-width: 0;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: var(--lines-light);
  background-color: var(--surface-lg);
}

.details-section-accordion::part(header) {
  background-color: var(--surface-lg);
  padding: 16px;
  border-radius: unset;
}

.details-section-accordion::part(content) {
  background-color: var(--surface-md);
}

sl-details.details-section-accordion::part(header):focus-visible {
  box-shadow: none;
}

.details-section-accordion .details__header:focus-visible {
  box-shadow: none;
}
</style>
