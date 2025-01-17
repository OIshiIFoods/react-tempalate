import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style/index.css`,
        },
      ],
    }),
  ],
})
