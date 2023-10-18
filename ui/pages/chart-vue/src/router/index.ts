import FalconApi from '@crowdstrike/foundry-js'
import MitreChartView from '@/views/MitreChartView.vue'
import { createFalconApiHistory } from '@/router/falcon-router'
import { createRouter } from 'vue-router'

/**
 * Main App Router (including "virtual" routes for the Jira configuration wizard)
 *
 * @export
 * @param {FalconApi} falconApi
 * @returns {*}
 */
export default function router(falconApi: FalconApi) {
  return createRouter({
    history: createFalconApiHistory(falconApi),
    routes: [
      {
        path: '/:subPath?',
        name: 'home',
        component: MitreChartView,
        props: (route) => {
          const out = { ...route.query }

          switch (route.params.subPath) {
            case 'wizard':
              out.wizard = 'RansomwareRemediation:Step1'
              break
            case 'notify-it':
              out.wizard = 'RansomwareRemediation:NotifyIT'
              break
            case 'notify-ir':
              out.wizard = 'RansomwareRemediation:NotifyIR'
              break
            default:
              break
          }

          return out
        }
      }
    ]
  })
}
