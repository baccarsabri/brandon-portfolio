import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
    },
    screens: {
     sm: "640px",
     md: "768px",
     lg: "960px",
     xl: "1440px",
    },
    fontFamily:{
      poppins: 'var(--font-poppins)'
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#1C1F55',
          text:'#212323'
        },
        secondary:{
          DEFAULT:'#56D59C',
          light:'#E9F8F4'
        }
    
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config