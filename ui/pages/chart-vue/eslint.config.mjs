import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '.stylelintrc.js'],
  },

  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.base,

  {
    rules: {
      'vue/no-deprecated-slot-attribute': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    },
  },

  {
    files: ['vite.config.*', 'vitest.config.*'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
      },
    },
  },

  skipFormatting,
)
