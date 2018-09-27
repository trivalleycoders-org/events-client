
import format from 'date-fns/format'
import { green } from 'logger'

const moDayYrFormat = 'MMM d, YYYY'
const moDayFormat = 'MMM d'
const timeFormat = 'h:mm a'
const dayFormat = 'd'
const moYrFormat = 'MMM YYYY'
/*
   returns formated date as string according to parameters sent
   - moDayYr: Sep 21, 2018
   - moDay: Sep 21
   - time: 12:15 PM
   - day: 20
   - moYr: Sep 2018
*/


export const dateFormat = (date, style) => {
  switch (style) {
    case 'moDay':
      return format(date, moDayFormat)
    case 'time':
      return format(date, timeFormat)
    case 'day':
      return format(date, dayFormat)
    case 'moYr':
      return format(date, moYrFormat)
    case 'moDayYr':
    default:
      return format(date, moDayYrFormat)
  }
}