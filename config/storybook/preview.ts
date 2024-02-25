import type { Preview } from "@storybook/react";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import "../../src/app/main.css";
import 'tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator("Dark")],
};

export default preview;
