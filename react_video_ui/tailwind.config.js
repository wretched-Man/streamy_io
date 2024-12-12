/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                'videoCard' : '250px 4rem',
            },
            screens: {
                'mobile' : '600px',
            },
            backgroundImage: {
                'home-hero-image': "url('public/pexels-olly-3811867.jpg')"
            }
        },
    },
    plugins: [],
}

