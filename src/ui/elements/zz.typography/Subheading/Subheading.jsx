import React from 'react'
import { withStyles } from '@material-ui/core'
import TypographyBase from '../TypographyBase'
import fontSizeFromString from 'lib/fontSizeFromString'
// eslint-disable-next-line
import { green as greenl } from 'logger'

const variant = 'subheading'

const Subheading = (props) => {
  const { children, classes } = props
  return (
    <TypographyBase
      variant={variant}
      classes={{
        root: classes.variant
      }}
      {...props}
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
        fontSize: fontSizeFromString(originalSize, 0.7),
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeFromString(originalSize, 0.7),
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

export default withStyles(styles)(Subheading)