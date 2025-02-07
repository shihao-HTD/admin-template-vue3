// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons } from 'unocss'

import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
