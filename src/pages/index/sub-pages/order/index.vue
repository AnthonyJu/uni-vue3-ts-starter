<template>
  <PageContainer
    frosted
    hide-back
    tab-bottom
  >
    <template #title>
      <view class="relative w-full px-30rpx">自定义</view>
    </template>

    <view class="h-1000px bg-blue">订单页面</view>
  </PageContainer>
</template>

<script setup>
import PageContainer from '@/components/page-container/index.vue'
</script>

// #ifdef MP-WEIXIN
<script>
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif
