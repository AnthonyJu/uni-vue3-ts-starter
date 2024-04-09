<template>
  <div>
    <div>{{ counter.count }}</div>
    <uv-button type="primary" text="增加" @click="counter.add()" />
  </div>
</template>

<script setup lang='ts'>
const counter = useCounterStore()
</script>
