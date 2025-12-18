<script setup>
import {
  TelegramIcon,
  ArrowRightIcon,
  YoutubeIcon,
  TiktokIcon,
  WhatsappIcon,
  FacebookIcon,
  HistoryIcon,
  ReferralIcon,
  CopyIcon,
  WalletIcon,
} from "@/assets/icons/index.js"


</script>

<template>
  <div class="layout-shadow relative pt-2">
    <div class="mb-2">
      <img class="grayscale w-full max-h-[30px]" src="https://qzino.app/images/bonus-spin/decor-header.png" alt="">
    </div>
    <div class="w-full border surface-card border-surface-line rounded-lg p-4 sticky top-[0px]">
      <div class="flex justify-between">
        <div class="flex gap-2 items-center border border-surface-line px-2 rounded-md">
          <span class="text-medium font-bold">189567</span>
          <CopyIcon class="w-[32px] h-[32px] text-medium "/>
        </div>


        <div class="flex gap-2 items-center  border border-surface-line px-2 rounded-md">
           <span class="text-medium">
    To'ldirish</span>
          <WalletIcon class="w-[30px] h-[30px] text-primary "/>

        </div>



      </div>
      <div class="text-center text-base font-bold flex justify-center items-center mt-[40px]">
        <img class="w-[30px]" src="https://web.telegram.org/a/GoldStar.fb6812e915ddfe27f504.svg" alt="">
        <span class="text-4xl pl-4">00.00</span>
      </div>
      <h4 class="text-medium font-normal text-center text-xs">Balansingiz</h4>
    </div>

    <p class="text-medium uppercase text-xs font-bold !mt-12">Kerakli platformani tanlang</p>
    <div class="w-full bg-surface-ground z-[10] relative rounded-tl-lg rounded-tr-lg">
      <template v-for="item in 1">
        <div v-ripple class="w-full flex justify-between border-b border-surface-line px-2 py-2">
          <div class="flex gap-2 items-center">
            <TelegramIcon class="w-[36px] h-[36px]"/>
            <div>
              <div class="text-base font-bold text-lg">Telegram</div>
              <div class="text-xs text-medium">8098 ta raqam</div>
            </div>
          </div>

          <div class="flex items-center">
              <ArrowRightIcon class="w-[36px] text-medium"/>
          </div>
        </div>
        <div v-ripple class="w-full flex justify-between border-b border-surface-line px-2 py-2">
          <div class="flex gap-2 items-center">
            <YoutubeIcon class="w-[36px] h-[36px] text-[#D8143A] bg-base rounded-full overflow-hidden "/>
            <div>
              <div class="text-base font-bold text-lg">Youtube</div>
              <div class="text-xs text-medium">8098 ta raqam</div>
            </div>
          </div>

          <div class="flex items-center">
            <ArrowRightIcon class="w-[36px] text-medium"/>
          </div>
        </div>
        <div v-ripple class="w-full flex justify-between border-b border-surface-line px-2 py-2">
          <div class="flex gap-2 items-center">
            <TiktokIcon class="w-[36px] h-[36px] border border-surface-line rounded-full "/>
            <div>
              <div class="text-base font-bold text-lg">Tik Tok</div>
              <div class="text-xs text-medium">8098 ta raqam</div>
            </div>
          </div>

          <div class="flex items-center">
            <ArrowRightIcon class="w-[36px] text-medium"/>
          </div>
        </div>
        <div v-ripple class="w-full flex justify-between border-b border-surface-line px-2 py-2">
          <div class="flex gap-2 items-center">
            <WhatsappIcon class="w-[36px] h-[36px] border border-surface-line rounded-full "/>
            <div>
              <div class="text-base font-bold text-lg">Whatsapp</div>
              <div class="text-xs text-medium">8098 ta raqam</div>
            </div>
          </div>

          <div class="flex items-center">
            <ArrowRightIcon class="w-[36px] text-medium"/>
          </div>
        </div>
        <div v-ripple class="w-full flex justify-between border-b border-surface-line px-2 py-2">
          <div class="flex gap-2 items-center">
            <FacebookIcon class="w-[36px] h-[36px] border border-surface-line rounded-full "/>
            <div>
              <div class="text-base font-bold text-lg">Facebook</div>
              <div class="text-xs text-medium">8098 ta raqam</div>
            </div>
          </div>

          <div class="flex items-center">
            <ArrowRightIcon class="w-[36px] text-medium"/>
          </div>
        </div>
      </template>

    </div>

    <div class="grid grid-cols-12 gap-4 mt-10">
        <div v-ripple class="col-span-6 bg-surface-section p-2 border border-surface-line rounded-lg">
            <div class="bg-surface-section border ml-auto border-surface-line w-[42px] h-[42px] rounded-full flex justify-center items-center ">
              <HistoryIcon class="w-[36px] h-[36px] text-medium" />
            </div>
            <div class="text-medium text-xs pt-2">To'lovlar tarixi</div>
        </div>
      <div v-ripple class="col-span-6 bg-surface-section p-2 border border-surface-line rounded-lg">
        <div class="bg-surface-section border ml-auto border-surface-line w-[42px] h-[42px] rounded-full flex justify-center items-center ">
          <ReferralIcon class="w-[36px] h-[36px] text-medium" />
        </div>
        <div class="text-medium text-xs pt-2">Taklif orqali foyda olish</div>
      </div>

    </div>
  </div>






</template>
