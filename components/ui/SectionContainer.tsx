import type { PropsWithChildren } from "react";

interface SectionContainerProps extends PropsWithChildren {
  id?: string;
  spacing?: "hero" | "default";
  sticky?: boolean;
}

const spacingMap: Record<
  NonNullable<SectionContainerProps["spacing"]>,
  string
> = {
  hero: "py-14 sm:py-18 lg:py-24",
  default: "py-10 sm:py-12 lg:py-14",
};

export function SectionContainer({
  id,
  spacing = "default",
  sticky = false,
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 ${spacingMap[spacing]} ${sticky ? "sticky top-3 z-50 sm:top-4" : ""}`}
    >
      {children}
    </section>
  );
}
