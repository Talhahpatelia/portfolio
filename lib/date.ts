export function getYear(date?: string) {
  if (!date) return null;
  return date.match(/\d{4}/)?.[0] ?? null;
}
