import SubTechniqueCard from '@/components/MatrixChart/SubTechniqueCard.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { techniqueData } from '@mitre/vue-shared/data-samples'
import { mountWith } from '@mitre/vue-shared/test-utils'
import type { Technique } from '@mitre/vue-shared/types'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

describe('SubTechnique Card', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contains expected text', async () => {
    const subtechnique: Technique = techniqueData as unknown as Technique

    const wrapper = mountWith(
      SubTechniqueCard,
      {
        props: {
          subtechnique,
          index: 0,
          total: 100
        }
      },
      messages
    )

    expect(wrapper.text()).to.contain(subtechnique.label)
  })
})
