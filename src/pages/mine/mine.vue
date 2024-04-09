<template>
  <div>mine</div>
  <uv-swiper :list="list" />
</template>

<script setup lang='ts'>
uni.showToast({
  title: 'Hello',
})
const list = ref([
  'https://cdn.uviewui.com/uview/swiper/swiper1.png',
  'https://cdn.uviewui.com/uview/swiper/swiper2.png',
  'https://cdn.uviewui.com/uview/swiper/swiper3.png',
])
</script>

<style lang='scss' scoped>

</style>
