/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint'
import svgr from "vite-plugin-svgr";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig(({command, mode}) => {

    // this mode is set in scripts with "--mode development"
    // it is possible to use those variables to manage builds, create
    // production and dev builds
    // command can be build or serve depending on if this is dev server or just a build

    return {
        // depending on your application, base can also be "/"
        plugins: mode === "development" && command === "build" ? [
            svgr(),
            analyzer({
                analyzerMode : "server",
                analyzerPort: 3001,
            }),
            eslintPlugin({
                cache: false,
                include: ['./src/**/*.js', './src/**/*.jsx'],
                exclude: [],
            }),
        ]: [
            react(),
            svgr(),
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
            port: 5000,
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './config/vitest/setupTests.ts'
        },
        define: {
            // can add BaseUrl param here while building the app, depending on the mode
            // __DEV__: import.meta.env.DEV,
            // "import.meta" is not available with the "cjs" output format and will be empty [empty-import-meta] - should fix this error
        }
    }
})
