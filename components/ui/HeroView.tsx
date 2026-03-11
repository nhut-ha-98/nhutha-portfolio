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
  const featureItems = about;

  return (
    <div className="space-y-10">
      <article className="space-y-6">
        <div className="flex items-center gap-5">
          <AvatarView name={name} src={photo} size="lg" />
          <h1 className="text-balance text-4xl font-black leading-tight tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            {name}
          </h1>
        </div>
        <p className="text-balance text-lg font-semibold text-[var(--ink-soft)] sm:text-xl">
          {headline}
        </p>
        {/* <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
          {location}
        </p> */}

        <HeroContactLinks email={email} phone={phone} social={social} />

        <div className="flex gap-x-20 items-center flex-wrap">
          <ul
            className="flex flex-wrap items-center gap-5"
            aria-label="Certification logos"
          >
            {certificationLogos.map((logo) => (
              <li key={logo.label}>
                <span
                  className="inline-flex items-center justify-center rounded-xl "
                  title={logo.label}
                  aria-label={logo.label}
                >
                  <Image
                    src={logo.src}
                    alt={logo.label}
                    width={logo.width}
                    height={logo.height}
                    className="h-auto w-auto object-contain"
                  />
                </span>
              </li>
            ))}
          </ul>
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Highlighted technologies"
          >
            {highlightBadges.map((badge) => (
              <li key={badge.label}>
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink-soft)] transition hover:border-[var(--accent)]"
                  title={badge.label}
                  aria-label={badge.label}
                >
                  <Icon
                    icon={badge.icon}
                    aria-hidden="true"
                    className="h-6 w-6"
                    style={badge.color ? { color: badge.color } : undefined}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <AboutMeSection featureItems={featureItems} />
    </div>
  );
}
