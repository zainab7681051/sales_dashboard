import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export const base = "/sales_dashboard/";
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? base : '/',
    publicDir: "./public",
    server: {
      port: 2000,
      open: true,
      strictPort: false,
    },
    preview: {
      port: 4000,
      open: true,
      strictPort: false,
    },
    build: {
      sourcemap: true,
      target: 'es2015'
    },
    resolve: {
      alias: {
        "@": "/src"
      },
    },
    css: {},
    plugins: [vue()],
  }
})
