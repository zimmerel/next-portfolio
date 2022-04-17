import { differenceInHours, format, parseISO } from 'date-fns';

/**
 * formatDate with built in format.
 *
 * *MMMM do, yyyy*
 *
 * @param date
 * @returns formatted date string
 * @see {formatDate}
 */
export default function formatPostDate(inputDate: string) {
  const date = parseISO(inputDate);
  return format(date, 'MMMM do, yyyy');
}
