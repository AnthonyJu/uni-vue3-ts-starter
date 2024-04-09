import process from 'node:process'
import {
  defineConfig,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

import type { Preset } from 'unocss'

const isH5 = process.env?.UNI_PLATFORM === 'h5'
const isMp = process.env?.UNI_PLATFORM?.startsWith('mp') ?? false

const presets: Preset[] = []
if (!isMp) presets.push(presetAttributify())
if (!isH5) presets.push(presetRemRpx())

/**
 * 最终会得到：
 * mp 里面：mt-4 => margin-top: 32rpx
 * h5 里面：mt-4 => margin-top: 1rem
 */

export default defineConfig({
  rules: [
    ['pt-safe', { 'padding-top': 'env(safe-area-inset-top)' }],
    ['pb-safe', { 'padding-bottom': 'env(safe-area-inset-bottom)' }],
    ['p-safe', { padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }],
  ],
  shortcuts: {
    'full': 'w-full h-full',
    'flex-col': 'flex flex-col',
    'flex-items': 'flex items-center',
    'flex-b-c': 'flex justify-between items-center',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex flex-col justify-center items-center',
  },
  presets: [
    presetApplet({ enable: !isH5 }),
    ...presets,
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify(),
    transformerApplet(),
  ],
})
