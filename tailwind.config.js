module.exports = {
  content: [
    "./src/**/*.js",
    "./public/index.html",
    // Add more paths as needed for your project structure
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.js",
      "./public/index.html",
      // Add more paths as needed for your project structure
    ],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
