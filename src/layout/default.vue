<script setup>
import {ComboScreen} from "@/layout/ui/index.js"
import {WalletScreenPage, ProfileScreenPage, ServiceScreenPage} from "@/pages/index.js"
import {ref} from "vue"

const activeScreen = ref(0)

const pages = [
  ServiceScreenPage,
  WalletScreenPage,
  ProfileScreenPage
]
</script>

<template>
  <ComboScreen v-model="activeScreen">
    <component :is="pages[activeScreen]" :key="activeScreen" />
  </ComboScreen>
</template>

