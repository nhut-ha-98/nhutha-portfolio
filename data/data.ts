import { RenderCvData } from "./rendercv";

export const pageNavigation = {
  title: "Navigate",
  items: [
    { href: "#hero", label: "Overview" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export const data: RenderCvData = {
  cv: {
    name: "Ha Le Nhut",
    headline:
      "Senior Full-Stack Engineer (Java/Spring Boot, React/Next.js, AWS)",
    location: "Phu Lam, Ho Chi Minh City, Vietnam",
    email: "nhutha98.engr@gmail.com",
    photo: null,
    phone: "+84 329274848",
    website: null,
    social_networks: [
      {
        network: "LinkedIn",
        username: "nhutha98",
      },
      {
        network: "GitHub",
        username: "nhut-ha-98",
      },
    ],
    custom_connections: null,
    sections: {
      "About Me": [
        {
          label: "Senior Full-Stack Engineer (6 years)",
          details:
            "Specializing in **Java/Spring Boot**, **React/Next.js**, and **AWS**, with experience across diverse domains and 30+ projects",
        },
        {
          label: "Full-Stack Mastery",
          details:
            "Build end-to-end products from API and data modeling to optimized UIs",
        },
        {
          label: "Architectural Thinking",
          details:
            "Designed scalable monolithic and microservices systems with secure architectures, resilient failure handling, and maintainable code",
        },
        {
          label: "Cloud & Delivery",
          details:
            "Deploy and operate production workloads on AWS with CI/CD and consistent environments",
        },
        {
          label: "Business Translation & Collaboration",
          details:
            "Translate requirements into solutions and collaborate effectively across teams",
        },
        {
          label: "Fast Learner & Problem Solver",
          details:
            "Quickly learn new technologies, solve complex problems pragmatically, and continuously improve solutions",
        },
      ],
      "Primary Skills": [
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
      "Secondary Skills": [
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
        {
          label: "Extra",
          details:
            "Third-party integrations (payments, social login), real-time sync & recovery, transactional workflows, hardware integrations (printers/POS), embedded firmware",
        },
      ],
      "Education and Certifications": [
        {
          institution: "Bach Khoa TPHCM (HCMUT)",
          area: "Electronics and Telecommunication Engineering",
          degree: null,
          date: null,
          start_date: "2016-09",
          end_date: "2020-11",
          location: null,
          summary: null,
          highlights: null,
        },
        {
          institution: "Amazon Web Services (AWS)",
          area: "Certified Solutions Architect – Associate",
          degree: null,
          date: null,
          start_date: "2026-01",
          end_date: null,
          location: null,
          summary: null,
          highlights: null,
        },
      ],
      Experience: [
        {
          company: "Blue Dragon Comunications (Korean IT Outsourcing)",
          position: "Senior Full-Stack Developer",
          date: null,
          start_date: "2024-03",
          end_date: "present",
          location: null,
          summary: null,
          highlights: [
            "Leading development of multiple projects in Spring Boot and React/Next.js",
            "Driving architectural decisions and implementation across the stack (Spring Boot, React/Next.js, data workflows, etc.)",
            "Designing and implementing scalable, maintainable systems with clean abstractions and well-structured monoliths/microservices.",
            "Deploying and operating production workloads on AWS with CI/CD and environment-consistent configuration.",
            "Maintain legacy systems and deliver quick fixes and improvements as needed.",
            "Translating requirements into practical solutions and collaborating effectively across Dev/QA/BA/PM.",
          ],
        },
        {
          company: "UpWork",
          position: "Part-time Freelance Software Developer",
          date: null,
          start_date: "2022-04",
          end_date: "present",
          location: null,
          summary: null,
          highlights: [
            "Delivered multiple projects for clients in Hong Kong, India, and France",
            "Including web and mobile apps, legacy system maintenance, consulting, and rapid prototyping",
            "Worked with Flutter, Node.js, Python, and PHP.",
          ],
        },
        {
          company: "HuyLinhTech + MaiLinhTech (Startup)",
          position: "Full-Stack Developer",
          date: null,
          start_date: "2019-07",
          end_date: "2024-02",
          location: null,
          summary: null,
          highlights: [
            "Lead developer, driving business analysis and application development",
            "Main developer for major projects such as HLSmart, CVMeeting, Xuan Loc Logistics, ...",
            "Worked with Java Servlet, JSP, WebRTC, jQuery, React, Laravel, Flutter, Android and embedded C/C++",
          ],
        },
      ],
      "30+ projects across diverse business domains": [
        {
          name: "MyRoom",
          start_date: "2025-05",
          end_date: null,
          location: null,
          summary:
            "Real-time 3D multiplayer platform for kids (10,000+ daily active users) with Babylon.js 3D client, real-time sync, and scalable AWS infrastructure.",
          highlights: [
            "Built 3D gameplay mechanics with Babylon.js and optimized rendering for stable FPS across devices.",
            "Implemented real-time synchronization and recovery flows (reconnect/desync) to keep multiplayer state consistent.",
            "Used Redis caching for fast leaderboards/ranking reads and reduced database load.",
            "Deployed on AWS with ALB + Auto Scaling (EC2), RDS, S3 + CloudFront, and Secrets Manager. Allow high-traffic handling on marketing campaigns and events.",
          ],
        },
        {
          name: "Tamice / Travity",
          start_date: "2024-11",
          end_date: null,
          location: null,
          summary:
            "B2C travel booking platform integrating many third-party providers; supports 300+ bookings/day with SEO + OLTP-grade transactional workflows.",
          highlights: [
            "Improved SPA SEO and performance using PrerenderIO; reduced page load size from ~100MB to under 5MB with on-demand image resizing, lazy loading and CDN caching.",
            "Integrated multiple providers (tickets/tours/eSIM/Broadway) with retry/fallback and lifecycle logging, follow saga pattern.",
            "Implemented Elasticsearch indexing + sync for fast full-text search with filtering and relevance scoring.",
            "Designed atomic booking flows (payment + provider booking) to handle timeouts without duplicate orders.",
          ],
        },
        {
          name: "SPONGE Ecosystem",
          start_date: "2024-03",
          end_date: null,
          location: null,
          summary:
            "Multi-service platform for franchise operations (internal APIs + admin portals) and centralized review/customer support workflows.",
          highlights: [
            "Built multiple backend services (Spring Boot) and internal APIs for ecosystem and franchise management.",
            "Delivered admin portals and web apps (React/Next.js) for operations teams with role-based access control.",
            "Integrated data workflows for multi-channel review management and customer support.",
            "Massive batch data processing to crawl/sync reviews and customer data across channels.",
          ],
        },
        {
          name: "Lulu Medic Ecosystems",
          start_date: "2025-11",
          end_date: null,
          location: null,
          summary:
            "Healthcare & insurance microservices ecosystem (CMS/PMS/TPA) including claims workflows and partner management.",
          highlights: [
            "Implemented backend services in a microservices architecture with Spring Boot + JPA.",
            "Worked on claims and policy administration workflows with role-based access considerations.",
            "Built web UIs with React/Next.js for CMS and operational tooling.",
            "Deployed and operated services in a Kubernetes-based environment.",
          ],
        },
        {
          name: "Amazon Water Park (Desktop Kiosk/POS)",
          start_date: "2024-06",
          end_date: null,
          location: null,
          summary:
            "Cross-platform desktop app for kiosks, F&B POS, ticketing and retail with payments + hardware (printers/POS) integrations.",
          highlights: [
            "Built production desktop app using Tauri (Rust) + React, covering booking, checkout, and printing workflows.",
            "Implemented hardware communication via USB/Serial/Network APIs; supported thermal, ticket and QR printers.",
            "Integrated payment gateways and credit card POS device APIs for reliable transaction processing.",
            "Customized Tauri Rust layer to enable low-level device capabilities.",
          ],
        },
        {
          name: "CVMeeting / CVLearning / Call4Meeting Ecosystems",
          start_date: "2020-04",
          end_date: "2024-02",
          location: null,
          summary:
            "WebRTC-based meeting, e-learning, and consulting platform built on Janus SFU with web + hybrid mobile clients.",
          highlights: [
            "Supported up to 50 participants with screen sharing, breakout rooms, webinar/learning layouts, and appointment queues.",
            "Implemented recording to IndexedDB, E2EE, and media enhancements (virtual background, audio processing).",
            "Built integrations with Firebase (Auth/FCM/Analytics), Google APIs (Gmail/Calendar), and VietQR payments.",
          ],
        },
      ],
      "Other Projects": [
        {
          label: "POS / F&B",
          details:
            "TableON POS (React + Tauri + Spring Boot; WebSocket; order state machine; inventory; printing).",
        },
        {
          label: "Real-time & media",
          details:
            "Cast2Web (QR/link screen sharing via WebRTC + Janus SFU), StageSplash (artist booking app with chat + payments).",
        },
        {
          label: "ERP / logistics & internal tools",
          details:
            "Xuan Loc Logistics (ERP with Dijkstra-based routing + fee algorithm; ~500MB–1GB images/day processing), NhiXuanTCN (Electron + React + Laravel; private network storage) and smaller business sites/utilities.",
        },
        {
          label: "Healthcare",
          details:
            "Healmate/Hangbang (clinic listing web + mobile webview app; AWS EC2/RDS/S3).",
        },
        {
          label: "HR / marketplace",
          details:
            "DdokDdok (job search platform Next.js + Spring Boot; AWS EC2/RDS/S3).",
        },
        {
          label: "IoT / embedded",
          details:
            "HLSmart smart home system (devices + server + apps; MQTT/networking; embedded firmware).",
        },
        {
          label: "Finance",
          details:
            "4Quants (React, Spring Boot, Python; financial data APIs; charting)",
        },
        {
          label: "Mobile apps",
          details:
            "StageSplash (Flutter, Indian Artist Booking App), Horse Racing App (Flutter, HKJC API), plus smaller websites/demos.",
        },
      ],
      Awards: [
        "[DoiMoiSangTao Awards 2021](https://doimoisangtao.vn/giai-thuong-dmst/2021/8/16/ma-so-n1101-cvmeeting) — Participant (CVMeeting Project) | 2021-04 | doimoisangtao.vn",
      ],
    },
  },
  locale: {
    language: "english",
  },
  design: {
    theme: "classic",
  },
};
