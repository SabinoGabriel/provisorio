import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
        blueinfo: "var(--blue-info)",
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
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".topbar": {
          position: "sticky",
          top: "0",
          width: "100%",
          height: theme("spacing.header"),
          backgroundColor: theme("colors.white"),
          borderBottomWidth: theme("borderWidth.hairline"),
          borderBottomColor: "#E8E8E8",
          zIndex: "40",
          transitionProperty: "transform",
          transitionDuration: theme("transitionDuration.200", "200ms"),
          willChange: "transform",
        },
        ".topbar-container": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          paddingLeft: theme("spacing.6"),
          paddingRight: theme("spacing.6"),
        },
        ".topbar-logo": {
          position: "relative",
          display: "block",
          height: theme("spacing.10"),
          width: theme("spacing.logo"),
        },
        ".topbar-nav": {
          display: "flex",
          alignItems: "center",
          gap: theme("spacing.8"),
          fontSize: "0.875rem",
          lineHeight: "2.625rem",
        },
        ".topbar-link": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "500",
          color: "#686D95",
          transitionProperty: "color",
          transitionDuration: theme("transitionDuration.200", "200ms"),
        },
        ".topbar-link:hover": {
          color: "#525a86",
        },
        ".topbar-link-active": {
          fontWeight: "700",
          color: "#4f557a",
        },
      })
    }),
  ],
} satisfies Config;
