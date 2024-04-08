import { createSSRApp } from 'vue'
import App from './App.vue'

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  const modules = import.meta.glob('./modules/*.ts', { eager: true })
  Object.values(modules).reverse().forEach((ctx: any) => {
    ctx.default?.(app)
  })

  return {
    app,
  }
}
