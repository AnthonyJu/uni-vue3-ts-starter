<template>
  <!-- 顶部导航 -->
  <TnNavbar
    :fixed="false"
    :bottom-shadow="false"
    :placeholder="false"
    v-bind="{ ...backProps, ...$attrs }"
  >
    <!-- #ifdef H5 || APP-PLUS -->
    <template v-if="!hideBack" #back>
      <SlotBack />
    </template>
    <!-- #endif -->

    <view v-if="hideBack" class="h-full flex-items" :style="backStyle">
      {{ title }}
    </view>
    <slot v-else>
      {{ title }}
    </slot>

    <template #right>
      <slot name="right" />
    </template>
  </TnNavbar>
</template>

<script setup lang="ts">
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp'
import TnNavbar from '@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.vue'
import SlotBack from '../slot-back/index.vue'

const props = defineProps<{
  title?: string
  hideBack?: boolean
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

const { navBarBoundingInfo } = useUniAppSystemRectInfo()

const backStyle = computed(() => {
  return {
    paddingLeft: `${navBarBoundingInfo.width + navBarBoundingInfo.marginRight}px`,
  }
})
</script>
