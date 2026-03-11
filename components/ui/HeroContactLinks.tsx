"use client";

import { useMemo, useState } from "react";
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
      },
      {
        id: "contact-phone",
        label: "Call",
        value: phone,
        icon: "mdi:phone-outline",
        href: `tel:${phone.replaceAll(" ", "")}`,
      },
      ...socialItems,
    ],
    [email, phone, socialItems],
  );

  return (
    <div className="space-y-2.5">
      <ul
        className="flex flex-wrap gap-2"
        aria-label="Contact and social chips"
      >
        {detailItems.map((item) => {
          const isOpen = activeId === item.id;

          return (
            <li key={item.id} className="relative">
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                  isOpen
                    ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--ink)]"
                    : "border-[var(--line)] bg-white text-[var(--ink-soft)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
                }`}
                aria-expanded={isOpen}
                aria-label={`${item.label} details`}
              >
                <Icon
                  icon={item.icon}
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />
                <span>{item.label}</span>
                {isOpen ? (
                  <>
                    <span className="text-[var(--muted)]">|</span>
                    <span className="font-normal text-[var(--muted-strong)]">
                      {item.value}
                    </span>
                  </>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
