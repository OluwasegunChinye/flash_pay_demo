/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './App.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
        './screens/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            primary100: '#EFF5FF',
            primary200: '#79ACF7',
            primary300: '#2303E8',
            primary400: '#160093',
            dark: '#0A0A0A',
            gray: '#9CA3AF',
            success: '#22C55E',
            white: '#FFFFFF',
            danger: '#f80202',
        },
    },
    plugins: [],
};
