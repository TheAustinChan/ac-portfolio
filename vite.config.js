import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//for deployment to gh-pages, need to add base: "..." don't need the io darnit
// https://vite.dev/config/
//-d stands for directory
export default defineConfig({
  plugins: [react()],
  base: "/ac-portfolio",
})
