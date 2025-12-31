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
 * Formate une date à partir d'un événement timeline simplifié.
 * @param startDay Jour (optionnel)
 * @param startMonth Mois (1-12, optionnel)
 * @param startYear Année (obligatoire)
 * @returns Date formatée en chaîne
 */
export function formatTimelineDate(
  startDay?: number,
  startMonth?: number,
  startYear?: number,
): string {
  if (!startYear) return "";

  const parts: string[] = [];
  if (startDay) parts.push(String(startDay));
  if (startMonth) parts.push(MONTHS[startMonth - 1]);
  parts.push(String(startYear));

  return parts.join(" ");
}
