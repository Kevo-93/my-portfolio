/**
 * Invisible until focused with the Tab key. Lets keyboard and
 * screen-reader users jump straight past the navigation.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-md bg-accent px-4 py-2 font-medium text-accent-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
    >
      Zum Inhalt springen
    </a>
  );
}
