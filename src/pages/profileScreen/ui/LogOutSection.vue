<script setup>
import { showConfirmDialog } from 'vant';
import { appPaths, appSetting, secureStorage } from '@/utils/index.js'
import router from '@/router'


const onLogOutEv = () =>{
  showConfirmDialog({
    title: 'Tizimdan chiqish',
    message:"Siz haqiqattan ham hisobizdan chiqmoqchimisiz?",
    confirmButtonText:'Ha',
    cancelButtonText:"Yo'q",
  }).then(()=>{
    secureStorage.remove(appSetting.accessTokenKey)
    router.push(appPaths.login)
  })
}
</script>

<template>
  <div @click="onLogOutEv" v-ripple class="bg-surface-section border border-danger rounded-xl px-2 py-3 text-danger text-center mt-[60px]">
    Log out
  </div>

  <div class="w-full text-center text-medium text-xs mt-4">Version 1.0.0</div>
</template>
