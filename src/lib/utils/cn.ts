import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge resolves conflicting classes ("p-2 p-4" → "p-4").
 * It must know our custom font-size tokens, otherwise it would mistake
 * "text-display" for a colour and drop it when combined with "text-fg".
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "h1", "h2", "h3", "lead", "label"],
    },
  },
});

/** Combine class names conditionally and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
