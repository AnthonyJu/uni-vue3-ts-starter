import path from 'node:path'
import Unocss from 'unocss/vite'
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // https://github.com/dcloudio/uni-app#readme
    uni({
      vueOptions:{script:{
        defineModel: true,
        propsDestructure: true,
      }}
    }),

    // https://github.com/antfu/unocss
    Unocss(),
    
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
      ],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
    }),
  ],
});
