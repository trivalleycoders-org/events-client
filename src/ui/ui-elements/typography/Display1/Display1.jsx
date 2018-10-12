import React from 'react'
import { withStyles } from '@material-ui/core'
import TypographyBase from '../TypographyBase'
import fontSizeFromString from 'lib/fontSizeFromString'
// eslint-disable-next-line
import { green as greenl } from 'logger'

const variant = 'display1'

const Display1 = (props) => {
  const { children, classes, className } = props
  return (
    <TypographyBase
      variant={variant}
      classes={{
        root: classes.root
      }}
      className={className}
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

export default withStyles(styles)(Display1)