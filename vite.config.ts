import path from 'node:path'
import process from 'node:process'
import Uni from '@dcloudio/vite-plugin-uni'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, path.resolve(process.cwd()))
  const Unocss = await import('unocss/vite').then(m => m.default)

  return {
    server: {
      hmr: true,
      host: true,
      open: true,
      port: Number(env.VITE_SERVER_PORT),
      proxy: {},
    },

    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      // https://github.com/dcloudio/uni-app#readme
      Uni({
        vueOptions: {
          script: {
            defineModel: true,
          },
        },
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'pinia',
          'uni-app',
        ],
        dirs: [
          'src/stores',
          'src/utils',
          'src/hooks',
        ],
        vueTemplate: true,
        dts: 'src/auto-imports.d.ts',
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dts: 'src/components.d.ts',
        include: [/\.vue$/, /\.vue\?vue/],
      }),

      // https://github.com/antfu/unocss
      Unocss(),
    ],
  }
})
