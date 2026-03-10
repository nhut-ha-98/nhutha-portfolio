import type { Meta, StoryObj } from "@storybook/react";
import { PageHeaderView } from "./PageHeaderView";

const meta: Meta<typeof PageHeaderView> = {
  title: "UI/PageHeaderView",
  component: PageHeaderView,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageHeaderView>;

export const Default: Story = {
  args: {
    title: "Navigate",
    navItems: [
      { href: "#hero", label: "Overview" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
  },
};
