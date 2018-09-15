import React from 'react'
import { withStyles } from '@material-ui/core'
import fontSizeFromString from 'lib/fontSizeFromString'
import TypographyBase from '../TypographyBase'
// eslint-disable-next-line
import { green as greenl } from 'logger'

const variant='body2'

const Body2 = (props) => {
  const { children, classes } = props
  return (
    <TypographyBase
      variant={variant}
      classes={{
        root: classes.root
      }}
      { ...props }
    >
      {children}
    </TypographyBase>
  )
}
const styles = theme => {
  const originalSize = theme.typography[variant].fontSize

  return ({
    [variant]: {
      [theme.breakpoints.down('xs')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: originalSize,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: originalSize,
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: originalSize,
      },
    }
  })
}
export default withStyles(styles)(Body2)