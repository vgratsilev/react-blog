import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vite from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        vite({
            exportAsDefault: true,
        }),
        react(),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
