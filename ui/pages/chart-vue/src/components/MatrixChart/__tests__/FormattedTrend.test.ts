import FormattedTrend from '@/components/MatrixChart/FormattedTrend.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { mountWith } from '@mitre/vue-shared/test-utils'
import { describe, expect, it } from 'vitest'

describe('Formatted Trend', () => {
  it('positive trend', async () => {
    const wrapperPositive = mountWith(
      FormattedTrend,
      {
        props: {
          trend: 0.5
        }
      },
      messages
    )

    expect(wrapperPositive.text()).to.contain('↑50%')
  })

  it('negative trend', async () => {
    const wrapperNegative = mountWith(
      FormattedTrend,
      {
        props: {
          trend: -0.5
        }
      },
      messages
    )

    expect(wrapperNegative.text()).to.contain('↓50%')
  })
})
