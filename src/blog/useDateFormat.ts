import { differenceInHours, format, parseISO } from "date-fns";
import { useMemo } from "react";

type DateInput = Date | string | number;

/**
 * @param inputDate Can be Date object, ISO date string,
 * or number of milliseconds since epoch.
 * @returns resulting Date object
 */
function parse(inputDate: DateInput) {
  if (typeof inputDate === "string") {
    return parseISO(inputDate);
  } else if (typeof inputDate === "number") {
    return new Date(inputDate);
  } else {
    return inputDate;
  }
}

/**
 * Takes a date and returns a formatted string representing that date
 * @param inputDate - Can be Date object, ISO date string
 * or number of milliseconds since epoch.
 * @param formatStr - specify format for return value.
 */
export function formatDate(inputDate: DateInput, formatStr: string = "MMM do") {
  const date = parse(inputDate);
  const now = new Date();

  const hoursDiff = differenceInHours(now, date);

  if (hoursDiff < 24) {
    const unit = hoursDiff === 1 ? "hour" : "hours";
    return `${hoursDiff} ${unit} ago`;
  }

  return format(date, formatStr);
}

/**
 * @see {formatDate}
 * @param inputDate
 * @param formatStr
 * @returns
 */
export default function useDateFormat(
  inputDate: DateInput,
  formatStr: string = "MMM do"
) {
  return useMemo(
    () => formatDate(inputDate, formatStr),
    [inputDate, formatStr]
  );
}
