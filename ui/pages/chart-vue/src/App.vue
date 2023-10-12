<script setup lang="ts">
/**
 * App main component
 */
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <div class="main-background">
    <div class="gradient-1"></div>
    <div class="gradient-2"></div>
  </div>
  <div class="main-content w-full">
    <NavigationBar />
    <div>
      <RouterView />
      <RouterView name="helper" />
    </div>
  </div>
</template>
