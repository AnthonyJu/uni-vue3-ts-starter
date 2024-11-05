<template>
  <z-paging ref="paging" v-model="dataList" @query="queryList">
    <!-- z-paging默认铺满全屏，此时页面所有view都应放在z-paging标签内，否则会被盖住 -->
    <!-- 需要固定在页面顶部的view请通过slot="top"插入，包括自定义的导航栏 -->
    <view v-for="(item, index) in dataList" :key="index" class="item">
      <view class="h-80px">{{ item.title }}</view>
    </view>
  </z-paging>
</template>

<script setup>
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
