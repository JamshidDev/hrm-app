<script setup>
import { onMounted, ref } from 'vue'

const profileData = ref(null)
const loading = ref(false)

const getProfile = ()=>{
  loading.value = true
  $ApiService.authService.profile().then(res=>{
    const {last_name,first_name, middle_name } = res.data.data?.worker
    profileData.value = {
      photo:res.data.data?.worker?.photo,
      fullName:`${last_name} ${first_name} ${middle_name}`,
      organization:res.data.data?.organization?.name,
    }
  }).finally(()=>{
    loading.value = false
  })
}

onMounted(()=>{
  getProfile()
})
</script>

<template>
  <div class="bg-surface-section flex gap-4 items-center rounded-xl px-4 py-2 border border-surface-line mb-6 h-[60px]">

    <template v-if="!loading">
          <img class="w-[32px] rounded-full" :src="profileData?.photo" alt="user avatar">
          <div class="w-[calc(100%-32px)]">
            <h3 class="text-base line-clamp-1 leading-[1.2]">{{profileData?.fullName}}</h3>
            <h3 class=" line-clamp-1 text-xs text-secondary leading-[1.2]">{{profileData?.organization}}</h3>
          </div>
    </template>

    <template v-else>
      <van-skeleton-avatar/>
      <div class="w-[calc(100%-32px)]">
        <van-skeleton-paragraph/>
        <van-skeleton-paragraph/>
      </div>
    </template>
  </div>
</template>

