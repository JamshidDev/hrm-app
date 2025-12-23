<script setup>
import {useAccountStore} from '@store'

const store = useAccountStore()

onMounted(()=>{
  if(store.account) return
  store.fetchProfile()
})
</script>

<template>
  <div class="bg-surface-section flex gap-4 items-center rounded-xl px-4 py-2 border border-surface-line mb-6 h-[60px]">

    <template v-if="!store.profileLoading">
          <img class="w-[32px] rounded-full" :src="store.account?.photo" alt="user avatar">
          <div class="w-[calc(100%-32px)]">
            <h3 class="text-base line-clamp-1 leading-[1.2]">{{store.account?.fullName}}</h3>
            <h3 class=" line-clamp-1 text-xs text-secondary leading-[1.2]">{{store.account?.organization}}</h3>
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

