import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "UI/SectionHeader",
  component: SectionHeader,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: { title: "Skills" },
};

export const LongTitle: Story = {
  args: { title: "30+ Projects Across Diverse Business Domains" },
};

export const Experience: Story = {
  args: { title: "Experience" },
};
