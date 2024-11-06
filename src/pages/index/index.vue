<template>
  <view class="page">
    <!-- 子页面 -->
    <template v-for="index in 5" :key="`subpage_${index}`">
      <view
        v-if="renderPageStatus[index - 1]"
        class="page__container"
        :class="currentTabbarIndex === index - 1 ? 'block' : 'hidden'"
      >
        <scroll-view
          class="scroll-view"
          :scroll-y="true"
          @scroll="scrollViewScrollHandle"
        >
          <Home v-if="index === 1" />
          <Order v-else-if="index === 2" />
          <Dynamic v-else-if="index === 3" />
          <Msg v-else-if="index === 4" />
          <Mine v-else-if="index === 5" />
        </scroll-view>
      </view>
    </template>
  </view>

  <!-- 底部导航栏 -->
  <tn-tabbar
    v-model="currentTabbarIndex"
    :fixed="true"
    frosted
    switch-animation
    :placeholder="false"
    font-size="20"
    @change="tabbarChangeHandle"
  >
    <tn-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :text="item.text"
      :icon="item.icon"
      :active-icon="item.activeIcon"
      :bulge="index === 2"
      :icon-size="index === 2 ? '56' : ''"
    />
  </tn-tabbar>
</template>

<script setup lang="ts">
import { useIndex } from './composables'

/* 引入子页面 */
import Dynamic from './sub-pages/dynamic/index.vue'
import Home from './sub-pages/home/index.vue'
import Mine from './sub-pages/mine/index.vue'
import Msg from './sub-pages/msg/index.vue'
import Order from './sub-pages/order/index.vue'

const {
  tabbarData,
  currentTabbarIndex,
  renderPageStatus,
  tabbarChangeHandle,
  scrollViewScrollHandle,
} = useIndex()

onLoad((options: any) => {
  // 当前进入子页面的索引值
  const index = Number(options?.index || 0)
  // 切换底部导航栏
  setTabBar(index)
})

function setTabBar(index: number) {
  // 切换底部导航栏
  tabbarChangeHandle(index)
  // 设置默认被渲染的页面
  renderPageStatus.value[index] = true
  nextTick(() => {
    // 设置当前子页面的索引值
    currentTabbarIndex.value = index
  })
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;

  &__container {
    position: relative;
    width: 100%;
    height: 100%;

    .scroll-view {
      width: 100%;
      height: 100%;
      background:
        linear-gradient(
          180deg,
          transparent 0%,
          transparent 50%,
          var(--tn-color-blue-light) 100%,
        );
    }
  }
}
</style>
