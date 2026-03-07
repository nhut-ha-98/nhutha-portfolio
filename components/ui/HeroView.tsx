import { AvatarView } from "@/components/ui/AvatarView";
import type { AboutMe, Socialnetwork } from "@/data/rendercv";

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

function socialUrl(network: string, username: string) {
  const key = network.toLowerCase();
  if (key.includes("linkedin"))
    return `https://www.linkedin.com/in/${username}`;
  if (key.includes("github")) return `https://github.com/${username}`;
  return "#";
}

function cleanRichText(text: string) {
  return text.replaceAll("**", "");
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
  const featureItems = about.slice(0, 3);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
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
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
          {location}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {email}
          </a>
          <a
            href={`tel:${phone.replaceAll(" ", "")}`}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 text-sm font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {phone}
          </a>
        </div>

        <ul className="flex flex-wrap gap-3" aria-label="Social profiles">
          {social.map((entry) => (
            <li key={`${entry.network}-${entry.username}`}>
              <a
                href={socialUrl(entry.network, entry.username)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <span>{entry.network}</span>
                <span className="font-mono text-xs text-[var(--muted)]">
                  {entry.username}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </article>

      <aside className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="absolute -right-16 -top-14 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(236,130,61,0.35),_transparent_66%)]" />
        <div className="relative space-y-4">
          {featureItems.map((item) => (
            <article
              key={item.label}
              className="rounded-xl bg-[var(--surface)] p-4"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-[var(--ink-soft)]">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-strong)]">
                {cleanRichText(item.details)}
              </p>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
}
