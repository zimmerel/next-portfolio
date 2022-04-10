import { differenceInHours, format, parseISO } from "date-fns";

/**
 * Takes a date and returns a formatted string representing that date
 * @param inputDate - ISO date string
 * @param formatStr - specify format for return value.
 */
export default function formatDate(inputDate: string, formatStr: string) {
  const date = parseISO(inputDate);
  const now = new Date();

  const hoursDiff = differenceInHours(now, date);

  if (hoursDiff < 24) {
    const unit = hoursDiff === 1 ? "hour" : "hours";
    return `${hoursDiff} ${unit} ago`;
  }

  return format(date, formatStr);
}
