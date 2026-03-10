"use client";

import { PageHeaderView } from "@/components/ui/PageHeaderView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { pageNavigation } from "@/data/data";
import { useEffect, useRef, useState } from "react";

const STICKY_OFFSET_PX = 0;

export function PageHeader() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sentinelElement = sentinelRef.current;

    if (!sentinelElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${STICKY_OFFSET_PX}px 0px 0px 0px`,
      },
    );

    observer.observe(sentinelElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-px w-full" />
      <header className="sticky top-0 z-50">
        <SectionContainer spacing="default">
          <PageHeaderView
            title={pageNavigation.title}
            navItems={pageNavigation.items}
            isSticky={isSticky}
          />
        </SectionContainer>
      </header>
    </>
  );
}
