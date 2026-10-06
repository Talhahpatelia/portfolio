const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function getYear(date?: string) {
  if (!date) return null;
  return date.match(/\d{4}/)?.[0] ?? null;
}

/** "2024-07" -> "Jul 2024", "2024" -> "2024", "2024-07-26" -> "26 Jul 2024". */
export function formatDate(date?: string) {
  if (!date) return null;

  const day = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (day) return `${Number(day[3])} ${MONTHS[Number(day[2]) - 1]} ${day[1]}`;

  const month = date.match(/^(\d{4})-(\d{2})$/);
  if (month) return `${MONTHS[Number(month[2]) - 1]} ${month[1]}`;

  return getYear(date);
}

/** Full ISO date for sitemaps, structured data and Open Graph. */
export function toIsoDate(date?: string) {
  if (!date) return undefined;
  if (/^\d{4}$/.test(date)) return `${date}-01-01`;
  if (/^\d{4}-\d{2}$/.test(date)) return `${date}-01`;
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  return undefined;
}

export function sortDateValue(date?: string) {
  const iso = toIsoDate(date);
  return iso ? new Date(`${iso}T00:00:00.000Z`).getTime() : 0;
}
