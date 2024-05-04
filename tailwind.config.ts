/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                black: '#18181B',
                gray: '#E5E7EB',
                overlay_color: 'rgba(24,24,27,0.6)',
                overlay_color_bright: 'rgba(24,24,27,0.6)'
            },
            height:{
                navbar: "80px",
                mainContent: "calc(100% - 80px)"
            }
        },
    },
    plugins: [],
}