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
    <PageHeader  :title="$t('med.name')"/>
    <div
      v-for="(item, idx) in store.medList"
      :key="idx"
      class="mx-3 mt-6 bg-surface-section border border-surface-line rounded-xl overflow-hidden text-[14px]"
    >
      <div class="bg-success/4 text-success border-b-2 border-success px-4 py-2 flex justify-between">
        <div>{{$t('med.status')}}</div>
        <div>{{item?.status}}</div>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('med.from')}}</span>
        <span class="font-medium">{{formatDate(item?.from)}}</span>
      </div>
      <div class="flex justify-between px-4 py-2">
        <span class="text-medium">{{$t('med.to')}}</span>
        <span class="font-medium">{{formatDate(item?.to)}}</span>
      </div>

    </div>
  </PageContent>
</template>

