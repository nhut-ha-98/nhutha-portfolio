import type { Meta, StoryObj } from "@storybook/react";
import { SectionShell } from "./SectionShell";

const meta: Meta<typeof SectionShell> = {
  title: "UI/SectionShell",
  component: SectionShell,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SectionShell>;

export const Default: Story = {
  args: {
    title: "Skills",
    children: (
      <div className="rounded-2xl border border-[var(--line)] bg-white p-6 text-sm text-[var(--muted-strong)]">
        Section body content rendered below the header
      </div>
    ),
  },
};

export const LongTitle: Story = {
  args: {
    title: "30+ Projects Across Diverse Business Domains",
    children: (
      <div className="rounded-2xl border border-[var(--line)] bg-white p-6 text-sm text-[var(--muted-strong)]">
        Project cards go here
      </div>
    ),
  },
};
