<template>
  <view class="full flex-col-center text-center">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="text-40rpx text-red" bg-blue p="2">{{ title }}</text>
    </view>
    <Counter mt-4 />
  </view>
</template>

<script setup lang="ts">
// 小程序下需要手动引入
import Counter from '@/components/Counter.vue'

const title = ref('Hello World!')

// eslint-disable-next-line no-console
console.log('title', title.value)

request('/test')
</script>

<style lang="scss">
.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}
</style>
