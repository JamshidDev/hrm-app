<script setup>
import {Earth20Filled, ChevronRight12Regular, ChatHelp24Filled, Alert28Filled, Person28Filled} from "@vicons/fluent"
import { Icon } from '@vicons/utils'
import LogOutSection from "./ui/LogOutSection.vue"


const options = [
  {
    key:'langeage',
    name:"Shaxsiy ma'lumotlar",
    bg:'from-primary to-primary/90 shadow-primary',
    icon:Earth20Filled,
  },
  {
    key:'langeage',
    name:"Ish haqi",
    bg:'from-primary to-primary/90 shadow-primary',
    icon:Earth20Filled,
  },
  {
    key:'langeage',
    name:"Turniket ma'lumotlari",
    bg:'from-primary to-primary/90 shadow-primary',
    icon:Earth20Filled,
  },
  {
    key:'support',
    name:'Mehnat faoliyati',
    bg:'from-[#FF3E4E] to-[#FF3E4E] shadow-danger',
    icon:ChatHelp24Filled,
  },
  {
    key:'channel',
    name:'Qarindoshlari',
    bg:'from-[#FF3E4E] to-[#FF3E4E] shadow-danger',
    icon:Alert28Filled,
  },
  {
    key:'friends',
    name:"Ma'lumoti",
    bg:'from-[#25d366] to-[#25d366] shadow-success',
    icon:Person28Filled,
  },
  {
    key:'about_us',
    name:"Tibbiy ma'lumotlari",
    bg:'from-[#ffba00] to-[#ffba00] shadow-warning',
    icon:Person28Filled,
  },
  {
    key:'about_us',
    name:"Ta'til ma'lumotlari",
    bg:'from-[#ffba00] to-[#ffba00] shadow-warning',
    icon:Person28Filled,
  },
  {
    key:'about_us',
    name:"Rag'batlantirish",
    bg:'from-[#ffba00] to-[#ffba00] shadow-warning',
    icon:Person28Filled,
  },
  {
    key:'about_us',
    name:"Intizomiy ja'zolar",
    bg:'from-[#ffba00] to-[#ffba00] shadow-warning',
    icon:Person28Filled,
  },

]
</script>

<template>
  <div class="w-full pt-[20px] px-[10px] overflow-y-auto overflow-x-hidden pb-[100px]">
    <div class="bg-surface-section flex gap-4 items-center rounded-xl px-4 py-2 border border-surface-line mb-6">
      <img class="w-[32px] rounded-full" src="https://s3.dasuty.com/hrm/worker-photos/d96ea0e7e12cdd28b6cbed9bd8cbedb5.jpeg" alt="user avatar">
      <div class="w-[calc(100%-32px)]">
        <h3 class="text-base line-clamp-1 leading-[1.2]">Raximov Jamshid Shuxrat o'g'li</h3>
        <h3 class=" line-clamp-1 text-xs text-secondary leading-[1.2]">"O‘zbekiston temir yo‘llari" AJ</h3>
      </div>
    </div>

    <div class="bg-surface-section rounded-xl border border-surface-line">
      <div v-for="item in options" :key="item" v-ripple class="flex items-center pl-4 py-2 border-b border-surface-line">
        <div :class="[item.bg]" class="w-[36px] h-[36px] bg-gradient-to-r rounded-2xl flex justify-center items-center z-10">
          <Icon size="20"  class="text-white">
            <component :is="item.icon" />
          </Icon>
        </div>
        <div class="w-[calc(100%-60px)] pl-4 text-base font-medium select-none">
          {{item.name }}
        </div>
        <Icon size="18"  class="text-medium flex-shrink-0">
          <ChevronRight12Regular/>
        </Icon>
      </div>
    </div>

    <LogOutSection/>

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

.shadow-danger {
  --vs-color: 255, 62, 78;
  -webkit-box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
  box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
}

.shadow-primary {
  --vs-color: 26, 92, 255;
  -webkit-box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
  box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
}

.shadow-success {
  --vs-color: 37, 211, 102;
  -webkit-box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
  box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
}

.shadow-warning {
  --vs-color: 255, 186, 0;
  -webkit-box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
  box-shadow: 0 8px 10px -6px rgba(var(--vs-color), 1);
}







</style>
