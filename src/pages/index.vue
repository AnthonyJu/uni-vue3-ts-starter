<template>
  <view class="content text-center">
    <image class="logo" src="@/static/vite.png" />
    <view class="text-area">
      <text class="text-40rpx text-red" p="2" mb-10px bg-blue>{{ title }}</text>
    </view>
    <Counter />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello')
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

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
