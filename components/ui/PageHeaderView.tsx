interface NavItem {
  href: string;
  label: string;
}

interface PageHeaderViewProps {
  title: string;
  navItems: readonly NavItem[];
  isSticky?: boolean;
}

export function PageHeaderView({
  title,
  navItems,
  isSticky = false,
}: PageHeaderViewProps) {
  return (
    <header
      className={`relative overflow-hidden rounded-2xl border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.38))] p-4 ring-1 ring-[rgba(255,255,255,0.45)] backdrop-blur-xl backdrop-saturate-150 transition-[box-shadow,transform,background-color,border-color] duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.48),transparent_45%),radial-gradient(circle_at_84%_78%,rgba(221,108,47,0.2),transparent_48%)] sm:p-5 ${
        isSticky
          ? "border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(255,255,255,0.48))] shadow-[0_20px_44px_rgba(30,34,26,0.22)]"
          : "shadow-[0_16px_40px_rgba(30,34,26,0.16)]"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="relative text-sm font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
          {title}
        </h2>
        <nav aria-label="Page sections" className="relative">
          <ul className="flex flex-wrap justify-end gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-full border border-white/60 bg-white/50 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-soft)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_6px_14px_rgba(21,30,35,0.08)] transition hover:border-[var(--accent)]/55 hover:bg-white/68 hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
