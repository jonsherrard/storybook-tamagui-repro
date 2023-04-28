import type { Meta, StoryObj } from "@storybook/react";
import { Stack, SizableText } from "tamagui";

const Example = () => {
  return (
    <Stack>
      <SizableText>Hello</SizableText>
    </Stack>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Example> = {
  title: "Example/Simple Component that works",
  component: Example,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Example",
  },
};
