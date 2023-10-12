import TechniqueCard from '@/components/MatrixChart/TechniqueCard.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { techniqueData } from '@mitre/vue-shared/data-samples'
import { mountWith } from '@mitre/vue-shared/test-utils'
import type { Technique } from '@mitre/vue-shared/types'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Technique Card', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contains expected text', async () => {
    const technique: Technique = techniqueData as unknown as Technique

    const wrapper = mountWith(
      TechniqueCard,
      {
        props: {
          technique
        }
      },
      messages
    )

    expect(wrapper.html()).to.contain('data-has-subtechniques="true"')
    expect(wrapper.text()).to.contain(technique.detections_number)
    expect(wrapper.text()).to.contain(`${Math.abs(technique.trend ?? 0) * 100}%`)
    expect(wrapper.text()).to.contain(technique.label)
  })
})
