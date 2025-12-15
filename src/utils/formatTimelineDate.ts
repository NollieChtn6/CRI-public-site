// src/utils/formatDate.ts

const MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

/**
 * Formate une date à partir de jours/mois/année.
 * @param startDay Jour (optionnel)
 * @param startMonth Mois (1-12, optionnel)
 * @param startYear Année (obligatoire)
 * @param endDay Jour de fin (optionnel)
 * @param endMonth Mois de fin (optionnel)
 * @param endYear Année de fin (optionnel)
 * @returns Date formatée en chaîne
 */
export function formatTimelineDate(
  startDay: number | null,
  startMonth: number | null,
  startYear: number,
  endDay: number | null,
  endMonth: number | null,
  endYear: number | null,
): string {
  const startMonthName = startMonth ? MONTHS[startMonth - 1] : null;
  const endMonthName = endMonth ? MONTHS[endMonth - 1] : null;

  if (startMonthName) {
    const start = startDay
      ? `${startDay} ${startMonthName} ${startYear}`
      : `${startMonthName} ${startYear}`;
    if (endYear) {
      const end = endDay && endMonthName ? `${endDay} ${endMonthName} ${endYear}` : `${endYear}`;
      return `${start} - ${end}`;
    }
    return start;
  }
  return endYear ? `${startYear} - ${endYear}` : `${startYear}`;
}
