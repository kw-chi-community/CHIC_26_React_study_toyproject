import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 프론트엔드에서 /api로 시작하는 요청을 보내면 아래 target 주소로 전달합니다.
      '/api': {
        target: 'https://www.aladin.co.kr/ttb/api',
        changeOrigin: true,
        // 요청 주소에서 '/api' 부분을 삭제하고 전달합니다.
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})