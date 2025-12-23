<script setup>
import {PageHeader, SimpleCard, PageContent} from '@components'
import { useAccountStore } from '@store'
import { formatDate } from '@util'
import i18n from '@/i18n'

const t = i18n.global.t
const store = useAccountStore()

const options = computed(()=>{
  return [
    {
      label:t('personal.last_name'),
      value:store.personalInfo?.last_name,
    },
    {
      label:t('personal.first_name'),
      value:store.personalInfo?.first_name,
    },
    {
      label:t('personal.middle_name'),
      value:store.personalInfo?.middle_name,
    },
    {
      label:t('personal.birthday'),
      value:formatDate(store.personalInfo?.birthday),
    },
    {
      label:t('personal.pin'),
      value:store.personalInfo?.pin,
    },
    {
      label:t('personal.nationality'),
      value:store.personalInfo?.nationality,
    },
    {
      label:t('personal.marital_status'),
      value:store.personalInfo?.marital_status,
    },
    {
      label:t('personal.phone'),
      value:store.personalInfo?.phones?.[0],
    },
    {
      label:t('personal.language'),
      value:store.personalInfo?.languages?.[0],
    },
  ]
})
const optionsTwo = computed(()=>{
  return [
    {
      label:t('personal.birthday_country'),
      value:store.personalInfo?.birthday_country,
    },
    {
      label:t('personal.birthday_region'),
      value:store.personalInfo?.birthday_region,
    },
    {
      label:t('personal.birthday_city'),
      value:store.personalInfo?.birthday_city,
    },
  ]
})
const optionsThree = computed(()=>{
  return [
    {
      label:t('personal.birthday_region'),
      value:store.personalInfo?.current_region,
    },
    {
      label:t('personal.birthday_city'),
      value:store.personalInfo?.current_city,
    },
    {
      label:t('personal.current_address'),
      value:store.personalInfo?.current_address,
    },
  ]
})

</script>

<template>
  <PageContent class="py-[60px]">
    <PageHeader  :title="$t('personal.name')"/>
    <div class="px-3 pt-6">
      <SimpleCard :title="t('personal.mainInfo')" :options="options"/>
      <SimpleCard class="mt-6" :title="t('personal.birthPlace')" :options="optionsTwo"/>
      <SimpleCard class="mt-6" :title="t('personal.currentPlace')" :options="optionsThree"/>
    </div>
  </PageContent>
</template>

