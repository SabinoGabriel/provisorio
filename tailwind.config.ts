import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        hairline: '0.0625rem',
      },
      spacing: {
            header: '4rem', 
            logo: '10rem', 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primaryhover: "var(--primary-hover)",
        blue: "var(--blue)",
        bluehover: "var(--blue-hover)",
        bluestrong: "var(--blue-strong)",
        bluesoft: "var(--blue-soft)",
        bluemiddle: "var(--blue-middle)",
        input: "var(--input)",
        borderbutton: "var(--border-button)",
        destructive: "var(--destructive)",
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          150: "var(--gray-150)",
          200: "var(--gray-200)",
          250: "var(--gray-250)",
          300: "var(--gray-300)",
          350: "var(--gray-350)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          550: "var(--gray-550)",
          600: "var(--gray-600)",
          650: "var(--gray-650)",
          700: "var(--gray-700)",
          750: "var(--gray-750)",
          800: "var(--gray-800)",
          850: "var(--gray-850)",
          900: "var(--gray-900)",
        }
      },
      maxWidth: {
        'email-form': '37.5rem',
        'auth-form': '50rem', // 800px
      },
      minHeight: {
        'email-form': '25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
