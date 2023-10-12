import { createApp, defineComponent } from 'vue'

import type { App } from 'vue'
import { Error24, Info24, Success24, Warning24 } from '../components/icons/index'
import SYMBOLS from '../utils/symbols'
import type { SlAlert } from '@shoelace-style/shoelace'

/**
 * Alert types
 *
 * @export
 * @typedef {Variant}
 */
export type Variant = 'success' | 'danger' | 'warning' | 'primary'
/**
 * Alert configuration object
 *
 * @export
 * @interface Alert
 * @typedef {Alert}
 */
export interface Alert {
  /**
   * Alert type
   *
   * @type {Variant}
   */
  variant: Variant
  /**
   * Alert message
   *
   * @type {string}
   */
  message: string
  /**
   * If blocking backdrop needs to be visible or not
   *
   * @type {?boolean}
   */
  backdrop?: boolean
  /**
   * Position alignment (default is top-left)
   *
   * @type {?(| 'top-left'
      | 'middle-left'
      | 'bottom-left'
      | 'top-center'
      | 'middle-center'
      | 'bottom-center'
      | 'top-right'
      | 'middle-right'
      | 'bottom-right')}
   */
  position?:
    | 'top-left'
    | 'middle-left'
    | 'bottom-left'
    | 'top-center'
    | 'middle-center'
    | 'bottom-center'
    | 'top-right'
    | 'middle-right'
    | 'bottom-right'
  /**
   * Margin between the alert and the border of the page
   *
   * @type {?string}
   */
  margin?: string
  /**
   * Function to call after the alert was dismissed
   *
   * @type {?() => void}
   */
  afterHide?: () => void
}

/**
 * HTML escaping utility function
 *
 * @param {string} html
 * @returns {*}
 */
function escapeHtml(html: string) {
  const div = document.createElement('div')
  div.textContent = html
  return div.innerHTML
}

/**
 * Create the icon for the Alert
 *
 * @param {Variant} variant
 * @param {(typeof Success24 | typeof Error24 | typeof Warning24 | typeof Info24)} component
 * @returns {string}
 */
function createIcon(
  variant: Variant,
  component: typeof Success24 | typeof Error24 | typeof Warning24 | typeof Info24
): string {
  const icon = defineComponent({
    extends: component
  })

  const instance = createApp(icon)
  const span = document.createElement('span')
  instance.mount(span)

  const text = span.innerHTML

  instance.unmount()

  span.remove()
  return text
}

/**
 * The Alerts Vue Plugin
 *
 * @export
 * @class AlertsPlugin
 * @typedef {AlertsPlugin}
 */
export class AlertsPlugin {
  /**
   * Install the plugin in the app, adding a reference to itself
   *
   * @public
   * @param {App<any>} app
   */
  public install(app: App<any>) {
    app.provide<AlertsPlugin>(SYMBOLS.ALERTS, this)
  }

  /**
   * Creates and display an Alert
   *
   * @public
   * @param {Alert} alertInfo
   * @param {(number | false)} [duration=10000]
   * @returns {(SlAlert | undefined)}
   */
  public notify(alertInfo: Alert, duration: number | false = 10000): SlAlert | undefined {
    const {
      variant,
      message,
      afterHide,
      backdrop,
      position,
      margin = 'var(--sl-spacing-medium)'
    } = alertInfo

    let icon = ''

    switch (variant) {
      case 'success':
        icon = createIcon('success', Success24)
        break

      case 'danger':
        icon = createIcon('danger', Error24)
        break

      case 'warning':
        icon = createIcon('warning', Warning24)
        break

      case 'primary':
        icon = createIcon('primary', Info24)
        break

      default:
        icon = createIcon('danger', Error24)
        break
    }

    duration = duration === false || duration <= 0 ? Number.POSITIVE_INFINITY : duration

    const slAlertElement = document.createElement('sl-alert')

    const alert = Object.assign(slAlertElement, {
      variant,
      closable: true,
      duration,
      innerHTML: `<span slot="icon">${icon}</span>${escapeHtml(message)}`
    })

    let backdropElement: HTMLElement | undefined = undefined

    if (backdrop) {
      backdropElement = document.createElement('div')
      backdropElement.classList.add('sl-toast-backdrop')
      document.body.append(backdropElement)
    }

    alert.addEventListener('sl-after-hide', () => {
      afterHide?.()

      if (backdropElement) {
        backdropElement.remove()
      }
    })

    document.body.append(alert)

    alert.toast()

    if (position) {
      alert.classList?.add('static')

      setTimeout(() => {
        const alertElement = alert.base

        alertElement.style.width = 'max-content'
        alertElement.style.margin = '0'
        alertElement.style.maxWidth = `calc(100% - ${margin} * 2)`
        alertElement.style.maxHeight = `calc(100% - ${margin} * 2)`

        if (position.includes('top')) {
          alertElement.style.top = margin
        } else if (position.includes('middle')) {
          alertElement.style.top = '50%'
        } else if (position.includes('bottom')) {
          alertElement.style.bottom = margin
        }

        if (position.includes('left')) {
          alertElement.style.left = margin
        } else if (position.includes('center')) {
          alertElement.style.left = '50%'
        } else if (position.includes('right')) {
          alertElement.style.right = margin
        }

        if (position.includes('center') || position.includes('middle')) {
          alertElement.style.transform = `translate(${
            position.includes('center') ? '-50%' : '0'
          }, ${position.includes('middle') ? '-50%' : '0'})`
        }
      }, 10)
    }

    return alert
  }
}

/**
 * Create a AlertsPlugin instance
 *
 * @export
 * @returns {AlertsPlugin}
 */
export function createAlertsPlugin(): AlertsPlugin {
  return new AlertsPlugin()
}
