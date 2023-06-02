/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "376px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      backgroundColor: {
        background_color: "var(--background-color)",
        card_color: "var(--card-color)",
        button_color: "var(--button-color)",
        button_hover: "var(--button-hover)",
        tag_color: "var(--tag-color)",
        header_color: "var(--header-color)",
        border_color: "var(--border-color)",
      },
      textColor: {
        text_color: "var(--text-color)",
        title_color: "var(--title-color)",
        button_color: "var(--button-color)",
      },
      borderColor: {
        button_color: "var(--button-color)",
        border_color: "var(--border-color)",
      },
      shadowColor: {
        button_color: "var(--button-color)",
      },
      fontFamily: {
        title: ["Lora"],
        text: ["MacPawFixel"],
      },
      animation: {
        shine: "shine 1.5s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },

  plugins: [],
};

module.exports = config;
