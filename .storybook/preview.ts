import type { Preview } from "@storybook/react";
import 'loki/configure-react';
import "../src/app/main.css";

// import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  /* decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  })] */
};

export default preview;
