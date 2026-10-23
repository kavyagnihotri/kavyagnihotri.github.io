import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string for display. Plain "YYYY-MM-DD" dates are parsed as
 * local dates so they don't shift by a day in timezones behind UTC.
 */
export function formatDate(dateString: string) {
  if (!dateString) return ""
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString)
  const date = match
    ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
    : new Date(dateString)
  if (isNaN(date.getTime())) return dateString
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
