<script setup lang="ts">
// PLEASE NOTE:
// NavigationBar will remain unused until new routes are added

import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject } from 'vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
</script>
<template>
  <div class="border-lines-dark sticky top-0 w-full border-b">
    <nav
      class="theme-mezzanine bg-mezzanine text-titles-and-attributes grid h-14 grid-cols-2 items-center justify-between gap-4 p-2 px-3 pb-0"
    >
      <div
        class="type-lg-tight-medium text-body-and-labels flex flex-none justify-start gap-4 font-normal"
      >
        <router-link class="h-12 px-4 pt-2" to="/">{{
          t('mitreAutoRemediationRoute')
        }}</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: var(--titles-and-attributes);
  position: relative;
}

.router-link-exact-active::after {
  display: block;
  content: '';
  height: 0.25rem;
  border-radius: 0.125rem 0.125rem 0 0;
  background-color: var(--focus);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
