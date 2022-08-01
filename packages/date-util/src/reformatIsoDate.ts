import { format, parseISO } from 'date-fns';

/**
 * Parse an ISO date and return it as a reformatted string
 */
export default function reformatIsoDate(
  inputDate: string,
  formatStr = 'MMMM do, yyyy'
) {
  const date = parseISO(inputDate);
  return format(date, formatStr);
}
 