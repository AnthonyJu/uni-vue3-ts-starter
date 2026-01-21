<template>
  <view class="h-full flex-items gap-4px" @click="goBack">
    <TnIcon name="left" />
    返回
  </view>
</template>

<script setup lang="ts">
import TnIcon from '@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue'

function goBack() {
  uni.navigateBack()
}
</script>
