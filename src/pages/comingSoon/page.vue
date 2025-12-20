<script setup>
import {CodeCircle20Filled} from "@vicons/fluent"
import {Icon} from '@vicons/utils'
</script>

<template>
  <div class="page-bg w-full min-h-screen flex justify-center items-center">
    <div class="mx-10 flex flex-col">
      <Icon size="60" class="text-primary mx-auto">
        <CodeCircle20Filled/>
      </Icon>
      <div class="text-secondary text-center text-xs mt-3">{{$t('common.comingSoon')}}</div>
    </div>

  </div>
</template>

