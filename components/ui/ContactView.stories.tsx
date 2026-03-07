import type { Meta, StoryObj } from "@storybook/react";
import { ContactView } from "./ContactView";

const meta: Meta<typeof ContactView> = {
  title: "UI/ContactView",
  component: ContactView,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContactView>;

export const Default: Story = {
  args: {
    email: "nhutha98.engr@gmail.com",
    phone: "+84 329274848",
    social: [
      { network: "LinkedIn", username: "nhutha98" },
      { network: "GitHub", username: "nhut-ha-98" },
    ],
  },
};

export const SingleSocial: Story = {
  args: {
    email: "hello@example.com",
    phone: "+1 555 000 0000",
    social: [{ network: "GitHub", username: "example-user" }],
  },
};

export const ManySocials: Story = {
  args: {
    email: "hello@example.com",
    phone: "+1 555 000 0000",
    social: [
      { network: "GitHub", username: "example-user" },
      { network: "LinkedIn", username: "example-user" },
      { network: "Twitter", username: "example-user" },
    ],
  },
};
