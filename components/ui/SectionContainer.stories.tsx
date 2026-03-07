import type { Meta, StoryObj } from "@storybook/react";
import { SectionContainer } from "./SectionContainer";

const meta: Meta<typeof SectionContainer> = {
  title: "UI/SectionContainer",
  component: SectionContainer,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionContainer>;

export const Default: Story = {
  args: {
    id: "demo-section",
    spacing: "default",
    children: (
      <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
        Section content goes here
      </div>
    ),
  },
};

export const HeroSpacing: Story = {
  args: {
    id: "hero",
    spacing: "hero",
    children: (
      <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
        Hero section content with extra vertical padding
      </div>
    ),
  },
};
