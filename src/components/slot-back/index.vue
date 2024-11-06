<template>
  <view class="h-full flex-items gap-4px" @click="goBack">
    <tn-icon name="left" />
    返回
  </view>
</template>

<script setup lang="ts">
function goBack() {
  uni.navigateBack()
}
</script>
