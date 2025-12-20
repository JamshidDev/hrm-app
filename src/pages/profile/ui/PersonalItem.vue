<script setup>
import { ref, onMounted, markRaw } from 'vue'
import {
  Alert28Filled,
  BriefcaseMedical20Filled,
  ChatHelp24Filled,
  ChevronRight12Regular,
  Person28Filled,
  WeatherSunnyLow20Regular,
  BriefcaseMedical16Regular,
} from '@vicons/fluent'
import { Icon } from '@vicons/utils'

const loading = ref(false)
const options = ref(null)

const getPersonalItems = ()=>{
  loading.value = true
  $ApiService.authService.personalList().then((res) => {
    options.value = res.data.data
  }).finally(()=>{
    loading.value = false
  })

}
const box = {
  personal_information:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
  },
  careers:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
  },
  passport_information:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
  },
  educations:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
  },
  relatives:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
  },
  meds:{
    icon:markRaw(BriefcaseMedical16Regular),
    class:'from-[#25d366] to-[#25d366] shadow-success',
  },
  vacations:{
    icon:markRaw(WeatherSunnyLow20Regular),
    class:'from-[#ffba00] to-[#ffba00] shadow-warning',
  },
  incentives:{
    icon:markRaw(Person28Filled),
    class:'from-primary to-primary/90 shadow-primary',
  },
  disciplinary_actions:{
    icon:markRaw(Person28Filled),
    class:'from-[#FF3E4E] to-[#FF3E4E] shadow-danger',
  },
  exams:{
    icon:markRaw(Person28Filled),
    class:'from-[#6555C0] to-[#6555C0] shadow-indigo',
  },
  turnstile:{
    icon:markRaw(Person28Filled),
    class:'from-[#FF8B01] to-[#FF8B01] shadow-brown',
  },
  salary:{
    icon:markRaw(Person28Filled),
    class:'from-[#25d366] to-[#25d366] shadow-success',
  },
}

const options2 = [
  {
    key:'support',
    name:'Mehnat faoliyati',
    bg:'from-primary to-primary/90 shadow-primary',
    icon:ChatHelp24Filled,
  },
  {
    key:'channel',
    name:'Qarindoshlari',
    bg:'from-[#FF3E4E] to-[#FF3E4E] shadow-danger',
    icon:Alert28Filled,
  },
  {
    key:'friends',
    name:"Tibbiy ko'rik",
    bg:'from-[#25d366] to-[#25d366] shadow-success',
    icon:BriefcaseMedical20Filled,
  },
  {
    key:'about_us',
    name:"Tibbiy ma'lumotlari",
    bg:'from-[#ffba00] to-[#ffba00] shadow-warning',
    icon:Person28Filled,
  },


]

onMounted(()=>{
  getPersonalItems()
})
</script>

<template>
  <div class="bg-surface-section rounded-xl border border-surface-line">
    <template v-if="!loading">
      <div v-for="(item , key) in options" :key="item"  v-ripple class="flex items-center pl-4 py-3 border-b last:border-b-0  border-surface-line">
        <div :class="[box[key].class]" class="w-[36px] h-[36px] bg-gradient-to-r rounded-2xl flex justify-center items-center z-10">
          <Icon size="20"  class="text-white">
            <component :is="box[key].icon" />
          </Icon>
        </div>
        <div class="w-[calc(100%-60px)] pl-4 text-base font-medium select-none">
          {{item }}
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
