module.exports = {
  mode: "jit",  // JIT stands for Just in Time Compiler and makes the Build and Startup so fast.
                // at the moment JIT is just in the preview but works like a charme.
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
