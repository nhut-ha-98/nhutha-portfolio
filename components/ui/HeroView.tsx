import { AvatarView } from "@/components/ui/AvatarView";
import { HeroContactLinks } from "@/components/ui/HeroContactLinks";
import type { AboutMe, Socialnetwork } from "@/data/rendercv";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { AboutMeSection } from "./AboutMeSection";
const highlightBadges = [
  { label: "Java", icon: "devicon:java", color: "#007396" },
  {
    label: "Spring Boot",
    icon: "simple-icons:springboot",
    color: "#6DB33F",
  },
  { label: "React", icon: "devicon:react", color: "#61DAFB" },
  { label: "Next.js", icon: "devicon:nextjs", color: "#111111" },
  { label: "AWS", icon: "logos:aws", color: "#FF9900" },
] as const;

const certificationLogos = [
  {
    label: "Back Khoa TP.HCM",
    src: "/back-khoa-logo.webp",
    width: 68,
    height: 68,
  },
  {
    label: "AWS Certified Solutions Architect Associate",
    src: "/saa-c03.png",
    width: 68,
    height: 68,
  },
] as const;

interface HeroViewProps {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  photo?: string | null;
  social: Socialnetwork[];
  about: AboutMe[];
}

export function HeroView({
  name,
  headline,
  location,
  email,
  phone,
  photo,
  social,
  about,
}: HeroViewProps) {
  return (
    <div className="flex flex-col items-center space-y-8 text-center">
      {/* ── Identity ── */}
      <div className="flex flex-col items-center gap-4">
        <AvatarView name={name} src={photo} size="lg" />
        <div className="space-y-1">
          <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            {name}
          </h1>
          <p className="text-balance text-lg font-semibold text-[var(--ink-soft)] sm:text-xl">
            {headline}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
            {location}
          </p>
        </div>
      </div>

      {/* ── Actions ── */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <HeroContactLinks email={email} phone={phone} social={social} />
        <a
          href="/Ha-Le-Nhut-CV-2026-03.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-xs font-bold text-white shadow-[0_4px_14px_color-mix(in_srgb,var(--accent)_38%,transparent)] transition duration-200 hover:brightness-110 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <Icon
            icon="mdi:download-outline"
            aria-hidden="true"
            className="h-3.5 w-3.5"
          />
          Download CV
        </a>
      </div>

      {/* ── Credentials ── */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <ul
          className="flex flex-wrap items-center gap-4"
          aria-label="Certifications"
        >
          {certificationLogos.map((logo) => (
            <li key={logo.label}>
              <Image
                src={logo.src}
                alt={logo.label}
                title={logo.label}
                width={logo.width}
                height={logo.height}
                className="h-auto w-auto object-contain"
              />
            </li>
          ))}
        </ul>

        <span
          className="h-10 w-px self-center bg-[var(--line)]"
          aria-hidden="true"
        />

        <ul
          className="flex flex-wrap gap-2"
          aria-label="Highlighted technologies"
        >
          {highlightBadges.map((badge) => (
            <li key={badge.label}>
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink-soft)] transition hover:border-[var(--accent)]"
                title={badge.label}
                aria-label={badge.label}
              >
                <Icon
                  icon={badge.icon}
                  aria-hidden="true"
                  className="h-5 w-5"
                  style={badge.color ? { color: badge.color } : undefined}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── About / Stats / Timeline ── */}
      <AboutMeSection featureItems={about} />
    </div>
  );
}
