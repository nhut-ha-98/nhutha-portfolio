"use client";

import { PageHeaderView } from "@/components/ui/PageHeaderView";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { pageNavigation } from "@/data/data";
import { useEffect, useRef, useState } from "react";

const STICKY_TOP_OFFSET_PX = 8;

export function PageHeader() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeHref, setActiveHref] = useState<string | undefined>(
    pageNavigation.items[0]?.href,
  );

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
        rootMargin: `-${STICKY_TOP_OFFSET_PX}px 0px 0px 0px`,
      },
    );

    observer.observe(sentinelElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const sectionAnchors = pageNavigation.items.reduce<
      Array<{
        href: (typeof pageNavigation.items)[number]["href"];
        element: HTMLElement;
      }>
    >((anchors, item) => {
      const sectionId = item.href.slice(1);
      const element = document.getElementById(sectionId);

      if (element instanceof HTMLElement) {
        anchors.push({ href: item.href, element });
      }

      return anchors;
    }, []);

    if (sectionAnchors.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const offsetTop = STICKY_TOP_OFFSET_PX + 72;

      const passedSections = sectionAnchors.filter(
        ({ element }) => element.getBoundingClientRect().top - offsetTop <= 0,
      );

      const nextHref =
        passedSections.at(-1)?.href ?? sectionAnchors[0]?.href ?? undefined;

      setActiveHref(nextHref);
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      root: null,
      threshold: [0, 0.2, 0.6, 1],
      rootMargin: `-${STICKY_TOP_OFFSET_PX + 72}px 0px -55% 0px`,
    });

    sectionAnchors.forEach(({ element }) => {
      observer.observe(element);
    });

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-2 w-full" />
      <header className="sticky top-2 z-50">
        <SectionContainer spacing="header">
          <PageHeaderView
            title={pageNavigation.title}
            navItems={pageNavigation.items}
            isSticky={isSticky}
            activeHref={activeHref}
          />
        </SectionContainer>
      </header>
    </>
  );
}
