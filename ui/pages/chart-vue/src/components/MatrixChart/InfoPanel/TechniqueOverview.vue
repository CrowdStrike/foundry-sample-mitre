<script setup lang="ts">
/**
 * Technique Overview Component
 */
import { useConfigureJiraStore } from '@/stores/configure-jira'
import { useMatrixChartStore } from '@/stores/matrix-chart'
import type FalconApi from '@crowdstrike/foundry-js'
import { ExternalLink16, HostsIconVue } from '@mitre/vue-shared/icons'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import type { Technique } from '@mitre/vue-shared/types'
import { computed, inject } from 'vue'
import LabelledField from './LabelledField.vue'
import { calculateMitreTechniqueUrl } from '@mitre/vue-shared/utils'

const matrixChart = useMatrixChartStore()
const falconApi: FalconApi = inject(SYMBOLS.FALCON_API) as FalconApi
const configureJira = useConfigureJiraStore()
const { t, d } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

interface SlChangeEvent {
  detail: {
    item?: { value: string }
  }
}

interface OverviewProps {
  technique: Technique
  subTechniquesCount?: number
}

const props = defineProps<OverviewProps>()

const readFullDescription = (e: MouseEvent) => falconApi.navigation.onClick(e, '_blank')

const headerClasses = computed(() => {
  return [
    props.technique.is_subtechnique ? 'type-md-underline cursor-pointer' : 'type-lg-tight-medium',
    'leading-6'
  ]
})

const techniqueHref = computed(() => calculateMitreTechniqueUrl(props.technique))

const clickAction = (event: SlChangeEvent) => {
  if (event?.detail?.item?.value === 'configure-jira') {
    configureJira.showConfigureDialog()
  }
}
</script>
<template>
  <div
    class="flex justify-between text-titles-and-attributes px-4 py-3 bg-surface-lg border-b border-lines-light"
  >
    <div class="flex items-center">
      <div class="pr-3">
        <HostsIconVue :size="24" />
      </div>
      <div :class="headerClasses">
        <a
          v-if="props.technique.is_subtechnique && props.technique?.parent_technique_id"
          @click.stop.prevent="
            matrixChart.selectTechniqueById(props.technique?.parent_technique_id)
          "
        >
          {{ t('overviewTitle') }}</a
        >
        <span v-else> {{ t('overviewTitle') }}</span>
      </div>
      <div v-if="props.technique.is_subtechnique" class="flex items-center">
        <div class="px-1">></div>
        <div class="type-lg-tight-medium leading-6">
          {{ t('overviewSubTechnique') }}
        </div>
      </div>
    </div>
    <div>
      <sl-dropdown>
        <sl-button slot="trigger" caret>
          {{ t('actionButtonLabel') }}
        </sl-button>
        <sl-menu @sl-select="clickAction">
          <sl-menu-item value="configure-jira" :disabled="!configureJira.collectionConfigured">
            {{ t('actionConfigureRemediationOptions') }}
          </sl-menu-item>
        </sl-menu>
      </sl-dropdown>
    </div>
  </div>
  <div class="flex flex-col px-4 pt-3 pb-4 bg-surface-md border-b border-lines-light">
    <div class="flex gap-x-3 w-full pb-3">
      <LabelledField label="ID">
        {{ props.technique.technique_definition?.id }}
      </LabelledField>
      <LabelledField :label="t('overviewCreated')">
        {{
          props.technique?.technique_definition?.created
            ? d(
                new Date(props.technique?.technique_definition?.created),
                'overviewDate',
                falconApi.data?.locale as string
              )
            : ''
        }}
      </LabelledField>
      <LabelledField :label="t('overviewLastModified')">
        {{
          props.technique.technique_definition?.modified
            ? d(
                new Date(props.technique.technique_definition?.modified),
                'overviewDate',
                falconApi.data?.locale as string
              )
            : ''
        }}
      </LabelledField>
    </div>
    <LabelledField
      :label="t('overviewDetectedSubTechniques')"
      class="pb-3"
      v-if="!props.technique.is_subtechnique && props.technique.sub_techniques?.length"
    >
      {{ props.technique.sub_techniques.length }}
    </LabelledField>
    <LabelledField
      :label="t('overviewSubTechniqueOf')"
      class="pb-3"
      field-class="underline cursor-pointer"
      field-text-color="text-primary-idle"
      v-if="props.technique.is_subtechnique && props.technique.parent_technique_id"
      @click="matrixChart.selectTechniqueById(props.technique?.parent_technique_id)"
    >
      {{ props.technique.parent_technique_definition?.name }}
    </LabelledField>
    <LabelledField
      :label="t('overviewDescription')"
      class="pb-3"
      :title="technique?.technique_definition?.description"
      field-class="clamp-4 break-words"
    >
      {{ technique?.technique_definition?.description }}
    </LabelledField>
    <div class="flex w-full justify-center" v-if="props.technique.technique_definition?.id">
      <div class="flex self-center text-primary-idle type-md-underline">
        <a
          :href="techniqueHref"
          class="pr-1 self-center text-base underline type-sm-underline focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"
          @click.prevent.capture="readFullDescription"
          @auxclick.stop.prevent.capture="readFullDescription"
        >
          {{ t('overviewReadFullDescription') }}
        </a>
        <a
          :href="techniqueHref"
          class="self-center type-md-underline"
          @click.prevent.capture="readFullDescription"
          @auxclick.stop.prevent.capture="readFullDescription"
        >
          <ExternalLink16 />
        </a>
      </div>
    </div>
  </div>
</template>
