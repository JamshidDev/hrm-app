<script setup>
import {computed } from 'vue'
import { useRoute } from 'vue-router'
import { appSetting } from '@/utils/index.js'
import EmptyLayout from "./empty/EmptyLayout.vue"
import MainLayout from "./main/MainLayout.vue"
import TabLayout from "./tab/TabLayout.vue"

const route = useRoute()

const layout = computed(() => {
  switch (route?.meta?.layout) {
    case appSetting.mainLayout:
      return MainLayout
    case appSetting.tabLayout:
      return TabLayout
    default:
      return EmptyLayout
  }
})

</script>

<template>
  <component :is="layout">
   <router-view/>
  </component>
</template>

