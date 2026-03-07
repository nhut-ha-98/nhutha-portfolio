import type { Meta, StoryObj } from "@storybook/react";
import { SkillSectionsView } from "./SkillSectionsView";

const meta: Meta<typeof SkillSectionsView> = {
  title: "UI/SkillSectionsView",
  component: SkillSectionsView,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkillSectionsView>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: "Primary Skills",
        items: [
          {
            label: "Back-end",
            details:
              "Java, Spring Boot, SQL (MySQL, Postgres), OLTP, system/database design, microservices, Redis, ELK, Kafka",
          },
          {
            label: "Front-end",
            details:
              "React, Next.js, SPA/SSR, SEO & performance, real-time (WebSocket/WebRTC/SSE), React Query, Tailwind, Zustand",
          },
          {
            label: "DevOps / Cloud",
            details:
              "AWS (EC2, ALB, ASG, RDS, S3, CloudFront), CI/CD (GitHub Actions), Terraform, Docker",
          },
        ],
      },
      {
        title: "Secondary Skills",
        items: [
          {
            label: "Back-end",
            details:
              "Node.js, Python, NoSQL (MongoDB, DynamoDB), GraphQL, gRPC, reactive programming",
          },
          {
            label: "Front-end",
            details:
              "Flutter, React Native, Android, Electron, Tauri (Rust), 3D (Babylon.js, Three.js), jQuery",
          },
          {
            label: "DevOps / Cloud",
            details: "GCP, Kubernetes, AWS (ECS, Athena)",
          },
        ],
      },
    ],
  },
};

export const SingleSection: Story = {
  args: {
    sections: [
      {
        title: "Primary Skills",
        items: [
          { label: "Back-end", details: "Java, Spring Boot, SQL" },
          { label: "Front-end", details: "React, Next.js" },
        ],
      },
    ],
  },
};
