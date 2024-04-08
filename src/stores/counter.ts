export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const inc = () => {
      count.value++
    }
    const dec = () => {
      count.value--
    }
    return {
      count,
      dec,
      inc,
    }
  },
  {
    persist: true,
  },
)
