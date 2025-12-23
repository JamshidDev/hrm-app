<script setup>
import PageHeader from '@/components/header/PageHeader.vue'
import {Clock28Filled, History24Filled } from "@vicons/fluent"
import {Icon} from '@vicons/utils'
import {useAccountStore} from '@store'
import {formatDate} from '@util'


const store = useAccountStore()
</script>

<template>
<div class="page-bg w-full min-h-screen relative">
  <PageHeader :title="$t('career.name')"/>

  <div class="mx-2 mt-6 bg-surface-section border border-surface-line rounded-xl px-2 pt-3">
    <h2 class="text-base font-medium flex items-center gap-2"><Icon size="18"><History24Filled/></Icon> {{$t('career.oldCareerTitle')}}</h2>
    <van-steps direction="vertical" class="!bg-transparent" :active="20">
      <template v-for="item in store.oldCareerList">
        <van-step>
          <template #inactive-icon>
            <van-icon class="text-primary z-[999]" size="20" name="checked" />
          </template>
          <div class="w-full flex flex-col p-4 bg-surface-ground rounded-lg border border-surface-line">
            <span class="bg-primary/10 text-primary mr-auto px-2 py-1 text-xs rounded-md">{{formatDate(item?.from_date)}} -  {{formatDate(item?.to_date)}}</span>
            <span class="mt-2 text-medium">{{item?.post_name}}</span>
            <span class="mt-2 text-medium lowercase flex gap-1 items-center">
            <Icon>
              <Clock28Filled/>
            </Icon>
            <span v-if="item?.experience?.year">  {{item?.experience?.year}} {{$t('common.year')}}</span>
            <span v-if="item?.experience?.month">  {{item?.experience?.month}} {{$t('common.month')}}</span>
          </span>
          </div>
        </van-step>

      </template>
    </van-steps>
  </div>

</div>
</template>


