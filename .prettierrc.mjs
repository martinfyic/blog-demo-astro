/** @type {import("prettier").Config} */
export default {
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  jsxSingleQuote: true,
  arrowParens: "avoid",
  semi: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};