import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    backgrounds: {
      default: "warm",
      values: [
        { name: "warm", value: "#f8f2e5" },
        { name: "white", value: "#ffffff" },
        { name: "dark", value: "#1a252a" },
      ],
    },
  },
};

export default preview;
