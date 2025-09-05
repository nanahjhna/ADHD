import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // @ → src 폴더
            '@pages': path.resolve(__dirname, './src/pages'), // @pages → src/pages 폴더
        },
    },
})
