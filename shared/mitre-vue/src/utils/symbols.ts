/**
 * Symbols used for injecting/providing vue plugins
 *
 * @type {{ readonly I18N: any; readonly ALERTS: any; readonly FALCON_API: any; readonly FALCON_API_GET_ORIGINS: any; readonly FALCON_API_GET_APP_ID: any; readonly URL_STATE: any; }}
 */
const SYMBOLS = {
  I18N: Symbol('i18n'),
  ALERTS: Symbol('alerts'),
  FALCON_API: Symbol('falconApi'),
  FALCON_API_GET_ORIGINS: Symbol('falconApiGetOrigins'),
  FALCON_API_GET_APP_ID: Symbol('falconApiGetAppId'),
  URL_STATE: Symbol('urlState')
} as const

export default SYMBOLS
