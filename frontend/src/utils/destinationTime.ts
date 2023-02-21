import { parse, toSeconds } from "iso8601-duration";

export const dateDestinationISO = (isoDuration: string, fullDate: Date): Date => {
  const durationSeconds = toSeconds(parse(isoDuration));
  const dateSeconds = fullDate.setSeconds(fullDate.getSeconds());
  //   console.log(fullDate);
  //   console.log(dateSeconds);
  //   console.log(new Date(durationSeconds + dateSeconds));
  return new Date(durationSeconds + dateSeconds / 10);
};
