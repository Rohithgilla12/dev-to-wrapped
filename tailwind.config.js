const path = require("path");
const fromRoot = (p) => path.join(__dirname, p);

module.exports = {
  // the NODE_ENV thing is for https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  mode: process.env.NODE_ENV ? "jit" : undefined,
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === "production",
    content: [fromRoot("./app/**/*.+(js|ts|tsx|mdx|md)")],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
