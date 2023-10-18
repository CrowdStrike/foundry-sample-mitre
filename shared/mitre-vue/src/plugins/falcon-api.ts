import type { App } from 'vue'
import FalconApi from '@crowdstrike/foundry-js'
import SYMBOLS from '../utils/symbols'
// @ts-expect-error
import infos from '@mitre-app/manifest.yml'

/**
 * Falcon Api Data (partial)
 *
 * @export
 * @interface FalconApiData
 * @typedef {FalconApiData}
 */
export interface FalconApiData {
  /**
   * Connected CID
   *
   * @type {string}
   */
  cid: string
  /**
   * desired Date Format
   *
   * @type {string}
   */
  dateFormat: string
  /**
   * user's locale
   *
   * @type {string}
   */
  locale: string
  /**
   * current theme
   *
   * @type {('theme-dark' | 'theme-light')}
   */
  theme: 'theme-dark' | 'theme-light'
  /**
   * user's timezone
   *
   * @type {string}
   */
  timezone: string
  /**
   * Other values
   */
  [x: string]: unknown
}

/**
 * Falcon Api Vue Plugin
 *
 * @class FalconApiPlugin
 * @typedef {FalconApiPlugin}
 */
class FalconApiPlugin {
  /**
   * Falcon Api instance
   *
   * @type {(FalconApi | undefined)}
   */
  falcon: FalconApi | undefined = undefined

  /**
   * Install and initialize the plugin
   *
   * @public
   * @param {App<any>} app
   */
  public install(app: App<any>) {
    this.falcon = new FalconApi()
    app.provide<FalconApi>(SYMBOLS.FALCON_API, this.falcon)
    app.provide<() => string>(SYMBOLS.FALCON_API_GET_ORIGINS, () => {
      return this.getOrigin()
    })

    app.provide<() => string>(SYMBOLS.FALCON_API_GET_APP_ID, () => {
      return this.getAppId()
    })
  }

  /**
   * Connect the FalconApi plugin (the app/extension will be shown after a successful connection)
   *
   * @async
   * @returns {*}
   */
  async connect() {
    try {
      await this.falcon?.connect()
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Get page origin
   *
   * @returns {string}
   */
  getOrigin(): string {
    const { targetOrigin } = this.falcon?.bridge as any
    return targetOrigin || self.location.origin
  }

  /**
   * Get app id from data or manifest as fallback
   *
   * @returns {string}
   */
  getAppId(): string {
    return this.falcon?.data?.app?.id ?? infos.app_id
  }

  /**
   * Retrieve Falcon Api data, with some defaults
   *
   * @readonly
   * @type {FalconApiData}
   */
  get data(): FalconApiData {
    return {
      cid: String(this.falcon?.data?.cid ?? ''),
      dateFormat: 'MMM. D, YYYY',
      locale: 'en-us',
      theme: 'theme-dark',
      timezone: 'UTC',
      ...this.falcon?.data
    }
  }
}

/**
 * Create a FalconApiPlugin instance
 *
 * @export
 * @returns {FalconApiPlugin}
 */
export function createFalconApi(): FalconApiPlugin {
  return new FalconApiPlugin()
}
