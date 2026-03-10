interface NavItem {
  href: string;
  label: string;
}

interface PageHeaderViewProps {
  title: string;
  navItems: readonly NavItem[];
}

export function PageHeaderView({ title, navItems }: PageHeaderViewProps) {
  return (
    <header className="rounded-2xl border border-[var(--line)] bg-white/90 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--ink-soft)]">
          {title}
        </h2>
        <nav aria-label="Page sections">
          <ul className="flex flex-wrap justify-end gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-white px-4 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-soft)] transition hover:border-[var(--accent)] hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
