export type SocialNetwork = {
  network: string;
  username: string;
  url?: string;
};

export type TextEntry = string;

export type EducationEntry = {
  institution: string;
  area: string;
  degree: string;
  start_date: string; // ISO 8601 date string (YYYY-MM)
  end_date?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
};

export type ExperienceEntry = {
  company: string;
  position: string;
  start_date: string; // ISO 8601 date string (YYYY-MM)
  end_date?: string; // Use "present" when still active
  location?: string;
  summary?: string;
  highlights?: string[];
};

export type ProjectEntry = {
  name: string;
  start_date?: string;
  end_date?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
};

export type SkillEntry = {
  label: string;
  details: string;
};

export type BulletEntry = {
  bullet: string;
};

export type CvSections = {
  summary: TextEntry[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  skills: SkillEntry[];
  selected_honors: BulletEntry[];
};

export type Cv = {
  name: string;
  headline?: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  social_networks?: SocialNetwork[];
  sections: CvSections;
};

export type RenderCvDesign = {
  theme: string;
  page?: {
    size?: string;
    show_footer?: boolean;
    show_top_note?: boolean;
  };
  colors?: {
    body?: string;
    headline?: string;
    section_titles?: string;
    links?: string;
  };
};

export type RenderCvLocale = {
  language: string;
  last_updated?: string;
  present?: string;
  month_abbreviations?: string[];
};

export type RenderCvSettings = {
  current_date: "today" | string;
  render_command?: {
    output_folder: string;
    pdf_path?: string;
    markdown_path?: string;
  };
};

export type RenderCvData = {
  cv: Cv;
  design?: RenderCvDesign;
  locale?: RenderCvLocale;
  settings?: RenderCvSettings;
};

export const renderCvData: RenderCvData = {
  cv: {
    name: "Nguyen Huu Thai Anh",
    headline: "Full-Stack Engineer focused on experiential web platforms",
    location: "Ho Chi Minh City, Vietnam",
    email: "thai.anh@example.com",
    phone: "+84 912 345 678",
    website: "https://nhutha.dev",
    social_networks: [
      {
        network: "GitHub",
        username: "nhutha",
        url: "https://github.com/nhutha",
      },
      {
        network: "LinkedIn",
        username: "nhutha",
        url: "https://www.linkedin.com/in/nhutha",
      },
      {
        network: "Twitter",
        username: "@thai.builds",
        url: "https://x.com/thai.builds",
      },
    ],
    sections: {
      summary: [
        "Engineer blending product intuition with performant systems. Comfortable owning greenfield work, tightening observability, and coaching teams toward sustainable delivery.",
        "Specialize in experience-heavy Next.js surfaces, API craftsmanship, and deployment pipelines that keep iteration loops fast.",
      ],
      experience: [
        {
          company: "Orbit Labs",
          position: "Senior Frontend Engineer",
          start_date: "2023-02",
          end_date: "present",
          location: "Remote",
          summary:
            "Lead design system and motion strategy for data-heavy creator tooling.",
          highlights: [
            "Piloted design tokens and prebuilt primitives that now power 12+ internal products.",
            "Introduced streamed chart primitives that cut render cost by 35% on analytics boards.",
            "Partnered with product to bake accessibility audits into every release train.",
          ],
        },
        {
          company: "Northwind Collective",
          position: "Full-Stack Engineer",
          start_date: "2020-03",
          end_date: "2023-01",
          location: "Singapore",
          summary:
            "Owned checkout and merchandising platforms for regional commerce brand.",
          highlights: [
            "Rebuilt checkout funnel that increased paid conversion by 14% across SEA markets.",
            "Moved CI/CD to GitHub Actions with automated smoke suites, trimming deploy time by 20 minutes.",
            "Introduced TypeScript-first API contracts shared across mobile and web apps.",
          ],
        },
        {
          company: "Freelance Studio",
          position: "Product Engineer",
          start_date: "2018-05",
          end_date: "2020-02",
          location: "Ho Chi Minh City, Vietnam",
          summary:
            "Partnered with agencies to craft bespoke marketing sites and event microsites.",
          highlights: [
            "Delivered 25+ high-polish marketing experiences using Next.js, Contentful, and custom shaders.",
            "Established component libraries for two agencies, reducing build time for new pages by half.",
          ],
        },
      ],
      projects: [
        {
          name: "Pulseboard Analytics",
          start_date: "2024-04",
          end_date: "present",
          summary:
            "Real-time telemetry dashboard with tenant-aware theming and live drilldowns.",
          highlights: [
            "Streams WebSocket payloads into edge caches to serve sub-200ms insight refreshes.",
            "Composable card system lets ops teams spin up new metric boards without code.",
          ],
        },
        {
          name: "Atlas Commerce Kit",
          start_date: "2023-01",
          end_date: "2023-11",
          summary:
            "Composable storefront starter built for boutique retailers.",
          highlights: [
            "Baked in checkout-ready flow, CMS-driven landing templates, and marketing automation hooks.",
            "Packaged as a template repo adopted by 7+ Shopify agencies for custom builds.",
          ],
        },
        {
          name: "Waypoint Docs",
          start_date: "2022-05",
          end_date: "2022-12",
          summary:
            "Markdown-first knowledge base with AI-assisted semantic search.",
          highlights: [
            "Vector embeddings keep topic recall contextual while respecting granular role ACLs.",
            "Blended server actions with ISR to keep documentation snappy without cache bust headaches.",
          ],
        },
      ],
      education: [
        {
          institution: "Ho Chi Minh City University of Technology",
          area: "Computer Engineering",
          degree: "BEng",
          start_date: "2013-09",
          end_date: "2017-06",
          location: "Ho Chi Minh City, Vietnam",
          summary:
            "Focused on embedded systems and human-computer interaction.",
          highlights: [
            "Capstone: Mixed reality installation exploring gesture-driven storytelling.",
            "Research assistant for Advanced UI Lab, publishing two regional conference papers.",
          ],
        },
      ],
      skills: [
        {
          label: "Frontend",
          details:
            "Next.js, React Server Components, Framer Motion, Tailwind CSS",
        },
        {
          label: "Backend",
          details: "Node.js, tRPC, PostgreSQL, Prisma, Redis",
        },
        { label: "DevOps", details: "Docker, GitHub Actions, Fly.io, Vercel" },
        {
          label: "Collaboration",
          details: "Design tokens, Storybook, Product discovery facilitation",
        },
      ],
      selected_honors: [
        {
          bullet:
            "2024 — Orbit Labs Builder Award for accelerating design system adoption.",
        },
        {
          bullet:
            "2022 — Singapore Young Technologists Fellowship for commerce innovation.",
        },
        { bullet: "2017 — ACM Asia Student Project Showcase finalist." },
      ],
    },
  },
  design: {
    theme: "classic",
    page: {
      size: "a4",
      show_footer: true,
      show_top_note: true,
    },
    colors: {
      body: "rgb(24, 24, 27)",
      headline: "rgb(12, 74, 110)",
      section_titles: "rgb(8, 47, 73)",
      links: "rgb(2, 132, 199)",
    },
  },
  locale: {
    language: "english",
    last_updated: "Last updated",
    present: "present",
    month_abbreviations: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  settings: {
    current_date: "today",
    render_command: {
      output_folder: "rendercv_output",
      pdf_path: "rendercv_output/nguyen_huu_thai_anh_cv.pdf",
      markdown_path: "rendercv_output/nguyen_huu_thai_anh_cv.md",
    },
  },
};
