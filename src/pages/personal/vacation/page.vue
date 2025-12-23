<script setup>
import {PageHeader, SimpleCard, PageContent} from '@components'
import { useAccountStore } from '@store'
import { formatDate } from '@util'
import i18n from '@/i18n'

const t = i18n.global.t
const store = useAccountStore()


</script>

<template>
  <PageContent class="py-[60px]">
    <PageHeader  :title="$t('vacation.name')"/>
    <div
      v-for="(item, idx) in store.vacationList"
      :key="idx"
      class="mx-3 mt-6 bg-surface-section border border-surface-line rounded-xl overflow-hidden text-[14px]"
    >
      <div class="bg-warning/4 text-base border-b-2 border-warning px-4 py-2 flex flex-col">
        <div class="text-xs text-secondary">{{$t('vacation.type')}}</div>
        <div>{{item?.type}}</div>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('common.from')}}</span>
        <span class="font-medium">{{formatDate(item?.from)}}</span>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('common.to')}}</span>
        <span class="font-medium">{{formatDate(item?.to)}}</span>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('vacation.work_day')}}</span>
        <span class="font-medium">{{item?.work_day}}</span>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('vacation.rest_day')}}</span>
        <span class="font-medium">{{item?.rest_day}} <span class="lowercase">{{$t('common.day')}}</span></span>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('vacation.all_day')}}</span>
        <span class="font-medium">{{item?.all_day}} <span class="lowercase">{{$t('common.day')}}</span></span>
      </div>

    </div>
  </PageContent>
</template>

