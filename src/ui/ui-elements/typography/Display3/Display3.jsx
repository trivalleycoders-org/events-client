import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
/* User */
import fontSizeFromString from 'lib/fontSizeFromString'
import classNames from 'lib/classNames'
/* Dev */
// eslint-disable-next-line
import { green as greenl } from 'logger'

/*
    Params match their material-ui equilivant
    See: https://material-ui.com/api/typography/#typography
*/
const variant='display3'

const Display3 = ({
  align,
  children,
  classes,
  className,
  color,
  noWrap,
}) => {
  // greenl('theme', theme)
  return (
    <Typography
      align={align}
      className={classNames([classes[variant], className ])}
      color={color}
      noWrap={noWrap}
      variant={variant}
    >
      {children}
    </Typography>
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
export default withStyles(styles, { withTheme: true })(Display3)