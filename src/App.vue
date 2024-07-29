<script setup lang="ts">
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
@use "@/styles/index.scss";
</style>
