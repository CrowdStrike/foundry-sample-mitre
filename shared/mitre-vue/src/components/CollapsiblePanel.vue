<script setup lang="ts">
/**
 * Collapsible panel component, with icon and label
 */

import { CollapseIcon, ExpandIcon } from './icons/index'
import type { DetectionIconColor, DetectionIconSize } from '../utils/types'
import { computed, ref, type Component, toRefs } from 'vue'

const emit = defineEmits(['hide', 'show', 'after-show', 'after-hide'])

const props = defineProps<{
  label: string
  iconComponent?: Component
  iconProps?: {
    color: DetectionIconColor
    size: DetectionIconSize
  }
  count?: number
  fontClass?: string
  open?: boolean
}>()

const fontClass = computed(() => props.fontClass ?? 'type-lg-tight-medium')
const { open: isOpen = ref(false) } = toRefs(props)

const show = () => {
  emit('show')
  isOpen.value = true
}

const hide = () => {
  emit('hide')
  isOpen.value = false
}
</script>

<template>
  <sl-details
    class="collapsible-panel"
    @sl-show.self="show()"
    @sl-hide.self="hide()"
    @sl-after-show.self="$emit('after-show')"
    @sl-after-hide.self="$emit('after-hide')"
    :open="isOpen"
  >
    <div slot="expand-icon">
      <CollapseIcon />
    </div>
    <div slot="collapse-icon">
      <ExpandIcon />
    </div>

    <div class="flex w-full justify-between gap-3" slot="summary">
      <div class="flex">
        <div v-if="props.iconComponent" class="self-center pr-3">
          <props.iconComponent v-bind="props.iconProps" />
        </div>
        <h3 :class="['text-titles-and-attributes', fontClass]">
          {{ props.label }}
        </h3>
      </div>
      <div v-if="count !== undefined" :class="['pr-0.5', fontClass]">
        {{ count }}
      </div>
    </div>
    <div>
      <slot></slot>
    </div>
  </sl-details>
</template>

<style scoped>
sl-details::part(base),
sl-details::part(header),
sl-details::part(summary),
sl-details::part(content) {
  border: none;
  border-radius: 0;
}

sl-details::part(header) {
  --cs-input-shadow-focus: none;
  --cs-tab-color-underline: none;
  padding: 0.75rem 1rem;
}

sl-details.collapsible-panel[open]::part(summary-icon) {
  /* Disable the expand/collapse animation */
  rotate: 180deg;
}
</style>
