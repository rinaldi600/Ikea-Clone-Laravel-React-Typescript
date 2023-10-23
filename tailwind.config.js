import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                custom: ['ikea', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                slideShow: {
                    '0%': {
                        transform: 'translateX(0%)',
                    },
                    '50%': {
                        transform: 'translateX(100%)',
                    },
                }
            }
        },
        screens: {
            'ty': {'max': '575px'},
            // => @media (min-width: 640px) { ... }

            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }
    },

    plugins: [forms, require('tailwind-scrollbar-hide')],
};
