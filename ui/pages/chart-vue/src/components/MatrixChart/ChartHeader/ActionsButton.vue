<script setup lang="ts">
/**
 * Actions button for Mitre Chart Header Component
 */
import { useConfigureJiraStore } from '@/stores/configure-jira'
import type FalconApi from '@crowdstrike/foundry-js'
import { DotsMenuClosed24Component, DotsMenuOpen24Component } from '@mitre/vue-shared/icons'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { inject, ref } from 'vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const getAppId = inject<() => string>(SYMBOLS.FALCON_API_GET_APP_ID) as () => string
const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi

interface SlChangeEvent {
  detail: {
    item?: { value: string }
  }
}

const configureJira = useConfigureJiraStore()

const open = ref(false)

const clickButton = (event: SlChangeEvent) => {
  if (event?.detail?.item?.value === 'configure-jira') {
    configureJira.showConfigureDialog()
  } else if (event?.detail?.item?.value === 'app-details') {
    const path = `/foundry/app-manager/${getAppId()}`

    falconApi.navigation.navigateTo({
      path,
      target: '_blank',
      type: 'falcon'
    })
  }
}
</script>
<template>
  <div class="h-8" style="margin-top: 0.2rem">
    <sl-dropdown @sl-after-show="open = true" @sl-after-hide="open = false">
      <sl-button
        variant="neutral"
        size="small"
        slot="trigger"
        class="flex h-8 w-8 items-center justify-center"
      >
        <DotsMenuOpen24Component class="m-1" v-if="open" />
        <DotsMenuClosed24Component class="m-1" v-else />
      </sl-button>
      <sl-menu @sl-select="clickButton">
        <sl-menu-item value="app-details">{{ t('actionAppDetails') }}</sl-menu-item>
        <sl-menu-item value="configure-jira" :disabled="!configureJira.collectionConfigured">{{
          t('actionConfigureJiraAction')
        }}</sl-menu-item>
      </sl-menu>
    </sl-dropdown>
  </div>
</template>
