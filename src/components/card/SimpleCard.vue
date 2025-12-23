<script setup>
  defineProps({
    title: String,
    options:{
      type: Array,
      default:[],
    },
  })
</script>

<template>
<div class="bg-surface-section border border-surface-line rounded-xl">
  <div class="border-b border-surface-line px-4 py-4 font-medium text-primary">{{title}}</div>
  <div v-for="(item, idx) in options" :key="idx" class="text-[14px] flex justify-between item-center border-b border-surface-line px-4 py-3">
    <div class="text-medium">{{item.label}}</div>
    <div class="font-medium">{{item.value}}</div>
  </div>
</div>
</template>

