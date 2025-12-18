<script setup>
import { ref, computed } from 'vue'
import { PersonCircle24Regular, AppRecent20Filled, Wallet24Filled } from "@vicons/fluent"
import { Icon } from '@vicons/utils'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue'])

const direction = ref('right')
const isAnimating = ref(false)

const currentScreen = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (isAnimating.value || val === props.modelValue) return
    direction.value = val > props.modelValue ? 'right' : 'left'
    emit('update:modelValue', val)
  }
})

const transitionName = computed(() => {
  return direction.value === 'right' ? 'slide-left' : 'slide-right'
})

const onBeforeEnter = () => {
  isAnimating.value = true
}

const onAfterEnter = () => {
  isAnimating.value = false
}

const tabs = [
  { icon: AppRecent20Filled, label: 'Service' },
  { icon: Wallet24Filled, label: 'Wallet' },
  { icon: PersonCircle24Regular, label: 'Profile' }
]
</script>

<template>
  <div class="w-full h-screen overflow-hidden bg-surface-ground relative">

    <!-- Screen Content with Transition -->
    <Transition
      :name="transitionName"
      mode="out-in"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
    >
      <div :key="currentScreen" class="screen-content">
        <slot :current="currentScreen" />
      </div>
    </Transition>

    <!-- Screen navigation -->
    <div class="z-[100] flex justify-between items-center px-[20px] bg-surface-section border border-surface-line absolute left-1/2 -translate-x-1/2 bottom-[30px] h-[60px] w-[calc(100%-40px)] rounded-4xl">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="flex flex-col px-2 py-1 border-surface-line rounded-lg cursor-pointer transition-all duration-300"
        :class="currentScreen === index ? 'text-primary scale-110' : 'text-medium'"
        @click="currentScreen = index"
      >
        <Icon size="24" class="mx-auto">
          <component :is="tab.icon" />
        </Icon>
        <span class="text-[8px] mx-auto">{{ tab.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.screen-content {
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
}

/* ===== Chapga slide ===== */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.2s ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

/* ===== O'ngga slide ===== */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.2s ease;
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
