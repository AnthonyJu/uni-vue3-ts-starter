import type { App } from 'vue'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export default (app: App) => {
  // https://pinia.vuejs.org/
  const pinia = createPinia()

  pinia.use(createPersistedState({
    storage: {
      getItem: uni.getStorageSync,
      setItem: uni.setStorageSync,
    },
  }))

  app.use(pinia)
}
