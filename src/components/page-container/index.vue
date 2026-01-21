<template>
  <view
    class="page-container"
    :class="tabBottom ? 'tab-bottom' : 'safe-bottom'"
    :style="{ paddingTop: `${hidePaddingTop ? 0 : navbarHeight}px` }"
  >
    <!-- 顶部导航 -->
    <TnNavbar
      v-if="title || $slots.title"
      :fixed="true"
      :bottom-shadow="false"
      :placeholder="false"
      v-bind="{ ...backProps, ...$attrs }"
      @init-finish="navbarInitFinishHandle"
    >
      <!-- #ifdef H5 || APP-PLUS -->
      <template v-if="!hideBack" #back>
        <SlotBack />
      </template>
      <!-- #endif -->

      <slot name="title">
        {{ title }}
      </slot>

      <template #right>
        <slot name="right" />
      </template>
    </TnNavbar>

    <!-- 内容 -->
    <slot />
  </view>
</template>

<script setup lang="ts">
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import SlotBack from '../slot-back/index.vue'

const props = defineProps<{
  title?: string
  hideBack?: boolean
  tabBottom?: boolean
  hidePaddingTop?: boolean
}>()

const emit = defineEmits<{
  initFinish: [number]
}>()

const backProps = computed(() => {
  if (props.hideBack) {
    return {
      backIcon: '',
      backText: '',
      homeIcon: '',
      homeText: '',
    }
  }
  else {
    return {}
  }
})

// 导航栏顶部的高度
const navbarHeight = ref(0)

// 顶到导航栏初始化完毕
function navbarInitFinishHandle({ height }: { height: number }) {
  navbarHeight.value = height
  emit('initFinish', height)
}
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<style lang="scss" scoped>
.page-container {
  position: relative;
  width: 100%;
  min-height: 100%;

  &.tab-bottom {
    padding-bottom: calc(140rpx + env(safe-area-inset-bottom));
  }

  &.safe-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
