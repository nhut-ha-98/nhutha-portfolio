import type { Meta, StoryObj } from "@storybook/react";
import { ExperienceView } from "./ExperienceView";

const meta: Meta<typeof ExperienceView> = {
  title: "UI/ExperienceView",
  component: ExperienceView,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ExperienceView>;

export const Default: Story = {
  args: {
    experienceTitle: "Experience",
    educationTitle: "Education & Certifications",
    experiences: [
      {
        title: "Blue Dragon Communications",
        subtitle: "Senior Full-Stack Developer",
        period: "2024-03 - present",
        highlights: [
          "Leading development of multiple projects in Spring Boot and React/Next.js",
          "Driving architectural decisions and implementation across the stack",
          "Deploying and operating production workloads on AWS with CI/CD",
        ],
      },
      {
        title: "UpWork",
        subtitle: "Part-time Freelance Software Developer",
        period: "2022-04 - present",
        highlights: [
          "Delivered multiple projects for clients in Hong Kong, India, and France",
          "Worked with Flutter, Node.js, Python, and PHP",
        ],
      },
    ],
    education: [
      {
        institution: "Bach Khoa TPHCM (HCMUT)",
        area: "Electronics and Telecommunication Engineering",
        period: "2016-09 - 2020-11",
      },
      {
        institution: "Amazon Web Services (AWS)",
        area: "Certified Solutions Architect – Associate",
        period: "2026-01",
      },
    ],
  },
};

export const SingleExperience: Story = {
  args: {
    experienceTitle: "Experience",
    educationTitle: "Education",
    experiences: [
      {
        title: "Acme Corp",
        subtitle: "Senior Engineer",
        period: "2023-01 - present",
        highlights: [
          "Led the development of a new microservices architecture",
          "Reduced infrastructure costs by 40%",
        ],
      },
    ],
    education: [
      {
        institution: "State University",
        area: "Computer Science",
        period: "2015-09 - 2019-06",
      },
    ],
  },
};
