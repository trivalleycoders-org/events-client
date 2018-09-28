import fontSizeFromString from 'lib/fontSizeFromString'
// eslint-disable-next-line
import { green } from 'logger'

const variant = 'body1'
export const styles = (theme) => {
  const originalSize = theme.typography[variant].fontSize
  return ({
    root: {
      [theme.breakpoints.down('xs')]: {
        fontSize: fontSizeFromString(originalSize, 10),
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeFromString(originalSize, 10),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: fontSizeFromString(originalSize, 10),
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: fontSizeFromString(originalSize, 10),
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: fontSizeFromString(originalSize, 10),
      },
    },
  })
}