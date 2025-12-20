<script setup>
import { showConfirmDialog } from 'vant';
import { appPaths, appSetting, secureStorage } from '@/utils/index.js'
import router from '@/router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const onLogOutEv = () =>{
  showConfirmDialog({
    title: t('profile.logout.title'),
    message:t('profile.logout.warningText'),
    confirmButtonText:t('common.yes'),
    cancelButtonText:t('common.no'),
  }).then(()=>{
    secureStorage.remove(appSetting.accessTokenKey)
    router.push(appPaths.login)
  })
}
</script>

<template>
  <div @click="onLogOutEv" v-ripple class="bg-surface-section border border-danger rounded-xl px-2 py-3 text-danger text-center mt-[60px]">
   {{$t('profile.logout.name')}}
  </div>

  <div class="w-full text-center text-medium text-xs mt-4">Version 1.0.0</div>
</template>
