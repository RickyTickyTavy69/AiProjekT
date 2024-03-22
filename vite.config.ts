/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint'
import svgr from "vite-plugin-svgr";
import { analyzer } from "vite-bundle-analyzer";


export default defineConfig({
    // depending on your application, base can also be "/"
    plugins: [ react(), svgr(), analyzer({
        analyzerMode : "server",
        analyzerPort: 3001,
    }),
        eslintPlugin({
            cache: false,
            include: ['./src/**/*.js', './src/**/*.jsx'],
            exclude: [],
        }),
    ],
    resolve: {
        alias: {
            "src": "/src",
        },
    },
    server: {
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000
        port: 3000,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './config/vitest/setupTests.ts'
    },
})