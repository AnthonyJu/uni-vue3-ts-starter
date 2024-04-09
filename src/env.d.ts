/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_SERVER_PORT: string
  readonly VITE_SERVER_BASEURL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
