<script setup>
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'

onLaunch(() => {
  // eslint-disable-next-line no-console
  console.log('App Launch')
})
onShow(() => {
  // eslint-disable-next-line no-console
  console.log('App Show')
})
onHide(() => {
  // eslint-disable-next-line no-console
  console.log('App Hide')
})
</script>

<style lang="scss">
@import "@/styles/index";
@import "@/uni_modules/tuniaoui-vue3/index.css";
</style>
