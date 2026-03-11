interface NavItem {
  href: string;
  label: string;
}

interface PageHeaderViewProps {
  title: string;
  navItems: readonly NavItem[];
  isSticky?: boolean;
  activeHref?: string;
}

function NavIcon({ href }: { href: string }) {
  const iconClassName = "size-4";

  switch (href) {
    case "#hero":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClassName}>
          <path
            d="M12 3l9 7h-3v10h-5v-6H11v6H6V10H3l9-7z"
            fill="currentColor"
          />
        </svg>
      );
    case "#skills":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClassName}>
          <path
            d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 3h7v1h-7v-1zm0 3h7v1h-7v-1z"
            fill="currentColor"
          />
        </svg>
      );
    case "#experience":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClassName}>
          <path
            d="M9 4h6v2h5v14H4V6h5V4zm2 2h2V5h-2v1zm-5 4v8h12v-8H6z"
            fill="currentColor"
          />
        </svg>
      );
    case "#projects":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClassName}>
          <path
            d="M4 4h16v3H4V4zm0 5h7v11H4V9zm9 0h7v5h-7V9zm0 7h7v4h-7v-4z"
            fill="currentColor"
          />
        </svg>
      );
    case "#contact":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClassName}>
          <path d="M3 6l9 6 9-6v12H3V6zm9 4L3 4h18l-9 6z" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClassName}>
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
  }
}

export function PageHeaderView({
  title,
  navItems,
  isSticky = false,
  activeHref,
}: PageHeaderViewProps) {
  return (
    <header
      className={`relative overflow-hidden rounded-2xl border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.38))] p-4 ring-1 ring-[rgba(255,255,255,0.45)] backdrop-blur-xl backdrop-saturate-150 transition-[box-shadow,transform,background-color,border-color] duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.48),transparent_45%),radial-gradient(circle_at_84%_78%,rgba(221,108,47,0.2),transparent_48%)] sm:p-5 ${
        isSticky
          ? "border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(255,255,255,0.48))] shadow-[0_20px_44px_rgba(30,34,26,0.22)]"
          : "shadow-[0_16px_40px_rgba(30,34,26,0.16)]"
      }`}
    >
      <div className="flex flex-nowrap items-center justify-between gap-3">
        <nav aria-label="Page sections" className="relative min-w-0 flex-1">
          <h2 className="sr-only">{title}</h2>
          <ul className="flex flex-nowrap justify-start gap-2  ">
            {navItems.map((item) => {
              const isActive = item.href === activeHref;

              return (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    aria-label={item.label}
                    aria-current={isActive ? "location" : undefined}
                    className={`inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.08em] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_6px_14px_rgba(21,30,35,0.08)] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-4 ${
                      isActive
                        ? "border-[var(--accent)]/70 bg-[var(--accent)]/14 text-[var(--ink)]"
                        : "border-white/60 bg-white/50 text-[var(--ink-soft)] hover:border-[var(--accent)]/55 hover:bg-white/68 hover:text-[var(--ink)]"
                    }`}
                  >
                    <NavIcon href={item.href} />
                    <span
                      className={
                        isActive ? "inline sm:inline" : "hidden sm:inline"
                      }
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
