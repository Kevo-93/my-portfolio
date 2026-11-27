import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

import { Container } from "./Container";

const linkClass =
  "inline-flex min-h-9 items-center text-sm text-fg-muted transition-colors hover:text-fg";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  const socials = [
    { label: "GitHub", href: siteConfig.socials.github },
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
  ];

  return (
    <footer className="border-t border-line bg-surface-1">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{siteConfig.name}</p>
          <p className="mt-2 text-fg-muted">{siteConfig.role}</p>
          <p className="mt-1 text-sm text-fg-subtle">{siteConfig.location}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-flex min-h-11 items-center text-accent underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>

        <nav aria-label="Footer-Navigation">
          <h2 className="font-mono text-label text-fg-subtle uppercase">Seiten</h2>
          <ul className="mt-4 space-y-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-label text-fg-subtle uppercase">Profile</h2>
          <ul className="mt-4 space-y-1">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} group gap-1`}
                >
                  {social.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  <span className="sr-only">(öffnet in neuem Tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-line py-6 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        <ul className="flex gap-5">
          {siteConfig.legalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-fg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
