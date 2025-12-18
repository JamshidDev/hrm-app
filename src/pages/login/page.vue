<script setup>
import { appPaths, appSetting, secureStorage } from '@/utils/index.js'
import {Icon} from '@vicons/utils'
import { showNotify, showLoadingToast, closeToast } from 'vant';
import {Call20Regular, LockClosed32Regular, Eye16Filled, EyeOff24Filled} from '@vicons/fluent'
import {useDevice} from '@/composables/useDevice.js'
import router from '@/router'


import { ref } from 'vue'

const payload = ref({
  phone:'+998995016004',
  password:'Jamshid2@@@',
})
const showPassword = ref(false)


const onSubmit = ()=>{

  // Validate payload of
  if(!payload.value.phone ||  !payload.value.password){
    showNotify({ type: 'danger', message: 'Telefon raqam va parolni to\'liq kiriting' });
    return
  }

  onLogin()
}

const onLogin = async ()=>{
  showLoadingToast({
    forbidClick: true,
    type: 'loading',
    loadingType:'spinner',
    duration: 0
  });
  const {deviceId, model, platform} =await useDevice()
  const data = {
    ...payload.value,
    phone:payload.value.phone.slice(4).replace('(','').replace(')',''),
    device_uuid:deviceId,
    device_model:model,
    platform:platform,
  }
  $ApiService.authService.login({data}).then((res)=>{
    secureStorage.set(appSetting.accessTokenKey, res.data.access_token)
    router.push(appPaths.profile)
  }).finally(()=>{
    closeToast()
  })

}


</script>

<template>
<div class="w-full h-screen bg-surface-ground flex flex-col">

  <img class="w-[120px] mx-auto mt-[40px]" :src="appSetting.appLogoUrl" alt="app logo">
  <h3 class="text-center font-semibold text-base text-2xl mt-2">HRM PRO</h3>
  <h6 class="text-center text-base text-xs">"O'zbekiston temir yo'llari" AJ ning HRM platformasi</h6>

  <div class="grid grid-cols-12 mx-[20px] mt-[20px]">
    <div class="col-span-12">
      <label class="text-xs text-medium ml-2">Telefon raqam</label>
      <div class=" h-[44px] flex border-medium rounded-xl bg-surface-section">
        <Icon size="20" class="m-auto text-medium">
          <Call20Regular/>
        </Icon>
        <input class="w-[calc(100%-40px)] h-full text-xl font-bold" type="text"  v-model="payload.phone" :maxlength="16">
      </div>
    </div>
    <div class="col-span-12 mt-4">
      <label class="text-xs text-medium ml-2">Parol</label>
      <div class=" h-[44px] flex border-medium rounded-xl bg-surface-section">
        <Icon size="20" class="m-auto text-medium">
          <LockClosed32Regular/>
        </Icon>
        <input :maxlength="16" :type="showPassword? 'text' : 'password'" class="w-[calc(100%-80px)] h-full text-xl font-bold"  v-model="payload.password">
        <Icon size="20" class="m-auto text-medium">
          <EyeOff24Filled v-if="showPassword" @click="showPassword=!showPassword" />
          <Eye16Filled v-else @click="showPassword=!showPassword"/>
        </Icon>
      </div>
    </div>
    <van-button @click="onSubmit" class="col-span-12 !mt-6 !rounded-xl scale-100 active:scale-90 !transition-all !font-bold" type="primary">Tizimga kirish</van-button>
  </div>
</div>
</template>

<style scoped>

</style>
