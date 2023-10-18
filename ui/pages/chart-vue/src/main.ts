/**
 * Main app file for the page
 */
import '@mitre/vue-shared/setup-styles-and-shoelace'

import App from '@/App.vue'
import { createUrlStatePlugin } from '@/plugins/url-state'
import router from '@/router'
import FalconApi from '@crowdstrike/foundry-js'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { createAlertsPlugin } from '@mitre/vue-shared/plugins/alerts'
import { createFalconApi } from '@mitre/vue-shared/plugins/falcon-api'
import { setI18nPlugin } from '@mitre/vue-shared/plugins/i18n'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
;(async () => {
  const app = createApp(App)

  app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('sl-')

  const falconApi = createFalconApi()

  app.use(createAlertsPlugin())
  app.use(falconApi)

  app.use(createPinia())

  await falconApi.connect()
  app.use(setI18nPlugin(falconApi.data.locale, messages))
  app.use(createUrlStatePlugin())
  app.use(router(falconApi.falcon as FalconApi))

  app.mount('#app')
})()
