"use client";
import { Icon } from "@iconify/react";
import { JSX, useEffect, useState } from "react";

// Curated outline-friendly icons to use as floating skill markers
const ICON_IDS = ["simple-icons:react", "devicon:java", "simple-icons:aws"];

type Shape = {
  size: number;
  leftPct: number;
  topPct: number;
  delay: number;
  duration: number;
  rotate: number;
  color: string;
  icon: string;
  strokeWidth: number;
};

function rectsOverlap(
  ax: number,
  ay: number,
  aw: number,
  ah: number,
  bx: number,
  by: number,
  bw: number,
  bh: number,
  margin = 6,
) {
  return !(
    ax + aw + margin < bx ||
    bx + bw + margin < ax ||
    ay + ah + margin < by ||
    by + bh + margin < ay
  );
}

export default function FloatingShapes(): JSX.Element {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mounted = true;
    let raf = 0;
    let timeoutId: number | null = null;

    const generate = () => {
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      const count = 10;
      const placed: Shape[] = [];

      for (let i = 0; i < count; i++) {
        const size = Math.round(20 + Math.random() * 10);
        const w = size;
        const h = size;
        const delay = Math.random() * 5;
        const duration = 3 + Math.random() * 6; // random duration per shape
        const rotate = Math.round(Math.random() * 360);
        const alpha = 0.06 + Math.random() * 0.18;
        const color = `rgba(30,20,10,${alpha.toFixed(3)})`;
        const icon = ICON_IDS[Math.floor(Math.random() * ICON_IDS.length)];
        const strokeWidth = Math.max(0.5, size * 0.007);

        // Try to find a non-overlapping position (limited attempts)
        let leftPx = 0;
        let topPx = 0;
        let placedOk = false;
        const attempts = 40;
        for (let a = 0; a < attempts; a++) {
          leftPx = Math.random() * Math.max(1, winW - w);
          // keep shapes mostly in upper 80% so footer/content unaffected
          topPx = Math.random() * Math.max(1, winH * 0.8 - h) + winH * 0.05;

          const overlaps = placed.some((p) => {
            const px = (p.leftPct / 100) * winW;
            const py = (p.topPct / 100) * winH;
            const pw = p.size;
            const ph = p.size;
            return rectsOverlap(
              leftPx,
              topPx,
              w,
              h,
              px,
              py,
              pw,
              ph,
              Math.max(8, Math.min(24, size * 0.12)),
            );
          });

          if (!overlaps) {
            placedOk = true;
            break;
          }
        }

        // fallback: allow overlap if no free slot found
        if (!placedOk) {
          leftPx = Math.random() * Math.max(1, winW - w);
          topPx = Math.random() * Math.max(1, winH * 0.8 - h) + winH * 0.05;
        }

        const leftPct = (leftPx / winW) * 100;
        const topPct = (topPx / winH) * 100;

        placed.push({
          size,
          leftPct,
          topPct,
          delay,
          duration,
          rotate,
          color,
          icon,
          strokeWidth,
        });
      }

      // set state on next frame
      raf = requestAnimationFrame(() => {
        if (mounted) setShapes(placed);
      });

      // schedule next regeneration after the longest animation finishes
      const maxTime =
        Math.max(...placed.map((p) => p.delay + p.duration)) * 1000 + 200;
      timeoutId = window.setTimeout(() => {
        if (mounted) generate();
      }, maxTime);
    };

    generate();

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="floating-shapes" aria-hidden>
      {shapes.map((s, i) => (
        <div
          key={i}
          className="floating-shape"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.leftPct}%`,
            top: `${s.topPct}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            transform: `rotate(${s.rotate}deg)`,
            color: s.color,
          }}
        >
          <Icon
            icon={s.icon}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}
