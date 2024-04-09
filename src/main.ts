import { createSSRApp } from 'vue'
import App from './App.vue'

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  // 版本暂时固定 2.0.36
  // 否则会报错："hasInjectionContext" is not exported by xxx
  // https://github.com/vuejs/pinia/issues/2228
  const pinia = createPinia()
  app.use(pinia)

  return {
    app,
  }
}
