"use client";

import { useEffect, useMemo, useState } from "react";

interface TypingEffectProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  loop?: boolean;
}

export function TypingEffect({
  words,
  className,
  cursorClassName,
  typingSpeed = 90,
  deletingSpeed = 55,
  pauseMs = 1200,
  loop = true,
}: TypingEffectProps) {
  const safeWords = useMemo(
    () => words.filter((word) => word.trim().length > 0),
    [words],
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const syncPreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  useEffect(() => {
    if (safeWords.length === 0) {
      setText("");
      return;
    }

    if (reduceMotion) {
      setText(safeWords[0]);
      return;
    }

    const currentWord = safeWords[wordIndex % safeWords.length];
    const isWordComplete = text === currentWord;
    const isWordEmpty = text.length === 0;

    if (
      !loop &&
      wordIndex >= safeWords.length - 1 &&
      isWordComplete &&
      !isDeleting
    ) {
      return;
    }

    let nextDelay = typingSpeed;
    if (isDeleting) {
      nextDelay = deletingSpeed;
    } else if (isWordComplete) {
      nextDelay = pauseMs;
    }

    const timeout = globalThis.setTimeout(() => {
      if (!isDeleting) {
        if (!isWordComplete) {
          setText(currentWord.slice(0, text.length + 1));
          return;
        }

        setIsDeleting(true);
        return;
      }

      if (!isWordEmpty) {
        setText(currentWord.slice(0, text.length - 1));
        return;
      }

      setIsDeleting(false);
      setWordIndex((previousIndex) => {
        if (!loop && previousIndex >= safeWords.length - 1) {
          return previousIndex;
        }

        return (previousIndex + 1) % safeWords.length;
      });
    }, nextDelay);

    return () => {
      globalThis.clearTimeout(timeout);
    };
  }, [
    deletingSpeed,
    isDeleting,
    loop,
    pauseMs,
    reduceMotion,
    safeWords,
    text,
    typingSpeed,
    wordIndex,
  ]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      <span>{text || "\u00A0"}</span>
      <span
        aria-hidden="true"
        className={
          cursorClassName ??
          "ml-1 inline-block h-[1em] -mt-1 w-[2px] translate-y-[2px] rounded-full bg-[var(--accent)] align-middle motion-safe:animate-pulse"
        }
      />
    </span>
  );
}
