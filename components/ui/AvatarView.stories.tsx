import type { Meta, StoryObj } from "@storybook/react";
import { AvatarView } from "./AvatarView";

const meta: Meta<typeof AvatarView> = {
  title: "UI/AvatarView",
  component: AvatarView,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AvatarView>;

export const Large: Story = {
  args: { name: "Ha Le Nhut", size: "lg" },
};

export const Medium: Story = {
  args: { name: "Ha Le Nhut", size: "md" },
};

export const Small: Story = {
  args: { name: "Ha Le Nhut", size: "sm" },
};

export const SingleWordName: Story = {
  args: { name: "Nhut", size: "lg" },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <AvatarView name="Ha Le Nhut" size="sm" />
      <AvatarView name="Ha Le Nhut" size="md" />
      <AvatarView name="Ha Le Nhut" size="lg" />
    </div>
  ),
};
