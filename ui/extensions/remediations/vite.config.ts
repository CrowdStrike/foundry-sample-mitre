import { URL, fileURLToPath } from 'node:url'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { createLogger, defineConfig } from 'vite'

const logger = createLogger()
const loggerWarn = logger.warn

logger.warn = (msg, options) => {
  if (msg.includes('Expected ":"') && msg.includes('--space-')) return // there are some funky looking vars in the css theme
  loggerWarn(msg, options)
}

const noAttr = () => {
  return {
    name: 'no-attribute',
    transformIndexHtml(html: string) {
      return html.replace(`type="module" crossorigin`, '').replace(`crossorigin type="module"`, '')
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    ViteYaml(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('sl-')
        }
      }
    }),
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(__dirname, './src/locales/**')
    }),
    noAttr()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@mitre-app/manifest.yml': fileURLToPath(new URL('../../../manifest.yml', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
    }
  },
  customLogger: logger,
  build: {
    target: 'es2021',
    emptyOutDir: true
  }
})
