<script setup lang="ts">
/**
 * Tactic Column Component
 * Will display an header and a list of Techniques
 */
import TechniqueCard from './TechniqueCard.vue'
import type { Tactic } from '@mitre/vue-shared/types'
import TacticHeader from './TacticHeader.vue'

interface Props {
  tactic: Tactic
}

const props = defineProps<Props>()
</script>
<template>
  <div class="tactic min-w-40 flex w-40 flex-none flex-col">
    <TacticHeader :tactic="props.tactic" />
    <div class="mt-3 flex flex-col">
      <TechniqueCard
        v-for="technique in props.tactic.techniques"
        :key="technique.id"
        :technique="technique"
      ></TechniqueCard>
    </div>
  </div>
</template>
<style scoped></style>
