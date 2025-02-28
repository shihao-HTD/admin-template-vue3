import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import fs from 'fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// import VueMacros from 'unplugin-vue-macros'

import { VueRouterAutoImports } from 'unplugin-vue-router'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'

import { VitePWA } from 'vite-plugin-pwa'

import { viteMockServe } from 'vite-plugin-mock'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import I18n from '@intlify/unplugin-vue-i18n/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { cdn } from 'vite-plugin-cdn2'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 过滤element-plus的.mjs的文件，不打包不需要的locales
// 判断，/locales中对应的文件名的.mjs文件作为过滤条件 -> 保留
function externalElementPlusLocales(id: string) {
  // return true -> external, false -> not external
  const localesDir = path.resolve(__dirname, 'locales')
  const localesFiles = fs
    .readdirSync(localesDir)
    .map((file) => file.match(/([\w-]+)\.json/)?.[1] || '')

  if (id.includes('element-plus/dist/locale')) {
    // 获取 id 的basename
    // 判断这个basename在不在上面的localesFiles中
    const basename = path.basename(id, '.mjs')
    return !localesFiles.some((o) => o.toLowerCase() === basename)
  }
  // 其他的外部依赖
  return false
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('=>(vite.config.ts:49) mode', mode)

  const isProd = mode === 'production'

  const isAnalysis = process.env.ANALYSIS === 'true'
  const isSourceMap = process.env.SOURCE_MAP === 'true'

  return {
    build: {
      sourcemap: isSourceMap,
      rollupOptions: {
        external(source) {
          return externalElementPlusLocales(source)
        }
      }
    },

    plugins: [
      VueRouter(),
      vue(),
      vueJsx(),
      // Vue3.3以后，不需要这些新的特性了
      // VueMacros.vite({
      //   plugins: {
      //     vue: vue(),
      //     vueJsx: vueJsx() // 如果需要
      //   }
      // }),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],

        // global imports to register
        imports: [
          // presets
          'vue',
          // 'vue-router'
          VueRouterAutoImports,
          '@vueuse/core'
        ],
        resolvers: [isProd ? [] : ElementPlusResolver()]
      }),
      Components({
        directoryAsNamespace: false,
        collapseSamePrefixes: true,
        resolvers: [isProd ? [] : ElementPlusResolver()]
      }),
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default'
      }),
      VitePWA({
        manifest: {
          name: 'Vite App',
          short_name: 'Vite App',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        registerType: 'autoUpdate'
      }),
      viteMockServe({
        mockPath: 'mock',
        enable: false
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]'
      }),
      I18n({
        include: [path.resolve(__dirname, './locales/**')],
        // 说明:由于配置了modules/i18n.ts中默认为legacy: false
        // 所以禁止修改
        compositionOnly: true,
        jitCompilation: true
      }),
      visualizer({
        open: isAnalysis
      }),
      cdn({
        modules: [
          'vue',
          'vue-demi',
          'pinia',
          'vue-router',
          {
            name: 'element-plus',
            aliases: ['lib', 'es'],
            spare: [
              'https://unpkg.com/element-plus@2.4.2/dist/index.css',
              'https://unpkg.com/element-plus@2.4.2/theme-chalk/dark/css-vars.css'
            ]
          },
          {
            name: 'echarts',
            aliases: ['core', 'renderers', 'charts', 'components', 'features']
          }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0'
    }
  }
})
