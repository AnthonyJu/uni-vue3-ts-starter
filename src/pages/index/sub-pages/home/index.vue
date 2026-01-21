<template>
  <PageContainer
    hide-back
    tab-bottom
    hide-padding-top
    :bg-color="`rgba(255, 255, 255, ${navbarOpacity})`"
    @init-finish="updateTargetTriggerValue"
  >
    <!-- 顶部搜索区域 -->
    <template #title>
      <view class="navbar">
        <view class="navbar__logo">
          <image
            class="tn-image"
            src="https://resource.tuniaokj.com/logo.png"
            mode="aspectFill"
          />
        </view>
        <view
          class="search-box"
          :style="{
            backgroundColor: `rgba(248, 247, 248 , ${Math.max(
              0.25,
              navbarOpacity,
            )})`,
            color: `rgba(0, 0, 0 , ${Math.max(0.45, navbarOpacity)})`,
          }"
        >
          <view class="search-box__icon">
            <tn-icon name="search" />
          </view>
          <view class="search-box__tips">想搜索点什么呢</view>
        </view>
      </view>
    </template>

    <TnSwiper :data="swiperData" width="100%" height="500rpx" indicator loop>
      <template #default="{ data }">
        <image class="tn-image" :src="data" mode="aspectFill" />
      </template>
    </TnSwiper>

    <view :id="triggerElementId" class="mb-20rpx full flex-col-center text-center">
      <image class="my-50rpx h-200rpx w-200rpx" src="/static/logo.png" />
      <text class="text-40rpx text-red" bg-blue p="2">uniapp</text>
    </view>

    <view class="h-1400px bg-amber" />
  </PageContainer>
</template>

<script setup lang="ts">
import PageContainer from '@/components/page-container/index.vue'
import { useSubPageProvide } from '@/pages/index/composables'
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'

const instance = getCurrentInstance()

const {
  triggerElementId,
  navbarOpacity,
  init: initTransparentScroll,
  updateTargetTriggerValue,
  opacityScrollHandle,
} = useScrollTransparentNavbar(instance)

onMounted(initTransparentScroll)

useSubPageProvide(0, {
  onScroll: ({ top }) => {
    opacityScrollHandle(top)
  },
})

const swiperData = ref([
  'https://resource.tuniaokj.com/images/swiper/ad1.jpg',
  'https://resource.tuniaokj.com/images/swiper/ad2.jpg',
  'https://resource.tuniaokj.com/images/swiper/ad3.jpg',
  'https://resource.tuniaokj.com/images/swiper/ad4.jpg',
])
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30rpx;

  &__logo {
    flex-grow: 0;
    flex-shrink: 0;
    width: 56rpx;
    height: 56rpx;
    background-color: var(--tn-color-gray-light);
    border-radius: 50%;

    .image {
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .search-box {
    display: flex;
    flex: 1;
    align-items: center;
    height: 64rpx;
    max-height: 100%;
    padding: 0 30rpx;
    margin-left: 24rpx;
    line-height: 1;
    border-radius: 50rpx;

    &__icon {
      font-size: 32rpx;
    }

    &__tips {
      margin-left: 16rpx;
      font-size: 24rpx;
    }
  }
}
</style>
