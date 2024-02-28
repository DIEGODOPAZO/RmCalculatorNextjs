/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(240 10% 3.9%)",
        },
        foreground: {
          DEFAULT: "hsl(240 10% 3.9%)",
          dark: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(240 10% 3.9%)",
        },
        "card-foreground": {
          DEFAULT: "hsl(240 10% 3.9%)",
          dark: "hsl(0 0% 98%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 100%)",
          dark: "hsl(240 10% 3.9%)",
        },
        "popover-foreground": {
          DEFAULT: "hsl(240 10% 3.9%)",
          dark: "hsl(0 0% 98%)",
        },
        primary: {
          DEFAULT: "hsl(240 5.9% 10%)",
          dark: "hsl(0 0% 98%)",
        },
        "primary-foreground": {
          DEFAULT: "hsl(0 0% 98%)",
          dark: "hsl(240 5.9% 10%)",
        },
        secondary: {
          DEFAULT: "hsl(240 4.8% 95.9%)",
          dark: "hsl(240 3.7% 15.9%)",
        },
        "secondary-foreground": {
          DEFAULT: "hsl(240 5.9% 10%)",
          dark: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "hsl(240 4.8% 95.9%)",
          dark: "hsl(240 3.7% 15.9%)",
        },
        "muted-foreground": {
          DEFAULT: "hsl(240 3.8% 46.1%)",
          dark: "hsl(240 5% 64.9%)",
        },
        accent: {
          DEFAULT: "hsl(240 4.8% 95.9%)",
          dark: "hsl(240 3.7% 15.9%)",
        },
        "accent-foreground": {
          DEFAULT: "hsl(240 5.9% 10%)",
          dark: "hsl(0 0% 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)",
          dark: "hsl(0 62.8% 30.6%)",
        },
        "destructive-foreground": {
          DEFAULT: "hsl(0 0% 98%)",
          dark: "hsl(0 0% 98%)",
        },
        border: {
          DEFAULT: "hsl(240 5.9% 90%)",
          dark: "hsl(240 3.7% 15.9%)",
        },
        input: {
          DEFAULT: "hsl(240 5.9% 90%)",
          dark: "hsl(240 3.7% 15.9%)",
        },
        ring: {
          DEFAULT: "hsl(240 5.9% 10%)",
          dark: "hsl(240 4.9% 83.9%)",
        },
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};
