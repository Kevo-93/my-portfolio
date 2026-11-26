"use client";

import type { Transition } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds, e.g. 0.1 */
  delay?: number;
  className?: string;
  /** Render as <li> inside lists, otherwise <div> */
  as?: "div" | "li";
};

const initial = { opacity: 0, y: 24 };
const visible = { opacity: 1, y: 0 };
const viewport = { once: true, margin: "0px 0px -10% 0px" };

/** Fades and slides its content in once it scrolls into view. */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const transition: Transition = { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] };

  if (as === "li") {
    return (
      <m.li
        className={className}
        initial={initial}
        whileInView={visible}
        viewport={viewport}
        transition={transition}
      >
        {children}
      </m.li>
    );
  }

  return (
    <m.div
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </m.div>
  );
}
