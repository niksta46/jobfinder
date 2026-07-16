/*
  postcss.config.js
  Purpose: Configures PostCSS for Vite's CSS processing pipeline.
  tailwindcss plugin: Transforms @tailwind directives into actual CSS.
  autoprefixer plugin: Adds vendor prefixes for cross-browser support.
  How it works: Vite auto-detects this file. No manual setup needed.
  Without it: @tailwind base/components/utilities in index.css would not compile.
*/

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
