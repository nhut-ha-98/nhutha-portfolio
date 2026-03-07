import type { Meta, StoryObj } from "@storybook/react";
import { HeroView } from "./HeroView";

const meta: Meta<typeof HeroView> = {
  title: "UI/HeroView",
  component: HeroView,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeroView>;

const defaultArgs = {
  name: "Ha Le Nhut",
  headline: "Senior Full-Stack Engineer (Java/Spring Boot, React/Next.js, AWS)",
  location: "Phu Lam, Ho Chi Minh City, Vietnam",
  email: "nhutha98.engr@gmail.com",
  phone: "+84 329274848",
  photo: null,
  social: [
    { network: "LinkedIn", username: "nhutha98" },
    { network: "GitHub", username: "nhut-ha-98" },
  ],
  about: [
    {
      label: "Senior Full-Stack Engineer (6 years)",
      details:
        "Specializing in Java/Spring Boot, React/Next.js, and AWS, with experience across diverse domains and 30+ projects",
    },
    {
      label: "Full-Stack Mastery",
      details:
        "Build end-to-end products from API and data modeling to optimized UIs",
    },
    {
      label: "Cloud & Delivery",
      details:
        "Deploy and operate production workloads on AWS with CI/CD and consistent environments",
    },
  ],
};

export const Default: Story = {
  args: defaultArgs,
};

export const MinimalSocial: Story = {
  args: {
    ...defaultArgs,
    social: [{ network: "GitHub", username: "nhut-ha-98" }],
  },
};

export const SingleAboutItem: Story = {
  args: {
    ...defaultArgs,
    about: [
      {
        label: "Senior Full-Stack Engineer",
        details: "6 years of full-stack experience",
      },
    ],
  },
};
