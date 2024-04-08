<template>
  <view inline-flex m="y-3">
    <button class="btn" @click="counter.dec()">
      <text i-carbon-subtract />
    </button>
    <view font="mono" w="15" m-auto inline-block>
      {{ counter.count }}
    </view>
    <button class="btn" @click="counter.inc()">
      <text i-carbon-add />
    </button>
  </view>
</template>

<script setup lang="ts">
const counter = useCounterStore()
</script>
