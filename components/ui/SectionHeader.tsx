interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl font-extrabold tracking-tight text-[var(--ink)] sm:text-3xl">
      {title}
    </h2>
  );
}
