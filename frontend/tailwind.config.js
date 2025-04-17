export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		colors: {
		  background: "rgb(var(--background))",
		  foreground: "rgb(var(--foreground))",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  