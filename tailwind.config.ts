/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    1: "hsl(var(--color-accent1) / <alpha-value>)",
                    2: "hsl(var(--color-accent2) / <alpha-value>)"
                },
                bkg: "hsl(var(--color-bkg) / <alpha-value>)",
                content: "hsl(var(--color-content) / <alpha-value>)",
                navbar: "hsl(var(--color-navbar) / <alpha-value>)",
                navContent: "hsl(var(--color-contentNavbar) / <alpha-value>)"
            },
            height:{
                navbar: "50px",
                mainContent: "calc(100% - 50px)"
            }
        },
    },
    plugins: [],
}