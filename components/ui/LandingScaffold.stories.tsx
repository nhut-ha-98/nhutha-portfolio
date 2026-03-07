import type { Meta, StoryObj } from "@storybook/react";
import { LandingScaffold } from "./LandingScaffold";

const meta: Meta<typeof LandingScaffold> = {
  title: "UI/LandingScaffold",
  component: LandingScaffold,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LandingScaffold>;

export const Default: Story = {
  args: {
    children: (
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-20">
        <div className="rounded-2xl border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
          <p className="text-[var(--muted-strong)]">Hero section placeholder</p>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
          <p className="text-[var(--muted-strong)]">
            Skills section placeholder
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-white p-8 shadow-[var(--shadow-card)]">
          <p className="text-[var(--muted-strong)]">
            Projects section placeholder
          </p>
        </div>
      </div>
    ),
  },
};
