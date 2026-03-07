import { SectionHeader } from "@/components/ui/SectionHeader";
import type { PropsWithChildren } from "react";

interface SectionShellProps extends PropsWithChildren {
  title: string;
}

export function SectionShell({ title, children }: SectionShellProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <SectionHeader title={title} />
      {children}
    </div>
  );
}
