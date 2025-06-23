import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: 'index.js',
            name: 'CommonUtils',
            fileName: (format) => `common-utils.${format}.js`,
            formats: ['es', 'umd']
        },
        outDir: 'dist',
        sourcemap: true,
        emptyOutDir: true
    }
})
