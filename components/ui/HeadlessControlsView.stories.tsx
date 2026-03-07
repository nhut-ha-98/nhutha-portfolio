import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HeadlessControlsView } from "./HeadlessControlsView";

const meta: Meta<typeof HeadlessControlsView> = {
  title: "UI/HeadlessControlsView",
  component: HeadlessControlsView,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  args: {
    onToggleSection: fn(),
    onProjectDensityChange: fn(),
    onToggleAwards: fn(),
    onReset: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof HeadlessControlsView>;

export const AllEnabled: Story = {
  args: {
    sections: [
      { key: "skills", label: "Skills", enabled: true },
      { key: "experience", label: "Experience", enabled: true },
      { key: "projects", label: "Projects", enabled: true },
    ],
    projectDensity: "full",
    showAwards: true,
  },
};

export const SomeSectionsOff: Story = {
  args: {
    sections: [
      { key: "skills", label: "Skills", enabled: true },
      { key: "experience", label: "Experience", enabled: false },
      { key: "projects", label: "Projects", enabled: true },
    ],
    projectDensity: "compact",
    showAwards: false,
  },
};

export const AllDisabled: Story = {
  args: {
    sections: [
      { key: "skills", label: "Skills", enabled: false },
      { key: "experience", label: "Experience", enabled: false },
      { key: "projects", label: "Projects", enabled: false },
    ],
    projectDensity: "compact",
    showAwards: false,
  },
};
