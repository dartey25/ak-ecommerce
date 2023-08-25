import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        rock: ["The Fontman", ...defaultTheme.fontFamily.sans],
        midnight: [
          "Midnight TTF",
          "Midnight WOFF",
          "Midnight OTF",
          ...defaultTheme.fontFamily.sans,
        ],
        peculiar: ["Peculiar TTF", ...defaultTheme.fontFamily.sans],
        futura: ["Futura PT Book", ...defaultTheme.fontFamily.sans],
        futura_medium: ["Futura PT", ...defaultTheme.fontFamily.sans],
        futura_bold: ["Futura PT Demi", ...defaultTheme.fontFamily.sans],
        futura_black: ["Futura PT Cond Extra", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: "1rem",
        base: "1.25rem",
        lg: "1.5rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        white: "#e3e3e3",
        background: {
          ...colors.zinc,
          DEFAULT: colors.zinc[900],
          foreground: "#e3e3e3",
        },
        foreground: {
          "50": "#f8f7f4",
          "100": "#eeeee6",
          "200": "#dddbcb",
          "300": "#c3bea5",
          "400": "#afa788",
          "500": "#9f9270",
          "600": "#928364",
          "700": "#7a6b54",
          "800": "#645848",
          "900": "#52493c",
          "950": "#2b261f",
          muted: "#817d71",
          // DEFAULT: "#edece3",
          DEFAULT: "#f9f4da",
        },
        primary: {
          ...colors.violet,
          DEFAULT: colors.violet[300],
          foreground: "#fff",
          // hover: "var(--primary-hover)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          ...colors.neutral,
          DEFAULT: colors.neutral[400],
        },
        crimson: {
          "50": "#feedec",
          "100": "#fddfdd",
          "200": "#fdc7c4",
          "300": "#fba39d",
          "400": "#fa7066",
          "500": "#fa3d33",
          "600": "#e33026",
          "700": "#ce0d03",
          "800": "#a90f04",
          "900": "#8c130d",
          "950": "#450703",
          DEFAULT: "#fa3d33",
        },
        accent: {
          ...colors.red,
          DEFAULT: colors.red[500],
          foreground: "#fff",
          // hover: "var(--primary-hover)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
} satisfies Config;
