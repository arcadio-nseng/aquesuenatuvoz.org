/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#c70d6a',
                secondary: '#7f3a0b',
                tertiary: '#717038',
                surface: '#b66a16',
                gradient: 'linear-gradient(180deg, #F17817 25%, #F2821B 30.14%, #F6A429 49.23%, #F9BC32 67.58%, #FBCA38 84.47%, #FCD03B 98.42%)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require("flowbite/plugin")],
}
