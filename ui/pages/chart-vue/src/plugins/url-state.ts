import { useConfigureJiraStore, type WizardState } from '@/stores/configure-jira'
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type FalconApi from '@crowdstrike/foundry-js'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import type { TimeRangeValue } from '@mitre/vue-shared/types'
import type { App } from 'vue'
import { inject, watch } from 'vue'

/**
 * Url State Definition
 *
 * @export
 * @typedef {UrlState}
 */
export type UrlState = Partial<{
  wizard: WizardState
  technique: string
  subtechniques: 'false' | 'true'
  trends: 'false' | 'true'
  range: TimeRangeValue
}>

/**
 * Url state plugin, to "hydrate" values from the passed query parameters
 *
 * @export
 * @class UrlStatePlugin
 * @typedef {UrlStatePlugin}
 */
export class UrlStatePlugin {
  /**
   * App reference
   *
   * @type {?App<any>}
   */
  app?: App<any> = undefined

  /**
   * Install the plugin
   *
   * @public
   * @param {App<any>} app
   */
  public install(app: App<any>) {
    app.provide<UrlStatePlugin>(SYMBOLS.URL_STATE, this)

    this.app = app

    this.listenForChanges()
  }

  /**
   * Calculate the current state
   *
   * @private
   * @returns {UrlState}
   */
  private calculateState(): UrlState {
    const out: UrlState = {}

    const configureJira = useConfigureJiraStore()
    const matrixChart = useMatrixChartStore()

    if (configureJira.configureDialogShown && configureJira.wizardState) {
      out.wizard = configureJira.wizardState
    }

    if (matrixChart.selectedTechnique?.id) {
      out.technique = matrixChart.selectedTechnique?.id
    }

    if (!matrixChart.showSubtechniques) {
      out.subtechniques = 'false'
    }

    if (!matrixChart.showTrends) {
      out.trends = 'false'
    }

    if (matrixChart.timeRange !== '1d') {
      out.range = matrixChart.timeRange
    }

    return out
  }

  /**
   * Restore state
   *
   * @public
   * @param {UrlState} state
   */
  public restoreState(state: UrlState) {
    const configureJira = useConfigureJiraStore()
    const matrixChart = useMatrixChartStore()

    if (state.wizard) {
      configureJira.showConfigureDialog(state.wizard)
    }

    if (state.subtechniques === 'false') {
      matrixChart.toggleShowSubtechniques(false)
    }

    if (state.trends === 'false') {
      matrixChart.toggleShowTrends(false)
    }

    if (state.range && state.range !== '1d') {
      matrixChart.changeTimeRange(state.range as TimeRangeValue)
    }
  }

  /**
   * Update the page url from the current state
   *
   * @private
   */
  private updateURL() {
    const state = this.calculateState()

    const falconApi: FalconApi = (inject(SYMBOLS.FALCON_API) ||
      this.app?._context.provides[SYMBOLS.FALCON_API]) as FalconApi

    if (Object.keys(state).length) {
      falconApi.navigation.navigateTo({
        path: `/?${encodeURIComponent(new URLSearchParams(state).toString())}`,
        type: 'internal'
      })
    } else {
      falconApi.navigation.navigateTo({
        path: `/`,
        type: 'internal'
      })
    }
  }

  /**
   * Listens for navigation changes, updating the current state
   *
   * @private
   */
  private listenForChanges() {
    const configureJira = useConfigureJiraStore()
    const matrixChart = useMatrixChartStore()

    watch(
      () => [
        configureJira.configureDialogShown,
        configureJira.wizardState,
        matrixChart.selectedTechnique?.id,
        matrixChart.showSubtechniques,
        matrixChart.showTrends,
        matrixChart.timeRange
      ],
      () => {
        this.updateURL()
      }
    )
  }
}

/**
 * Returns an instance of UrlStatePlugin
 *
 * @export
 * @returns {UrlStatePlugin}
 */
export function createUrlStatePlugin(): UrlStatePlugin {
  return new UrlStatePlugin()
}
