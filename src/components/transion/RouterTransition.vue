<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  mode: {
    type: String,
    default: 'history'
  },
  tabs: {
    type: Array,
    default: () => []
  },
  direction: {
    type: String,
    default: 'right'
  },
  duration: {
    type: Number,
    default: 300
  }
})

const route = useRoute()
const internalDirection = ref('right')

const currentIndex = computed(() => {
  if (props.mode !== 'tabs') return 0
  return props.tabs.findIndex(tab => route.path.startsWith(tab.path)) ?? 0
})

watch(currentIndex, (newVal, oldVal) => {
  if (props.mode === 'tabs') {
    internalDirection.value = newVal > oldVal ? 'right' : 'left'
  }
})

watch(() => route.path, () => {
  if (props.mode === 'history') {
    internalDirection.value = history.state?.back ? 'left' : 'right'
  }
})

const transitionName = computed(() => {
  const dir = props.mode === 'manual' ? props.direction : internalDirection.value
  return dir === 'right' ? 'slide-left' : 'slide-right'
})

const transitionStyle = computed(() => ({
  '--slide-duration': `${props.duration}ms`
}))
</script>

<template>
  <div class="slide-container" :style="transitionStyle">
    <router-view v-slot="{ Component }">
      <Transition :name="transitionName">
        <component :is="Component" :key="route.path" class="slide-content" />
      </Transition>
    </router-view>
  </div>
</template>

<style scoped>
.slide-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Transition timing */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform var(--slide-duration, 300ms) ease-out;
}

/* slide-left: yangi page o'ngdan kiradi, eski page chapga chiqadi */
.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

/* slide-right: yangi page chapdan kiradi, eski page o'ngga chiqadi */
.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-enter-to {
  transform: translateX(0);
}

.slide-right-leave-from {
  transform: translateX(0);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
