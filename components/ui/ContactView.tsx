import type { Socialnetwork } from "@/data/rendercv";

interface ContactViewProps {
  email: string;
  phone: string;
  social: Socialnetwork[];
}

function socialUrl(network: string, username: string) {
  const key = network.toLowerCase();
  if (key.includes("linkedin"))
    return `https://www.linkedin.com/in/${username}`;
  if (key.includes("github")) return `https://github.com/${username}`;
  return "#";
}

export function ContactView({ email, phone, social }: ContactViewProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
        <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
          Direct Contact
        </h3>
        <div className="mt-4 space-y-3">
          <a
            href={`mailto:${email}`}
            className="flex min-h-11 items-center gap-3 rounded-xl bg-[var(--accent)] px-5 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 shrink-0"
            >
              <path d="M3 4a2 2 0 0 0-2 2v.217l9 5.25 9-5.25V6a2 2 0 0 0-2-2H3Z" />
              <path d="M19 8.483 10 13.73 1 8.483V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.483Z" />
            </svg>
            <span className="text-sm">{email}</span>
          </a>
          <a
            href={`tel:${phone.replaceAll(" ", "")}`}
            className="flex min-h-11 items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-5 font-semibold text-[var(--ink-soft)] transition hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 shrink-0 text-[var(--accent)]"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{phone}</span>
          </a>
        </div>
      </article>

      <article className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow-card)]">
        <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
          Social Profiles
        </h3>
        <ul
          className="mt-4 flex flex-wrap gap-3"
          aria-label="Social profiles"
        >
          {social.map((entry) => (
            <li key={`${entry.network}-${entry.username}`}>
              <a
                href={socialUrl(entry.network, entry.username)}
                target="_blank"
                rel="noreferrer"
                aria-label={`${entry.network}: ${entry.username}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 text-sm font-medium text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <span className="font-semibold">{entry.network}</span>
                <span className="font-mono text-xs text-[var(--muted)]">
                  {entry.username}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
