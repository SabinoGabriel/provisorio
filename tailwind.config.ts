import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--bg-primary)",
        primaryhover: "var(--bg-primary-hover)",
        secondary: "var(--secondary)",
        input: "var(--bg-input)",
        strokeinput: "var(--stroke-input)",
        destrutive: "var(--destrutive)",
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
