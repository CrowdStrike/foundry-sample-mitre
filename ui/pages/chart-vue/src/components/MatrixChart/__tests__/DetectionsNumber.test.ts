import DetectionsNumber from '@/components/MatrixChart/DetectionsNumber.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { mountWith } from '@mitre/vue-shared/test-utils'
import { describe, expect, it } from 'vitest'

describe('Detections Number', () => {
  it('normal', async () => {
    const wrapperNormal = mountWith(
      DetectionsNumber,
      {
        props: {
          detections: 1234
        }
      },
      messages
    )

    expect(wrapperNormal.text()).to.contain('1,234')
    expect(wrapperNormal.element.getElementsByTagName('svg')[0]?.getAttribute('height')).to.eq('20')
  })

  it('compact', async () => {
    const wrapperCompact = mountWith(
      DetectionsNumber,
      {
        props: {
          detections: 10000,
          smallIcon: true
        }
      },
      messages
    )

    expect(wrapperCompact.text()).to.contain('10K')
    expect(wrapperCompact.element.getElementsByTagName('svg')[0]?.getAttribute('height')).to.eq(
      '16'
    )
  })
})
