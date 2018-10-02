/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const formatMinutes = (minutes) => {
  const mins = Number(minutes).toString()
  if (mins.length === 1) {
    return mins.padStart(2, '0')
  }
  return mins
}

const hourAmPm = (date) => {
  const h = date.getHours()
  const m = date.getMinutes().toString().padStart(2, 0)
  return (h > 12)
    ? `${h-12}:${m} PM`
    : `${h}:${m} AM`
}

export const formattedDate = (isoDateString) => {
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const d = new Date(isoDateString)
  const MMM = monthNames[d.getMonth()]
  const DDD = dayNames[d.getDay()]
  const dd = d.getDate()
  const hour = hourAmPm(d)
  return `${DDD}, ${MMM} ${dd}, ${hour}`
}