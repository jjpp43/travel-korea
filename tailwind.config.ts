import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'pop-up': 'popUp 0.5s ease-out forwards',
      },
      fontSize: {
        '10xl': '9rem', 
        '11xl': '10rem', 
      },
      fontFamily: {
        crimson: ['"Crimson Text Variable"', 'serif'],
        heebo: ['"Heebo Variable"', 'sans-serif'],
        archivo: ['"Archivo Variable"', 'sans-serif'],
        cardo: ['"Cardo Variable"', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
