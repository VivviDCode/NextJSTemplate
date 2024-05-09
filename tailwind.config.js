/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mygraytable: "#F7F8FA",
        mygreen: "#34C759",
        mygray: "#393939",
        myblack: "#1E201F",
        disabletext: "#737791",
        disablelighttext: "#A7AEB1",
        pending: "#E8F0FF",
        Sold: "#FFF3E8",
        Active: "#DCFAEE",
        pendingText: "#6C97DE",
        SoldText: "#D1A941",
        ActiveText: "#6FB75D",
        hoverGreen: "#DCFAEE",
        backgroundcol: "#DCFAEE",
      },
    },
  },
  plugins: [],
}
