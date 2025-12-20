<script setup>
import {ChevronLeft20Filled} from "@vicons/fluent"
import {Icon} from '@vicons/utils'
import {useRouter} from 'vue-router'

const router = useRouter()

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
<div class="w-full h-[50px] flex items-center justify-center border-b border-surface-line relative">
  <Icon @click="router.go(-1)" size="32" class="absolute top-1/2 -translate-y-1/2 left-[10px] font-bold text-medium">
    <ChevronLeft20Filled/>
  </Icon>
    {{title}}
</div>
</template>
