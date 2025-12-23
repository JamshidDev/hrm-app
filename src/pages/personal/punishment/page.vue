<script setup>
import {PageHeader, PageContent} from '@components'
import { useAccountStore } from '@store'
import { formatDate } from '@util'

const store = useAccountStore()


</script>

<template>
  <PageContent class="py-[60px]">
    <PageHeader  :title="$t('punishment.name')"/>
    <div
      v-for="(item, idx) in store.punishmentList"
      :key="idx"
      class="mx-3 mt-6 bg-surface-section border border-surface-line rounded-xl overflow-hidden text-[14px]"
    >
      <div class="bg-danger/4 text-base border-b-2 border-danger px-4 py-2 flex flex-col">
        <div class="text-xs text-secondary">{{$t('punishment.fine')}}</div>
        <div>{{item?.fine}}</div>
        <div class="text-xs text-secondary mt-2">{{$t('incentive.reason')}}</div>
        <div>{{item?.reason}}</div>
        <div class="text-xs text-secondary mt-2">{{$t('incentive.organization')}}</div>
        <div>{{item?.organization}}</div>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('incentive.date')}}</span>
        <span class="font-medium">{{formatDate(item?.date)}}</span>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('incentive.number')}}</span>
        <span class="font-medium">{{item?.number}}</span>
      </div>

    </div>
  </PageContent>
</template>

