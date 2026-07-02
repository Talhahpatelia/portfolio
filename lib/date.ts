export function getYear(date?: string) {
  if (!date) return null;
  return date.match(/\d{4}/)?.[0] ?? null;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(date?: string) {
  if (!date) return null;

  const dayMatch = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dayMatch) {
    const [, year, month, day] = dayMatch;
    return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
  }

  const monthMatch = date.match(/^(\d{4})-(\d{2})$/);
  if (monthMatch) {
    const [, year, month] = monthMatch;
    return `${MONTHS[Number(month) - 1]} ${year}`;
  }

  return getYear(date);
}

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
