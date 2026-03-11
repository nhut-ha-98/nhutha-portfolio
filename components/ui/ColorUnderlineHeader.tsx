interface ColorUnderlineHeaderProps {
  title: string;
  primary?: boolean;
}

export function ColorUnderlineHeader({
  title,
  primary = false,
}: ColorUnderlineHeaderProps) {
  return (
    <div className="text-center">
      <h3
        className={`font-bold tracking-tight text-[var(--ink)] ${
          primary ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
        }`}
      >
        {title}
      </h3>
      <div
        aria-hidden="true"
        className={`mx-auto mt-3 h-1 rounded-full ${
          primary
            ? "w-28 bg-gradient-to-r from-[#1D9BF0] via-[#22C55E] to-[#F59E0B]"
            : "w-20 bg-gradient-to-r from-[#22A06B] via-[#1D9BF0] to-[#38BDF8]"
        }`}
      />
    </div>
  );
}
