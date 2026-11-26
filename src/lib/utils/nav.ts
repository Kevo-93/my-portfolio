/**
 * Is a navigation link the current page?
 * "/" only matches exactly; "/projekte" also matches "/projekte/irgendwas".
 */
export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
