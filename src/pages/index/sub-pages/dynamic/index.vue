<template>
  <z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
    <!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
    <template #top>
      <NavBack hide-back title="动态" />
    </template>
    <PageContainer tab-bottom>
      <view v-for="(item, index) in dataList" :key="index" class="item">
        <view class="h-100px flex-center">{{ item.title }}</view>
      </view>
    </PageContainer>
  </z-paging>
</template>

<script setup>
import NavBack from '@/components/nav-back/index.vue'
import PageContainer from '@/components/page-container/index.vue'

const paging = ref()
const dataList = ref([])

function queryList(pageNo, pageSize) {
  setTimeout(() => {
    const list = []
    for (let i = 0; i < pageSize; i++) {
      list.push({
        title: `标题${(pageNo - 1) * pageSize + i + 1}`,
      })
    }
    paging.value.complete(list)
  }, 500)
}
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
