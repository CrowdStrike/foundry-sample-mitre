/* eslint-disable @typescript-eslint/no-unused-vars */
import defaultMessages from '@intlify/unplugin-vue-i18n/messages'
import type { SlAlert } from '@shoelace-style/shoelace'
import { config, mount, shallowMount, type ComponentMountingOptions } from '@vue/test-utils'
import { spy } from 'sinon'
import type { Component } from 'vue'
import { ransomwareNotifyIT } from '../data-sample'
import type { Alert, AlertsPlugin } from '../plugins/alerts'
import { setI18nPlugin } from '../plugins/i18n'
import { MITRE_AUTO_REMEDIATION_COLLECTION } from './collections'
import SYMBOLS from './symbols'

/**
 * Component mounting options
 *
 * @interface TestProvConfig
 * @typedef {TestProvConfig}
 * @template T
 * @extends {ComponentMountingOptions<T>}
 */
interface TestProvConfig<T extends Component> extends ComponentMountingOptions<T> {}
/**
 * Flag to avoid registering again global mockups
 *
 * @type {boolean}
 */
let globalConfigured = false

/**
 * Configure test environment mockup services
 *
 * @param {*} [messages=defaultMessages]
 */
function configureGlobal(messages = defaultMessages) {
  if (!globalConfigured) {
    config.global.provide = {
      [SYMBOLS.I18N]: i18nProvide(messages),
      [SYMBOLS.FALCON_API]: falconApiProvide(),
      [SYMBOLS.FALCON_API_GET_APP_ID]: getAppIdProvide(),
      [SYMBOLS.ALERTS]: alertsProvide()
    }

    config.global.mocks = {
      $t: (key: string) => {
        return messages?.[key]
      }
    }

    globalConfigured = true
  }
}

/**
 * i18n provider for test
 *
 * @param {*} [messages=defaultMessages]
 * @returns {*}
 */
function i18nProvide(messages = defaultMessages) {
  const i18nPlugin = setI18nPlugin('en', messages)

  return spy(i18nPlugin.i18nConfig?.global)
}

/**
 * falconApi mockup provider
 *
 * @returns {*}
 */
function falconApiProvide() {
  return spy({
    collection: ({ collection }: { collection: string }) => {
      return {
        search: () => {
          return {}
        },
        read() {
          if (collection === MITRE_AUTO_REMEDIATION_COLLECTION) {
            return ransomwareNotifyIT
          } else {
            return undefined
          }
        }
      }
    }
  })
}

/**
 * App id provider
 *
 * @returns {string}
 */
function getAppIdProvide() {
  return 'app-id'
}

/**
 * Alerts mockup provider for tests
 *
 * @returns {AlertsPlugin}
 */
function alertsProvide(): AlertsPlugin {
  return spy({
    install: () => {},
    notify: (alertInfo: Alert, duration = 10000): SlAlert | undefined => {
      return undefined
    }
  })
}

/**
 * Mount the component and register, if not already registered, the global mockup providers
 *
 * @export
 * @template T
 * @param {T} component
 * @param {?TestProvConfig<T>} [config]
 * @param {*} [messages=defaultMessages]
 * @returns {*}
 */
export function mountWith<T extends Component>(
  component: T,
  config?: TestProvConfig<T>,
  messages = defaultMessages
) {
  configureGlobal(messages)

  return mount<T>(component, config as any)
}

/**
 * Shallow mount the component and register, if not already registered, the global mockup providers
 *
 * @export
 * @template T
 * @param {T} component
 * @param {?TestProvConfig<T>} [config]
 * @param {*} [messages=defaultMessages]
 * @returns {*}
 */
export function shallowMountWith<T extends Component>(
  component: T,
  config?: TestProvConfig<T>,
  messages = defaultMessages
) {
  configureGlobal(messages)

  return shallowMount<T>(component, config as any)
}
