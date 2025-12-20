
<script setup>
import { appPaths, appSetting, secureStorage } from '@/utils/index.js'
import {Icon} from '@vicons/utils'
import {Call20Regular, LockClosed32Regular, Eye16Filled, EyeOff24Filled} from '@vicons/fluent'
import {useNotify, useDevice} from '@/composables'
import router from '@/router'



import { nextTick, ref } from 'vue'
const notify = useNotify()

const payload = ref({
  phone:null,
  password:null,
})
const loading = ref(false)
const showPassword = ref(false)


const onSubmit = ()=>{
  if(!payload.value.phone ||  !payload.value.password || payload.value.phone?.toString().length !== 14){
    notify.warning("Telefon raqam yoki parolni to'g'riligini tekshiring")
    return
  }
  onLogin()
}

const onLogin = async ()=>{
  loading.value = true
  const {deviceId, model, platform} =await useDevice()
  const data = {
    ...payload.value,
    phone:payload.value.phone?.toString()?.replace(/\D/g, ''),
    device_uuid:deviceId,
    device_model:model,
    platform:platform,
  }
  $ApiService.authService.login({data}).then(async(res)=>{
    await secureStorage.set(appSetting.accessTokenKey, res.data.access_token)
    await router.replace(appPaths.profile)
    await nextTick()
  }).finally(()=>{
    loading.value = false
  })

}


</script>

<template>
  <div class="w-full h-screen page-bg flex flex-col">

    <img class="w-[120px] mx-auto mt-[80px]" :src="appSetting.appLogoUrl" alt="app logo">
    <h3 class="text-center font-semibold text-base text-4xl mt-2">Welcome</h3>
    <h6 class="text-center text-medium text-[15px] mt-1">Sign in to continue</h6>

    <div class="grid grid-cols-12 mx-[20px] mt-[20px]">
      <div class="col-span-12">
        <label class="text-xs text-medium ml-2">Telefon raqam</label>
        <div class="h-[52px] flex border border-surface-line rounded-xl bg-surface-section focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/40 transition-all">
          <Icon size="20" class="m-auto text-medium flex-shrink-0 w-[40px]">
            <Call20Regular/>
          </Icon>
          <div class="m-auto text-medium flex-shrink-0">
            +998
          </div>
          <input
            v-mask="'(##)-###-##-##'"
            class="w-[calc(100%-80px)] h-full text-xl text-base font-bold bg-transparent outline-none"
            type="text"
            v-model="payload.phone"
            :maxlength="14"
          >
        </div>
      </div>
      <div class="col-span-12 mt-4">
        <label class="text-xs text-medium ml-2">Parol</label>
        <div class="h-[52px] flex border border-surface-line rounded-xl bg-surface-section focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/40 transition-all">
          <Icon size="20" class="m-auto text-medium">
            <LockClosed32Regular/>
          </Icon>
          <input
            :maxlength="16"
            placeholder="Parol"
            :type="showPassword? 'text' : 'password'"
            class="w-[calc(100%-80px)] h-full text-xl font-bold text-medium"
            v-model.trim="payload.password"
            name="password"
            id="password"
          >
          <Icon size="20" class="m-auto text-medium">
            <EyeOff24Filled v-if="showPassword" @click="showPassword=!showPassword" />
            <Eye16Filled v-else @click="showPassword=!showPassword"/>
          </Icon>
        </div>
      </div>
      <van-button size="large" @click="onSubmit" :loading="loading" class="!h-[52px] col-span-12 !mt-10 !rounded-xl scale-100 active:scale-90 !transition-all" type="primary">Tizimga kirish</van-button>
    </div>
  </div>
</template>

