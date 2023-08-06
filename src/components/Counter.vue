<template>
  <div>{{ counter.count }}</div>
  <button @click="counter.add()">add</button>
</template>

<script setup lang='ts'>
const counter = useCounterStore()
</script>
