interface AvatarViewProps {
  name: string;
  src?: string | null;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { wrapper: "h-12 w-12", text: "text-lg" },
  md: { wrapper: "h-20 w-20", text: "text-2xl" },
  lg: { wrapper: "h-28 w-28", text: "text-4xl" },
};

function initials(name: string): string {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + (words.at(-1)?.[0] ?? "")).toUpperCase();
}

export function AvatarView({ name, src, size = "lg" }: AvatarViewProps) {
  const { wrapper, text } = sizeMap[size];

  return (
    <div
      aria-label={name}
      className={`relative shrink-0 rounded-full shadow-[var(--shadow-card)] ${wrapper}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,var(--accent),#fff,var(--line),var(--accent))] animate-[spin_3.6s_linear_infinite] motion-reduce:animate-none"
      />

      <div className="absolute inset-[2px] overflow-hidden rounded-full border border-[var(--line)] bg-white">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--accent)]">
            <span
              aria-hidden
              className={`select-none font-black leading-none tracking-tight text-white ${text}`}
            >
              {initials(name)}
            </span>
          </div>
        )}
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/40"
      />
    </div>
  );
}
