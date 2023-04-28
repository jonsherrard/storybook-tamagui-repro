import type { Preview } from "@storybook/react";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui/";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <Story />
      </TamaguiProvider>
    ),
  ],
};

export default preview;
