<script setup>
import {useAccountStore} from '@store'
import { appPaths } from '@util'
import {
  ChevronRight12Regular,
  Person28Filled,
  WeatherSunnyLow20Regular,
  BriefcaseMedical16Regular,
} from '@vicons/fluent'
import { Icon } from '@vicons/utils'


const store = useAccountStore()
const router = useRouter()


const configItem = {
  personal_information:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
    path:appPaths.personal,
  },
  careers:{
    icon:markRaw(Person28Filled),
    class:'from-[#ffba00] to-[#ffba00] shadow-warning',
    path:appPaths.career,
  },
  passport_information:{
    icon:markRaw(Person28Filled),
    class:'from-[#FF3E4E] to-[#FF3E4E] shadow-danger',
    path:null,
  },
  educations:{
    icon:markRaw(Person28Filled),
    class:'from-[#25d366] to-[#25d366] shadow-success',
    path:null,
  },
  relatives:{
    icon:markRaw(Person28Filled),
    class:'from-[#FF8B01] to-[#FF8B01] shadow-brown',
    path:null,
  },
  meds:{
    icon:markRaw(BriefcaseMedical16Regular),
    class:'from-[#25d366] to-[#25d366] shadow-success',
    path:appPaths.med,
  },
  vacations:{
    icon:markRaw(WeatherSunnyLow20Regular),
    class:'from-[#ffba00] to-[#ffba00] shadow-warning',
    path:appPaths.vacation,
  },
  incentives:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
    path:appPaths.incentive,
  },
  disciplinary_actions:{
    icon:markRaw(Person28Filled),
    class:'from-[#FF3E4E] to-[#FF3E4E] shadow-danger',
    path:appPaths.punishment,
  },
  exams:{
    icon:markRaw(Person28Filled),
    class:'from-[#6555C0] to-[#6555C0] shadow-indigo',
    path:null,
  },
  turnstile:{
    icon:markRaw(Person28Filled),
    class:'from-[#FF8B01] to-[#FF8B01] shadow-brown',
    path:null,
  },
  salary:{
    icon:markRaw(Person28Filled),
    class:'from-[#25d366] to-[#25d366] shadow-success',
    path:null,
  },
}

const goPush = async (path)=>{
  if(!path || store.personalInfoLoading) return
  store.activePath = path
  await store.fetchPersonalInfo()
  await router.push(path)
}


onMounted(()=>{
  if(store.personalList) return
  store.fetchPersonalList()
})
</script>

<template>
  <div class="bg-surface-section rounded-xl border border-surface-line">
    <template v-if="!store.personalLoading">
      <div
        v-for="(item , key) in store.personalList"
        :key="item"
        v-ripple
        @click="goPush(configItem[key].path)"
        class="flex items-center pl-4 py-3 border-b last:border-b-0  border-surface-line">
        <div :class="[configItem[key].class]" class="w-[36px] h-[36px] bg-gradient-to-r rounded-2xl flex justify-center items-center z-10">
          <Icon size="20"  class="text-white">
            <component :is="configItem[key].icon" />
          </Icon>
        </div>
        <div class="w-[calc(100%-82px)] pl-4 text-base font-medium select-none">
          {{item }}
        </div>
        <div class="w-[22px]">
          <van-loading v-if="store.personalInfoLoading && configItem[key].path === store.activePath" size="20" type="spinner" />
        </div>

        <Icon size="18"  class="text-medium flex-shrink-0">
          <ChevronRight12Regular/>
        </Icon>
      </div>
    </template>

    <template v-else>
      <div v-for="item in 12" :key="item"  v-ripple class="flex items-center pl-4 py-3 border-b last:border-b-0  border-surface-line">
        <div  class="w-[36px] h-[36px] bg-gradient-to-r rounded-2xl flex justify-center items-center z-10">
          <van-skeleton-avatar/>
        </div>
        <div class="w-[calc(100%-40px)] pl-4 text-base font-medium select-none">
          <van-skeleton-title class="!w-full"/>
        </div>
      </div>
    </template>
  </div>
</template>
