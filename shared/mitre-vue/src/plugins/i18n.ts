import defaultMessages from '@intlify/unplugin-vue-i18n/messages'
import type { App } from 'vue'
import { createI18n, type Composer, type I18n, type Locale } from 'vue-i18n'
import SYMBOLS from '../utils/symbols'

/**
 * Messages definition
 *
 * @interface Messages
 * @typedef {Messages}
 * @extends {Record<string, unknown>}
 */
interface Messages extends Record<string, unknown> {}
/**
 * DateTime formats definitions
 *
 * @interface DateTimeFormats
 * @typedef {DateTimeFormats}
 * @extends {Record<string, unknown>}
 */
interface DateTimeFormats extends Record<string, unknown> {}
/**
 * Numeric formats definitions
 *
 * @interface NumberFormats
 * @typedef {NumberFormats}
 * @extends {Record<string, unknown>}
 */
interface NumberFormats extends Record<string, unknown> {}
/**
 * I18nComposer definition
 *
 * @export
 * @typedef {I18NComposer}
 */
export type I18NComposer = Composer<Messages, DateTimeFormats, NumberFormats, Locale>

/**
 * I18n Vue Plugin
 *
 * @class I18nPlugin
 * @typedef {I18nPlugin}
 */
class I18nPlugin {
  /**
   * I18n service instance
   *
   * @type {(I18n | undefined)}
   */
  i18nConfig: I18n | undefined = undefined

  /**
   * Creates an instance of I18nPlugin.
   *
   * @constructor
   * @param {string} locale
   * @param {*} [messages=defaultMessages]
   */
  constructor(locale: string, messages = defaultMessages) {
    this.i18nConfig = createI18n(this.getConfig(locale, messages))
  }

  /**
   * Get Default config including locale, messages, numeric and datetime formats
   *
   * @param {string} locale
   * @param {*} [messages=defaultMessages]
   * @returns {*}
   */
  getConfig(locale: string, messages = defaultMessages): any {
    const numberFormatsValue = {
      trend: {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      detections: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      detectionsCompact: {
        style: 'decimal',
        notation: 'compact',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }
    }

    const dateTimeFormatsValue = {
      secondRange: {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      },
      hourRange: {
        hour: '2-digit',
        minute: '2-digit'
      },
      dateRange: {
        month: 'short',
        day: 'numeric'
      },
      overviewDate: {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      },
      fullDateTime: {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: '2-digit'
      }
    }

    const out = {
      locale, // set locale
      fallbackLocale: 'en-us', // set fallback locale
      messages,
      allowComposition: true,
      legacy: false,
      numberFormats: {
        'en-US': numberFormatsValue,
        [locale]: numberFormatsValue
      },
      datetimeFormats: {
        'en-US': dateTimeFormatsValue,
        [locale]: dateTimeFormatsValue
      }
    }

    out.numberFormats[locale] = out.numberFormats[locale] ?? out.numberFormats['en-US']

    return out
  }

  /**
   * Install the plugin
   *
   * @param {App<any>} app
   */
  install(app: App<any>) {
    app.provide<I18NComposer>(SYMBOLS.I18N, this.i18nConfig?.global as I18NComposer)
  }
}

/**
 * Returns a I18nPlugin instance
 *
 * @export
 * @param {string} locale
 * @param {*} [messages=defaultMessages]
 * @returns {I18nPlugin}
 */
export function setI18nPlugin(locale: string, messages = defaultMessages): I18nPlugin {
  return new I18nPlugin(locale, messages)
}
