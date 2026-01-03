/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/[locale]/**/*.{js,ts,jsx,tsx,mdx}",  
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./messages/**/*.{json,js,ts}",
    "node_modules/shadcn-ui/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
}

export default config
