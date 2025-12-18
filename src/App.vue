<script setup>
import { ConfigProvider } from 'vant'
import LayoutApp from "@/layout/default.vue"
import {useTheme} from "@/assets"
import {onMounted} from "vue"
import {useTelegram} from '@/composables/useTelegram.js'

const { tg, user } = useTelegram();
console.log(tg)

if (tg) {
  const isDark = tg.colorScheme === 'dark';
  tg.setHeaderColor(isDark ? '#070708' : '#ffffff');
  tg.setBackgroundColor(isDark ? '#4feb1f' : '#f5f5f5');
  tg.ready();
  tg.expand();
  console.log(tg.initData)
}

if (user.value) {
  console.log('User ID:', user.value.id);
  console.log('Ism:', user.value.first_name);
  console.log('Username:', user.value.username);

  // Pinia'ga saqlash
  // useAuthStore().setUser(user.value);

  // Backend'ga yuborish
  // axios.post('/api/auth', {
  //   telegram_id: user.value.id,
  //   initData: tg.initData
  // });
}

</script>

<template>
  <ConfigProvider>
    <LayoutApp/>
  </ConfigProvider>
</template>

