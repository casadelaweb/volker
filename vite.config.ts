import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  build: {
    assetsDir: 'assets',
    outDir: 'public',
    minify: 'esbuild',
    cssCodeSplit: false,
    cssMinify: 'esbuild',
    emptyOutDir: false,
    copyPublicDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames(assetInfo) {
          let path: string = 'assets/others/[name].[ext]'
          const extType: string = assetInfo.name.split('.').at(1)
          const isIconfont: boolean = assetInfo.name.includes('iconfont')

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType) && !isIconfont) {
            path = `assets/img/[name].[ext]`
          }
          if (/ttf|woff|woffs|eot/i.test(extType) && !isIconfont) {
            path = `assets/fonts/[name].[ext]`
          }
          if (/css|scss|sass|less/i.test(extType)) {
            path = `assets/styles/main.[ext]`
          }
          if (isIconfont && /ttf|woff|woffs|eot|svg/i.test(extType)) {
            path = 'assets/iconfonts/[name].[ext]'
          }
          if (/ts|js|tsx|jsx/i.test(extType)) {
            path = `assets/scripts/main.[ext]`
          }

          return path
        },
      }
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      'src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `https://volker.ninthtown.ru/api/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
