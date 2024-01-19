import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/*': path.resolve(__dirname, './src/*'),
			'@components': path.resolve(__dirname, './src/components'),
			'@screens': path.resolve(__dirname, './src/screens'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@contexts': path.resolve(__dirname, './src/contexts'),
			'@redux': path.resolve(__dirname, './src/redux'),
			'@mocks': path.resolve(__dirname, './src/mocks'),
			'@constants': path.resolve(__dirname, './src/constants')
		}
	}
})
