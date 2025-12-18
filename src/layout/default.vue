<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import {appSetting} from '@/utils/index.js'
import {ComboScreen} from "@/layout/ui/index.js"
import {WalletScreenPage, ProfileScreenPage, ServiceScreenPage} from "@/pages/index.js"
import EmptyLayout from "./empty/EmptyLayout.vue"
import MainLayout from "./main/MainLayout.vue"



const route = useRoute()

const layout = computed(() => {
  switch (route?.meta?.layout) {
    case appSetting.mainLayout:
      return MainLayout
    default:
      return EmptyLayout
  }
})

const activeScreen = ref(0)

const pages = [
  ServiceScreenPage,
  WalletScreenPage,
  ProfileScreenPage
]
</script>

<template>
<!--  <ComboScreen v-model="activeScreen">-->
<!--    <component :is="pages[activeScreen]" :key="activeScreen" />-->
<!--  </ComboScreen>-->

  <component :is="layout">
    <router-view />
  </component>
</template>

