import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const globalScrollSpringConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};
