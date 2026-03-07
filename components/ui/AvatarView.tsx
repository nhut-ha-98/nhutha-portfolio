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
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export function AvatarView({ name, src, size = "lg" }: AvatarViewProps) {
  const { wrapper, text } = sizeMap[size];

  return (
    <div
      aria-label={name}
      className={`relative shrink-0 overflow-hidden rounded-full border-2 border-[var(--line)] shadow-[var(--shadow-card)] ${wrapper}`}
    >
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
  );
}
