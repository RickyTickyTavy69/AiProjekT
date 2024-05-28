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
                white: '#dec8c8',
                black: '#18181B',
                gray: '#E5E7EB',
                error: '#f44646',
                warning: '#f4a646',
                overlay_color: 'rgba(24,24,27,0.6)',
                overlay_color_bright: 'rgba(24,24,27,0.6)',
                modal_color_dark: '#44444a',
                modal_color: '#b39f9f',
            },
            height: {
                navbar: "80px",
                mainContent: "calc(100% - 80px)"
            },
            keyframes: {
                blink: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                blink_terminal: 'blink 1s linear infinite',
            },
        },
        plugins: [],
    }
}
