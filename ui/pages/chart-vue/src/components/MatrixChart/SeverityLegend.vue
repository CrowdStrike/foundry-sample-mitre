<script setup lang="ts">
/**
 * Severity Legend Component
 */
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject } from 'vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
</script>
<template>
  <div class="type-titles-and-attributes type-xs-tight flex flex-row gap-2">
    <div class="flex items-center justify-center gap-1">
      <span class="bg-critical inline-block h-3 w-3 rounded"></span
      ><span>{{ t('criticalSeverity') }}</span>
    </div>

    <div class="flex items-center justify-center gap-1">
      <span class="bg-high inline-block h-3 w-3 rounded"></span><span>{{ t('highSeverity') }}</span>
    </div>

    <div class="flex items-center justify-center gap-1">
      <span class="bg-medium inline-block h-3 w-3 rounded"></span
      ><span>{{ t('mediumSeverity') }}</span>
    </div>

    <div class="flex items-center justify-center gap-1">
      <span class="bg-low inline-block h-3 w-3 rounded"></span><span>{{ t('lowSeverity') }}</span>
    </div>

    <div class="flex items-center justify-center gap-1">
      <span class="bg-informational inline-block h-3 w-3 rounded"></span
      ><span>{{ t('informationalSeverity') }}</span>
    </div>
  </div>
</template>
