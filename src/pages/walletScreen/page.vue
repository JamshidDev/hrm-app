<script setup>
import {ArrowUpRight24Filled,} from "@vicons/fluent"
import { Icon } from '@vicons/utils'
</script>

<template>
  <div class=" w-full pt-[20px] px-[10px]">
    <div class="w-full border-surface-line border h-[200px] bg-surface-section rounded-xl">

    </div>
    <div class="flex justify-between items-center mt-6">
      <span class="text-base font-semibold">Last action</span>
      <span class="text-primary">All</span>
    </div>

    <div class="bg-surface-section/30 border border-surface-line/50 rounded-xl px-2 py-2">
     <div class="w-[40px] h-[40px] bg-danger/10 flex justify-center items-center rounded-xl">
        <Icon size="20" class="text-danger">
          <ArrowUpRight24Filled/>
        </Icon>
     </div>
    </div>

  </div>
</template>
