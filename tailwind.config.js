/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                darkMain: '#050505', 
                lightMain:"#fff"
            },
            screens:{
                xs:"500px"
            }
            
        },
    },
    plugins: [],
};
