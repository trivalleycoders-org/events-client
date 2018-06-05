const styleRed = [
  'color: #ff0000',
  'font-weight: bold',
].join(';')

const styleGreen = [
  'color: #00ff00',
  'font-weight: bold',
].join(';')

const styleBlue = [
  'color: #00ced1',
  'font-weight: bold',
].join(';')

const styleOrange = [
  'color: #ffa500',
  'font-weight: bold',
].join(';')

const stylePink = [
  'color: #ff69b4',
  'font-weight: bold',
].join(';')
const styleYellow = [
  'color: #ffd700',
  'font-weight: bold',
].join(';')

const getStyle = (styleName) => {
  let color
  switch (styleName) {
    case 'red':
      color = styleRed
      break
    case 'blue':
      color = styleBlue
      break
    case 'green':
      color = styleGreen
      break
    case 'orange':
      color = styleOrange
      break
    case 'pink':
      color = stylePink
      break
    case 'yellow':
      color = styleYellow
      break
    default:
      color = ''
  }

  return color
}

const makeMessage = (message = '', value = '', color = '') => {
  const nMessage = `%c[${message}]`
  const style = getStyle(color)
  // eslint-disable-next-line no-console
  console.log(nMessage, style, value)
}

export const yellow = (message = '', value = '') => {
  makeMessage(message, value, 'yellow')
}
export const blue = (message = '', value = '') => {
  makeMessage(message, value, 'blue')
}
export const red = (message = '', value = '') => {
  makeMessage(message, value, 'red')
}
export const green = (message = '', value = '') => {
  makeMessage(message, value, 'green')
}

export const orange = (message = '', value = '') => {
  makeMessage(message, value, 'orange')
}

export const pink = (message = '', value = '') => {
  makeMessage(message, value, 'pink')
}

export const log = (message = '', value = '', color = '') => {
  let count = 3
  if (color === '') { count-- }
  if (value === '') { count-- }

  let nMessage
  if (count === 1) {
    nMessage = '[log]'
    value = message
  } else {
    nMessage = `%c[${message}]`
  }
  const style = getStyle(color)

  // eslint-disable-next-line no-console
  console.log(nMessage, style, value)
}

export default { log, yellow, blue, green, pink }
