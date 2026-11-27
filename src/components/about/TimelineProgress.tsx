"use client";

import { useReducedMotion, useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useRef } from "react";

/**
 * The vertical timeline line. A mint line "draws" itself downwards as you
 * scroll through the timeline. With reduced motion it is simply shown full.
 */
export function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} aria-hidden="true" className="absolute top-2 bottom-2 left-[7px] w-px bg-line">
      <m.div
        className="absolute inset-0 origin-top bg-accent"
        style={prefersReducedMotion ? undefined : { scaleY }}
      />
    </div>
  );
}
