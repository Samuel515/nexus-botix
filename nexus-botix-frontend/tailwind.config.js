import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract, 
  },
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#E9991C',
        'primary-blue': '#1AA4B7',
        'custom-gray': '#0F2123',
        'custom-blue': '#98E1EB',
        'light-yellow': '#F8D870',
        'whitebg': '#F5F5F5',
        'whatsapp-green': '#25D3661A',
        'facebook-blue': '#00B2FF1A',
        'instagram-red': '#E4405F1A',
        'custom-black': '#0F0F0F',
        'custom-white-bg': '#F9FAFB',
      },
      backgroundImage: {
        'main-bg': "url('/main-bg.svg')",
        'r-main-bg': "url(/r-main-bg.svg)"
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      },
    screens,
    fontSize,
  },
  plugins: [
    fluid
  ],
};
