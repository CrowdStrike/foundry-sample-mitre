<script setup lang="ts">
/**
 * Technique Detections Component
 */
import { ActivityIcon, ExternalLink16Icon, MitreDetectionFilledIcon } from '@mitre/vue-shared/icons'
import type { I18NComposer } from '@mitre/vue-shared/plugins/i18n'
import SYMBOLS from '@mitre/vue-shared/utils/symbols'
import { type SeverityDetail } from '@mitre/vue-shared/types'
import { inject } from 'vue'
import DetailsSection from './DetailsSection.vue'

const { t } = inject<I18NComposer>(SYMBOLS.I18N) as I18NComposer

const props = defineProps<{
  detectionUrl: string
  goToDetections: Function
  severityDetails: SeverityDetail
  detectionsNumber: number
}>()
</script>
<template>
  <DetailsSection
    :iconComponent="MitreDetectionFilledIcon"
    :iconProps="{ size: 24, color: 'default' }"
    :label="t('detectionsTitle')"
    :count="detectionsNumber"
  >
    <template v-for="(count, severity) in props.severityDetails" :key="severity">
      <template v-if="count !== 0">
        <div class="flex justify-between text-base text-titles-and-attributes w-full py-1">
          <div class="flex">
            <div class="pr-3 self-center">
              <MitreDetectionFilledIcon :size="24" :color="severity" />
            </div>
            <span class="capitalize">{{ t(`${severity}Severity`) }}</span>
          </div>
          <div class="pr-0.5">
            {{ count }}
          </div>
        </div>
      </template>
    </template>
    <div class="flex w-full justify-center pt-2">
      <span class="pr-2 self-center"><ActivityIcon /></span>
      <div class="flex self-center cursor-pointer" @click.prevent.capture="props.goToDetections">
        <a
          :href="props.detectionUrl"
          class="pr-1 self-center text-base underline type-sm-underline focus:text-primary-hover hover:text-primary-hover active:text-primary-pressed text-primary-idle"
          >{{ t('buttonSeeDetections') }}</a
        >
        <a :href="props.detectionUrl" class="self-center"><ExternalLink16Icon /></a>
      </div>
    </div>
  </DetailsSection>
</template>
