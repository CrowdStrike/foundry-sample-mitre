/* eslint-disable @typescript-eslint/no-unused-vars */
import FalconApi from '@crowdstrike/foundry-js'

/**
 * Trailing slash regex
 *
 * @type {{}}
 */
const TRAILING_SLASH_RE = /\/$/
/**
 * Remove trailing slash, if present
 *
 * @param {string} path
 * @returns {*}
 */
export const removeTrailingSlash = (path: string) => path.replace(TRAILING_SLASH_RE, '')

/**
 * Current history location
 *
 * @export
 * @typedef {HistoryLocation}
 */
export type HistoryLocation = string
/**
 * Allowed variables in HTML5 history state. Note that pushState clones the state
 * passed and does not accept everything: e.g.: it doesn't accept symbols, nor
 * functions as values. It also ignores Symbols as keys.
 *
 * @internal
 */
export type HistoryStateValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | HistoryState
  | HistoryStateArray

/**
 * Allowed HTML history.state
 */
export interface HistoryState {
  /**
   * Description placeholder
   */
  [x: number]: HistoryStateValue
  /**
   * Description placeholder
   */
  [x: string]: HistoryStateValue
}

/**
 * Allowed arrays for history.state.
 *
 * @internal
 */
export interface HistoryStateArray extends Array<HistoryStateValue> {}

/**
 * Navigation types
 *
 * @export
 * @enum {number}
 */
export enum NavigationType {
  pop = 'pop',
  push = 'push'
}

/**
 * Navigation direction
 *
 * @export
 * @enum {number}
 */
export enum NavigationDirection {
  back = 'back',
  forward = 'forward',
  unknown = ''
}

/**
 * Navigation infos
 *
 * @export
 * @interface NavigationInformation
 * @typedef {NavigationInformation}
 */
export interface NavigationInformation {
  /**
   * Navigation type
   *
   * @type {NavigationType}
   */
  type: NavigationType
  /**
   * Navigation direction
   *
   * @type {NavigationDirection}
   */
  direction: NavigationDirection
  /**
   * Steps between current location and the target one
   *
   * @type {number}
   */
  delta: number
}

/**
 * Navigation callback
 *
 * @export
 * @interface NavigationCallback
 * @typedef {NavigationCallback}
 */
export interface NavigationCallback {
  /**
   * Navigation callback function
   *
   * @param {HistoryLocation} to
   * @param {HistoryLocation} from
   * @param {NavigationInformation} information
   */
  (to: HistoryLocation, from: HistoryLocation, information: NavigationInformation): void
}
/**
 * Starting location for Histories
 */
export const START: HistoryLocation = ''

/**
 * Generic value container
 *
 * @export
 * @typedef {ValueContainer}
 * @template T
 */
export type ValueContainer<T> = { value: T }

/**
 * Interface implemented by History implementations that can be passed to the
 * router as {@link Router.history}
 *
 * @alpha
 */
export interface RouterHistory {
  /**
   * Base path that is prepended to every url. This allows hosting an SPA at a
   * sub-folder of a domain like `example.com/sub-folder` by having a `base` of
   * `/sub-folder`
   */
  readonly base: string
  /**
   * Current History location
   */
  location: HistoryLocation
  /**
   * Current History state
   */
  state: HistoryState
  // readonly location: ValueContainer<HistoryLocationNormalized>

  /**
   * Navigates to a location. In the case of an HTML5 History implementation,
   * this will call `history.pushState` to effectively change the URL.
   *
   * @param to - location to push
   * @param data - optional {@link HistoryState} to be associated with the
   * navigation entry
   */
  push(to: HistoryLocation, data?: HistoryState): void
  /**
   * Same as {@link RouterHistory.push} but performs a `history.replaceState`
   * instead of `history.pushState`
   *
   * @param to - location to set
   * @param data - optional {@link HistoryState} to be associated with the
   * navigation entry
   */
  replace(to: HistoryLocation, data?: HistoryState): void

  /**
   * Attach a listener to the History implementation that is triggered when the
   * navigation is triggered from outside (like the Browser back and forward
   * buttons) or when passing `true` to {@link RouterHistory.back} and
   * {@link RouterHistory.forward}
   *
   * @param callback - listener to attach
   * @returns a callback to remove the listener
   */
  listen(callback: NavigationCallback): () => void

  /**
   * Generates the corresponding href to be used in an anchor tag.
   *
   * @param location - history location that should create an href
   */
  createHref(location: HistoryLocation): string

  /**
   * Clears any event listener attached by the history implementation.
   */
  destroy(): void
  /**
   * Traverses history in a given direction.
   *
   * @example
   * ```js
   * myHistory.go(-1) // equivalent to window.history.back()
   * myHistory.go(1) // equivalent to window.history.forward()
   * ```
   *
   * @param delta - distance to travel. If delta is \< 0, it will go back,
   * if it's \> 0, it will go forward by that amount of entries.
   * @param triggerListeners - whether this should trigger listeners attached to
   * the history
   */
  go(delta: number, triggerListeners?: boolean): void
}

// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/
/**
 * Create href for the passed location
 *
 * @export
 * @param {string} base
 * @param {HistoryLocation} location
 * @returns {string}
 */
export function createHref(base: string, location: HistoryLocation): string {
  return base.replace(BEFORE_HASH_RE, '#') + location
}

/**
 * Clear the hash, returning the serialized values
 *
 * @param {string} [location='']
 * @returns {string}
 */
function clearHash(location = ''): string {
  if (location) {
    return location.replace(/^#/, '')
  }

  return location
}

/**
 * Create an History service that maps back and forth the page with FalconApi
 *
 * @export
 * @param {FalconApi} falconApi
 * @returns {RouterHistory}
 */
export function createFalconApiHistory(falconApi: FalconApi): RouterHistory {
  let listeners: NavigationCallback[] = []

  let skippedFirst = false

  function triggerListeners(to: HistoryLocation, from: HistoryLocation): void {
    for (const callback of listeners) {
      callback(to, from, {
        delta: 0,
        direction: NavigationDirection.unknown,
        type: NavigationType.pop
      })
    }
  }

  const handleHashChange = (evt: Partial<HashChangeEvent> & { newURL: string }) => {
    const previousLocation = clearHash(routerHistory.location)
    const newLocation = clearHash(new URL(evt.newURL).hash)

    routerHistory.location = newLocation

    if (newLocation !== previousLocation) {
      triggerListeners(newLocation, previousLocation)
    }
  }

  const routerHistory: RouterHistory = {
    // rewritten by Object.defineProperty
    location: '',
    // TODO: should be kept in queue
    state: {},
    base: '',
    createHref: createHref.bind(null, ''),

    replace(_to) {
      if (!skippedFirst) {
        skippedFirst = true
        return
      }
    },

    push(_to) {
      if (!skippedFirst) {
        skippedFirst = true
        return
      }
    },

    listen(callback) {
      listeners.push(callback)
      return () => {
        const index = listeners.indexOf(callback)
        if (index > -1) listeners.splice(index, 1)
      }
    },

    destroy() {
      listeners = []
      self.removeEventListener('hashchange', handleHashChange)
    },

    go(_delta) {
      // Not implemented
    }
  }

  self.addEventListener('hashchange', handleHashChange)

  handleHashChange({ newURL: window.location.toString() })

  return routerHistory
}
