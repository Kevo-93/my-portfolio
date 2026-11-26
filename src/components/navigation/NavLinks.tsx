"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/cn";
import { isActivePath } from "@/lib/utils/nav";
import type { NavItem } from "@/types/site";

/** Desktop navigation. Client component only because it reads the current URL. */
export function NavLinks({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = isActivePath(pathname, item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group relative inline-flex min-h-11 items-center rounded-md px-3 text-sm transition-colors duration-200",
                active ? "text-fg" : "text-fg-muted hover:text-fg",
              )}
            >
              {item.label}
              {/* Underline: grows on hover, stays visible on the active page */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-3 bottom-2 h-px origin-left bg-accent transition-transform duration-300 ease-out",
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
