import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";
type Icon = "arrow" | "external" | "none";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,transform] duration-200 ease-out " +
  "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent-strong",
  secondary:
    "border border-line-strong bg-surface-2 text-fg hover:border-accent/40 hover:bg-surface-3",
  ghost: "text-fg-muted hover:text-fg",
};

/* min-h-11 = 44px → comfortable touch target on phones */
const sizes: Record<Size, string> = {
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-6 text-base",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

function ButtonIcon({ icon }: { icon: Icon }) {
  if (icon === "arrow") {
    return (
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    );
  }
  if (icon === "external") {
    return (
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    );
  }
  return null;
}

/* --------------------------------------------------------------------------
   <ButtonLink> – looks like a button, behaves like a link
   -------------------------------------------------------------------------- */
type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: Icon;
  /** Opens in a new tab with safe rel attributes */
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "none",
  external = false,
  className,
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);

  // mailto:, tel: and external URLs use a normal <a>; internal pages use <Link>
  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        <ButtonIcon icon={icon} />
        {external ? <span className="sr-only">(öffnet in neuem Tab)</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ButtonIcon icon={icon} />
    </Link>
  );
}

/* --------------------------------------------------------------------------
   <Button> – a real <button>, e.g. for the contact form (Phase 4)
   -------------------------------------------------------------------------- */
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  size?: Size;
  icon?: Icon;
};

export function Button({
  variant = "primary",
  size = "md",
  icon = "none",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...props}>
      {children}
      <ButtonIcon icon={icon} />
    </button>
  );
}
