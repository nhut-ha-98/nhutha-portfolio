import type { Meta, StoryObj } from "@storybook/react";
import { ProjectsView } from "./ProjectsView";

const meta: Meta<typeof ProjectsView> = {
  title: "UI/ProjectsView",
  component: ProjectsView,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

const featuredProjects = [
  {
    name: "MyRoom",
    period: "2025-05 - present",
    summary:
      "Real-time 3D multiplayer platform for kids (10,000+ daily active users) with Babylon.js 3D client, real-time sync, and scalable AWS infrastructure.",
    highlights: [
      "Built 3D gameplay mechanics with Babylon.js and optimized rendering for stable FPS across devices.",
      "Implemented real-time synchronization and recovery flows to keep multiplayer state consistent.",
      "Deployed on AWS with ALB + Auto Scaling (EC2), RDS, S3 + CloudFront.",
    ],
  },
  {
    name: "Tamice / Travity",
    period: "2024-11 - present",
    summary:
      "B2C travel booking platform integrating many third-party providers; supports 300+ bookings/day.",
    highlights: [
      "Improved SPA SEO and performance using PrerenderIO.",
      "Integrated multiple providers (tickets/tours/eSIM/Broadway) with retry/fallback.",
      "Implemented Elasticsearch indexing + sync for fast full-text search.",
    ],
  },
];

const otherProjects = [
  {
    label: "POS / F&B",
    details:
      "TableON POS (React + Tauri + Spring Boot; WebSocket; order state machine; inventory; printing).",
  },
  {
    label: "Real-time & media",
    details:
      "Cast2Web (QR/link screen sharing via WebRTC + Janus SFU), StageSplash.",
  },
  {
    label: "Healthcare",
    details:
      "Healmate/Hangbang (clinic listing web + mobile webview app; AWS EC2/RDS/S3).",
  },
];

export const Default: Story = {
  args: {
    featuredTitle: "30+ projects across diverse business domains",
    otherTitle: "Other Projects",
    featuredProjects,
    otherProjects,
    awards: [
      "[DoiMoiSangTao Awards 2021](https://doimoisangtao.vn/) — Participant (CVMeeting Project) | 2021-04",
    ],
  },
};

export const NoAwards: Story = {
  args: {
    featuredTitle: "Featured Projects",
    otherTitle: "Other Projects",
    featuredProjects,
    otherProjects,
    awards: [],
  },
};

export const FeaturedOnly: Story = {
  args: {
    featuredTitle: "Featured Projects",
    otherTitle: "Other",
    featuredProjects,
    otherProjects: [],
    awards: [],
  },
};
