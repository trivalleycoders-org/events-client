
import format from 'date-fns/format'

const moDayYrFormat = 'MMM d, YYYY'
const moDayFormat = 'MMM d'
const timeFormat = 'h:mm a'
const dayFormat = 'd'
const moYrFormat = 'MMM YYYY'

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