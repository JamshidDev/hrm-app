<script setup>
import { useNotify } from '@/composables/useNotify'
import { Icon } from '@vicons/utils'

const { notifications, remove } = useNotify()
</script>

<template>
  <div class="fixed top-[10px] right-[20px] z-[9999] flex flex-col gap-2 w-[280px]">
    <TransitionGroup name="notify">
      <div
        v-for="item in notifications"
        :key="item.id"
        :class="[
          'px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg cursor-pointer w-full',
          {
            'bg-green-500 text-white': item.type === 'success',
            'bg-red-500 text-white': item.type === 'danger',
            'bg-yellow-500 text-white': item.type === 'warning',
            'bg-blue-500 text-white': item.type === 'primary'
          }
        ]"
        @click="remove(item.id)"
      >
        <Icon size="28" class="shrink-0">
          <component :is="item.icon" />
        </Icon>
        <span class="text-xs">{{ item.message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>

<style>
.notify-move,
.notify-enter-active,
.notify-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.notify-enter-from {
  opacity: 0;
  transform: translateY(-30px) scale(0.8);
}

.notify-leave-to {
  opacity: 0;
  transform: translateX(100px) scale(0.8);
}

.notify-leave-active {
  position: absolute;
  right: 0;
}
</style>
