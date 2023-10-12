<script setup lang="ts">
/**
 * Sub Techniques Component
 */
import { useMatrixChartStore } from '@/stores/matrix-chart'
import { Instances24 } from '@mitre/vue-shared/icons'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import type { Technique } from '@mitre/vue-shared/types'
import { inject } from 'vue'
import DetailsSection from './DetailsSection.vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer
const store = useMatrixChartStore()

const props = defineProps<{
  subTechniques: Technique[]
}>()

function navigateToTechnique(id: string) {
  store.selectTechniqueById(id)
}
</script>
<template>
  <DetailsSection
    :iconComponent="Instances24"
    :iconProps="{ size: 24, color: 'default' }"
    :label="t('subTechniquesTitle')"
    :count="props.subTechniques.length"
  >
    <ul>
      <li
        v-for="subTechnique in props.subTechniques"
        :key="subTechnique.id"
        class="type-md-underline text-primary-idle cursor-pointer"
        @click="navigateToTechnique(subTechnique.id)"
      >
        {{ subTechnique.label }}
      </li>
    </ul>
  </DetailsSection>
</template>
