import Link from "next/link";

import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NavLinks } from "@/components/navigation/NavLinks";
import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      {/*
        The blurred background is a separate layer on purpose: if the
        <header> itself had backdrop-blur, the fixed mobile menu inside it
        would be positioned relative to the header instead of the screen.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 border-b border-line bg-canvas/70 backdrop-blur-md"
      />

      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group inline-flex min-h-11 items-center gap-2 font-display text-xl"
          aria-label={`${siteConfig.name} – zur Startseite`}
        >
          <span
            aria-hidden="true"
            className="font-mono text-sm text-accent transition-transform duration-300 group-hover:-rotate-6"
          >
            {"</>"}
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <NavLinks items={siteConfig.nav} />
        </nav>

        <MobileMenu items={siteConfig.nav} />
      </Container>
    </header>
  );
}
