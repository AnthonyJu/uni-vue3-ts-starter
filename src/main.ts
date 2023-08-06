import { createSSRApp } from "vue";
import App from "./App.vue";

// eslint-disable-next-line
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App);

  const pinia = createPinia();
  app.use(pinia);

  return {
    app,
  };
}
