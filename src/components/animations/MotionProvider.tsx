"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * - LazyMotion + domAnimation loads only the animation features we use
 *   (fade, slide, hover, in-view) → much smaller JavaScript bundle.
 *   "strict" makes sure we always use the small `m` components.
 * - reducedMotion="user" respects the operating-system setting
 *   "reduce motion": movement is switched off automatically.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
