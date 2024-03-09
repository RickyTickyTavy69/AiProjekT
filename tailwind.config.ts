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
                gray: '#E5E7EB'
            },
            height:{
                navbar: "50px",
                mainContent: "calc(100% - 50px)"
            }
        },
    },
    plugins: [],
}