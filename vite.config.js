import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/testDeploy2/' // Change 'your-repo-name' to your GitHub repository name\
})
