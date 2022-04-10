import formatDate from "./formatDate";

/**
 * formatDate with built in format.
 *
 * *MMMM do, yyyy*
 *
 * @param date
 * @returns formatted date string
 * @see {formatDate}
 */
export default function formatPostDate(date: string) {
  return formatDate(date, "MMMM do, yyyy");
}
