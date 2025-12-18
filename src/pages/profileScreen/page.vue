<script setup>
import {Earth20Filled, ChevronRight12Regular, ChatHelp24Filled, Alert28Filled, Person28Filled} from "@vicons/fluent"
import { Icon } from '@vicons/utils'


const options = [
  {
    key:'langeage',
    name:'Languge',
    bg:'from-success to-primary/90',
    icon:Earth20Filled,
  },
  {
    key:'support',
    name:'Support',
    bg:'from-warning to-warning/90',
    icon:ChatHelp24Filled,
  },
  {
    key:'channel',
    name:'Our Channel',
    bg:'from-danger to-danger/40',
    icon:Alert28Filled,
  },
  {
    key:'friends',
    name:'Friends',
    bg:'from-success to-primary/90',
    icon:Person28Filled,
  },
  {
    key:'about_us',
    name:'About Us',
    bg:'from-[#01FFFF] to-[#01FFFF]/20',
    icon:Person28Filled,
  }
]
</script>

<template>
  <div class="w-full pt-[20px] px-[10px]">
    <div class="gradient-animation-border after:bg-[#17181A] relative w-full flex items-center bg-surface-section border border-surface-line rounded-2xl px-4 py-2 mb-[40px]">
      <div class="gradient-border w-[83px] h-[83px] overflow-hidden">
        <div class="gradient-animation-border-glow"></div>
        <van-image
          radius="100"
          width="80"
          height="80"
          src="/avatar.jpg"
          fit="cover"
        />
      </div>
      <div class="flex flex-col w-[calc(100%-83px)] pl-4">
        <div class="font-bold text-medium line-clamp-1">Jahongir XD</div>
        <div class="flex justify-between items-center mt-2">
            <span class="bg-primary/10 px-2 py-[1px] border border-primary/60 leading-[1.2] text-primary rounded-2xl text-xs">Pro user</span>
          <span class="text-xs text-medium">13.12.2025</span>
        </div>
      </div>

    </div>


    <div class="bg-surface-section rounded-xl border border-surface-line pt-2">
      <div v-for="item in options" v-ripple class="flex items-center pl-4 py-2 border-b border-surface-line">
        <div :class="[item.bg]" class="w-[36px] h-[36px] bg-gradient-to-r rounded-2xl flex justify-center items-center">
          <Icon size="30"  class="text-white">
            <component :is="item.icon" />
          </Icon>
        </div>
        <div class="w-[calc(100%-60px)] pl-4 text-base font-medium">
          {{item.name }}
        </div>
        <Icon size="18"  class="text-medium flex-shrink-0">
          <ChevronRight12Regular/>
        </Icon>
      </div>
    </div>

    <div v-ripple class="bg-surface-section border border-danger rounded-xl px-2 py-3 text-danger text-center mt-[60px]">
      Log out
    </div>

    <div class="w-full text-center text-medium text-xs mt-[40px]">Version 1.0.0</div>

  </div>
</template>



<style scoped>
.gradient-border {
  position: relative;
  border-radius: 100px;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 3px;
  border-radius:50px;
  z-index: 10;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #010101 60deg,
    #6b7280 120deg,
    #aaaaaa 180deg,
    transparent 360deg
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}



.gradient-animation-border {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.gradient-animation-border::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #ffffff 60deg,
    #6b7280 120deg,
    #9ca3af 180deg,
    transparent 360deg
  );
  animation: border-spin 4s linear infinite;
  transform-origin: center;
  z-index: 10;
}

.gradient-animation-border::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: 14px;
  z-index: 11;
}

/* Content ustida bo'lishi uchun */
.gradient-animation-border > * {
  position: relative;
  z-index: 12;
}

/* Glow effect */
.gradient-animation-border-glow {
  position: absolute;
  inset: -8px;
  border-radius: 16px;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #ffffff 60deg,
    #6b7280 120deg,
    transparent 360deg
  );
  animation: border-spin 4s linear infinite;
  filter: blur(20px);
  opacity: 0.5;
  z-index: -1;
}

@keyframes border-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}



</style>
