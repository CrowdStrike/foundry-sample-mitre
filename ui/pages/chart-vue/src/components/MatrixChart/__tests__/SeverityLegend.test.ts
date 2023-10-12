import SeverityLegend from '@/components/MatrixChart/SeverityLegend.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { mountWith } from '@mitre/vue-shared/test-utils'
import { describe, expect, it } from 'vitest'

describe('Severity Legend', () => {
  const wrapper = mountWith(SeverityLegend, {}, messages)

  it('critical', async () => {
    expect(wrapper.html()).to.contain('bg-critical')
    expect(wrapper.text()).to.contain('Critical')
  })

  it('high', async () => {
    expect(wrapper.html()).to.contain('bg-high')
    expect(wrapper.text()).to.contain('High')
  })

  it('medium', async () => {
    expect(wrapper.html()).to.contain('bg-medium')
    expect(wrapper.text()).to.contain('Medium')
  })

  it('low', async () => {
    expect(wrapper.html()).to.contain('bg-low')
    expect(wrapper.text()).to.contain('Low')
  })

  it('informational', async () => {
    expect(wrapper.html()).to.contain('bg-informational')
    expect(wrapper.text()).to.contain('Informational')
  })
})
