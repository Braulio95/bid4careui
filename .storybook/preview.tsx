import React from "react";

import { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import customTheme from "../src/style/theme/customTheme";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={customTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
