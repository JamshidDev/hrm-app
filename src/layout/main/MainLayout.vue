<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { PersonCircle24Regular,Home48Regular, Settings48Regular, DocumentBulletList20Regular } from "@vicons/fluent"
import { Icon } from '@vicons/utils'
import RouterTransition from '@/components/transion/RouterTransition.vue'
import { appPaths } from '@/utils/index.js'

const route = useRoute()
const direction = ref('right')

const tabs = [
  { icon: DocumentBulletList20Regular, label: 'Arizalar', path:appPaths.application},
  { icon: DocumentBulletList20Regular, label: 'Hujjatlar', path: appPaths.document},
  { icon: Home48Regular, label: 'Asosiy', path: appPaths.main  },
  { icon: PersonCircle24Regular, label: 'Profil', path: appPaths.profile },
  { icon: Settings48Regular, label: 'Sozlamalar', path: appPaths.setting },
]

const currentIndex = computed(() => {
  return tabs.findIndex(tab => route.path.startsWith(tab.path)) ?? 0
})


watch(currentIndex, (newVal, oldVal) => {
  direction.value = newVal > oldVal ? 'right' : 'left'
})
</script>

<template>
  <div class="w-full h-screen overflow-hidden relative">
    <RouterTransition mode="tabs" :tabs="tabs" :duration="250"  />

    <div class="z-[100] shadow-sm flex justify-between items-center px-[6px] bg-surface-section/30 backdrop-blur-[20px] border border-surface-line fixed left-1/2 -translate-x-1/2 bottom-[20px] h-[60px] w-[calc(100%-20px)] rounded-xl">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.path"
        class="flex flex-col px-2 py-1 rounded-lg transition-all duration-300 relative h-[46px]"
        :class="currentIndex === index ? 'text-primary scale-100' : 'text-base'"
      >
        <div :class="[index === 2 ? 'bg-primary shadow-primary text-white flex justify-center items-center p-3 rounded-2xl absolute bottom-[30px] left-1/2 -translate-x-1/2' : 'h-[26px] flex justify-center'] ">
          <Icon size="24" class="mx-auto">
            <component :is="tab.icon" />
          </Icon>
        </div>
        <span class="text-[8px] mx-auto mt-auto leading-[1.2] content-end">{{ tab.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.shadow-primary {
  --vs-color: 26, 92, 255;
  -webkit-box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
  box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
}
</style>

