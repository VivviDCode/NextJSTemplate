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
        mylitebordergray: "#E2E8F0",
        mybannerbg: "#303030",
        mylightbg: "#F7F8FA",
        mygray: "#5B5B5B",
        mygraybutton: "#393939",
        myblack: "#252525",
        mythemegreen: "#DCFAEE",
        mygreen: "#3BB77E",
        mygreenlite: "#D0FFEB",
        myhalfwhite: "#F1F1F1",
        myborderlite: "#F5F5F5",
        mylightgray: "#9C9C9C",
        myblue: "#3C9AFB",
        darkgreencatbg: "#13713F",
      },
    },
  },
  plugins: [],
}
