<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { PersonCircle24Regular, AppRecent20Filled, Wallet24Filled } from "@vicons/fluent"
import { Icon } from '@vicons/utils'

const route = useRoute()
const direction = ref('right')
const previousIndex = ref(0)

const tabs = [
  { icon: AppRecent20Filled, label: 'Service', path: '/service' },
  { icon: Wallet24Filled, label: 'Wallet', path: '/wallet' },
  { icon: PersonCircle24Regular, label: 'Profile', path: '/profile' }
]

const currentIndex = computed(() => {
  return tabs.findIndex(tab => route.path.startsWith(tab.path)) ?? 0
})

const transitionName = computed(() => {
  return direction.value === 'right' ? 'slide-left' : 'slide-right'
})

watch(currentIndex, (newVal, oldVal) => {
  direction.value = newVal > oldVal ? 'right' : 'left'
  previousIndex.value = oldVal
})
</script>

<template>
  <div class="w-full h-screen overflow-hidden bg-surface-ground relative">

    <!-- Router View with Transition -->
    <router-view v-slot="{ Component }">
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component" :key="route.path" class="screen-content" />
      </Transition>
    </router-view>

    <!-- Navigation -->
    <div class="z-[100] flex justify-between items-center px-[20px] bg-surface-section border border-surface-line absolute left-1/2 -translate-x-1/2 bottom-[30px] h-[60px] w-[calc(100%-40px)] rounded-4xl">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.path"
        class="flex flex-col px-2 py-1 rounded-lg transition-all duration-300"
        :class="currentIndex === index ? 'text-primary scale-110' : 'text-medium'"
      >
        <Icon size="24" class="mx-auto">
          <component :is="tab.icon" />
        </Icon>
        <span class="text-[8px] mx-auto">{{ tab.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.screen-content {
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.2s ease;
}

.slide-left-enter-from { transform: translateX(100%); }
.slide-left-leave-to { transform: translateX(-100%); }
.slide-right-enter-from { transform: translateX(-100%); }
.slide-right-leave-to { transform: translateX(100%); }
</style>
