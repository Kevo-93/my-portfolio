"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils/cn";

/**
 * A soft glow that follows the mouse inside its parent element.
 * Only active with a real mouse (not on touch devices) and only when the
 * user has not enabled "reduce motion". Updates are batched with
 * requestAnimationFrame so scrolling stays smooth.
 */
export function PointerGlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    let frame = 0;
    const handleMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        el.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
      });
    };

    parent.addEventListener("pointermove", handleMove);
    return () => {
      parent.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-glow pointer-events-none absolute inset-0", className)}
    />
  );
}
