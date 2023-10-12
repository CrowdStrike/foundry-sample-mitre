import TacticHeader from '@/components/MatrixChart/TacticHeader.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { tacticData } from '@mitre/vue-shared/data-samples'
import { mountWith } from '@mitre/vue-shared/test-utils'
import type { Tactic } from '@mitre/vue-shared/types'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Tactic Header', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contains expected text', async () => {
    const tactic: Tactic = tacticData as unknown as Tactic

    const wrapper = mountWith(
      TacticHeader,
      {
        props: {
          tactic
        }
      },
      messages
    )

    expect(wrapper.text()).to.contain(tactic.detections_number)
    expect(wrapper.text()).to.contain(`${Math.abs(tactic.trend ?? 0) * 100}%`)
    expect(wrapper.text()).to.contain(tactic.label)
  })
})
