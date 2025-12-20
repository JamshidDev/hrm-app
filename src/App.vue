<script setup>
import { ConfigProvider } from 'vant'
import LayoutApp from "@/layout/default.vue"
import GlobalNotify from '@/components/notify/GlobalNotify.vue'

</script>

<template>
  <ConfigProvider>
    <LayoutApp/>
    <GlobalNotify/>
  </ConfigProvider>
</template>

