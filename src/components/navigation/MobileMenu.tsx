"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, type Variants } from "motion/react";
import * as m from "motion/react-m";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils/cn";
import { isActivePath } from "@/lib/utils/nav";
import type { NavItem } from "@/types/site";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

/** Full-screen navigation for screens below 768px. */
export function MobileMenu({ items }: { items: readonly NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // While open: lock page scrolling, close on Escape, close when the
  // window grows to desktop size.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 48rem)");
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 inline-flex size-11 items-center justify-center rounded-md border border-line text-fg transition-colors hover:border-line-strong"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      <AnimatePresence>
        {open ? (
          <m.div
            key="mobile-menu"
            id={panelId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-canvas/95 backdrop-blur-lg"
          >
            <nav aria-label="Mobile Navigation" className="px-5 py-8 sm:px-6">
              <m.ul variants={listVariants} initial="hidden" animate="show" className="space-y-1">
                {items.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <m.li key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex min-h-14 items-center justify-between border-b border-line font-display text-h2",
                          active ? "text-accent" : "text-fg",
                        )}
                      >
                        {item.label}
                        {active ? (
                          <span className="font-mono text-label text-accent uppercase">aktiv</span>
                        ) : null}
                      </Link>
                    </m.li>
                  );
                })}
              </m.ul>
            </nav>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
