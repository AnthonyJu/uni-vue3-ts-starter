import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_APP_PORT } = loadEnv(mode, path.resolve(process.cwd()))

  return defineConfig({
    server: {
      hmr: true,
      host: true,
      open: true,
      port: Number(VITE_APP_PORT),
      proxy: {},
    },

    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },

    plugins: [
      // https://github.com/uni-helper/vite-plugin-uni-manifest
      UniHelperManifest(),

      // https://github.com/uni-helper/vite-plugin-uni-pages
      UniHelperPages({
        dts: 'src/uni-pages.d.ts',
        routeBlockLang: 'yaml',
      }),

      // https://github.com/uni-helper/vite-plugin-uni-layouts
      UniHelperLayouts(),

      // https://github.com/uni-helper/vite-plugin-uni-components
      UniHelperComponents({
        dts: 'src/components.d.ts',
        directoryAsNamespace: true,
      }),

      // https://github.com/dcloudio/uni-app#readme
      Uni({
        vueOptions: {
          script: {
            defineModel: true,
            propsDestructure: true,
          },
        },
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: ['vue', 'uni-app', 'pinia', '@vueuse/core'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/hooks', 'src/stores', 'src/utils'],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      UnoCSS(),

      // https://devtools-next.vuejs.org/guide/vite-plugin
      VueDevTools(),
    ],
  })
}
