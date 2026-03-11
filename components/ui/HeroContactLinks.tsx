"use client";

import { animate } from "animejs";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Socialnetwork } from "@/data/rendercv";
import { Icon } from "@iconify/react";

interface HeroContactLinksProps {
  email: string;
  phone: string;
  social: Socialnetwork[];
}

function socialUrl(network: string, username: string) {
  const key = network.toLowerCase();
  if (key.includes("linkedin"))
    return `https://www.linkedin.com/in/${username}`;
  if (key.includes("github")) return `https://github.com/${username}`;
  return "#";
}

function socialIcon(network: string) {
  const key = network.toLowerCase();
  if (key.includes("linkedin")) return "mdi:linkedin";
  if (key.includes("github")) return "mdi:github";
  if (key.includes("facebook")) return "mdi:facebook";
  if (key.includes("twitter") || key.includes("x")) return "ri:twitter-x-fill";
  return "mdi:web";
}

export function HeroContactLinks({
  email,
  phone,
  social,
}: HeroContactLinksProps) {
  const [activeId, setActiveId] = useState<string>("contact-email");
  const detailRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const socialItems = useMemo(
    () =>
      social.map((entry, index) => ({
        id: `social-${index}`,
        label: entry.network,
        value: `@${entry.username}`,
        icon: socialIcon(entry.network),
        href: socialUrl(entry.network, entry.username),
      })),
    [social],
  );

  const detailItems = useMemo(
    () => [
      {
        id: "contact-email",
        label: "Email",
        value: email,
        icon: "mdi:email-outline",
        href: `mailto:${email}`,
        isExternal: false,
      },
      {
        id: "contact-phone",
        label: "Call",
        value: phone,
        icon: "mdi:phone-outline",
        href: `tel:${phone.replaceAll(" ", "")}`,
        isExternal: false,
      },
      ...socialItems.map((item) => ({ ...item, isExternal: true })),
    ],
    [email, phone, socialItems],
  );

  useEffect(() => {
    const activeDetail = detailRefs.current[activeId];
    if (!activeDetail) return;

    animate(activeDetail, {
      opacity: [0, 1],
      translateX: [8, 0],
      duration: 220,
      ease: "out(2)",
    });
  }, [activeId]);

  return (
    <div className="space-y-2.5">
      <ul
        className="flex flex-wrap gap-2"
        aria-label="Contact and social chips"
      >
        {detailItems.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <li
              key={item.id}
              className={`inline-flex items-center rounded-full border px-2 py-1 text-xs transition ${
                isOpen
                  ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--ink)]"
                  : "border-[var(--line)] bg-white text-[var(--ink-soft)]"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className="inline-flex items-center gap-1.5 rounded-full px-1 py-0.5 font-medium transition hover:text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                aria-expanded={isOpen}
                aria-label={`${item.label} details`}
              >
                <Icon
                  icon={item.icon}
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />
                <span>{item.label}</span>
              </button>

              {isOpen ? (
                <>
                  <span className="mx-1 text-[var(--muted)]">|</span>
                  <a
                    ref={(node) => {
                      detailRefs.current[item.id] = node;
                    }}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1 font-normal text-[var(--muted-strong)] underline decoration-[var(--line)] underline-offset-4 transition hover:text-[var(--ink)]"
                  >
                    <span>{item.value}</span>
                    <Icon
                      icon={
                        item.isExternal
                          ? "mdi:open-in-new"
                          : "mdi:chevron-right"
                      }
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                    />
                  </a>
                </>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
