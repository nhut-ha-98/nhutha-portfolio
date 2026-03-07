import type { PropsWithChildren } from "react";

export function LandingScaffold({ children }: PropsWithChildren) {
  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute left-1/2 top-[-34rem] h-[44rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(246,207,119,0.44),_transparent_64%)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[20rem] h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,_rgba(36,89,73,0.18),_transparent_68%)]" />
      {children}
    </main>
  );
}
