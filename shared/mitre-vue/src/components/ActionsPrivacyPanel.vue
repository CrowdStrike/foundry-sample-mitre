<script setup lang="ts">
/**
 * Action Privacy panel, shown in both the main app's page and the extension
 */

import { Warning20 } from './icons/index'
import { inject } from 'vue'
import type { I18NComposer } from '../plugins/i18n'
import SYMBOLS from '../utils/symbols'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
</script>
<template>
  <div
    class="bg-surface-2xl shadow-2xl p-4 border-l-2 border-medium mb-3 relative top-0 z-5 mb-6 rounded-sm"
    v-once
  >
    <h3 class="type-sm text-text-and-icons flex items-center gap-1 mb-1">
      <Warning20 class="text-medium" />
      <span>{{ t('warning') }}</span>
    </h3>
    <p class="type-sm text-body-and-labels">
      {{ t('actionDataPrivacy') }}
    </p>
  </div>
</template>
