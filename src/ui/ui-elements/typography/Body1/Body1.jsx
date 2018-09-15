import React from 'react'
import {
//   Typography,
  withStyles,
} from '@material-ui/core'
/* User */
import fontSizeFromString from 'lib/fontSizeFromString'
import classNames from 'classnames'
/* Dev */
// eslint-disable-next-line
import { green as greenl } from 'logger'

import Typography from '../Typography'

/*
    Params match their material-ui equilivant
    See: https://material-ui.com/api/typography/#typography
*/

const variant='body1'

const Body1 = ({
  align,
  children,
  classes,
  className,
  color,
  gutterBottom = false,
  noWrap,
}) => {

  const style = {
    color: color,
  }

  return (
    <Typography
      align={align}
      classes={{
        root: classes.root
      }}
      style={style}
      noWrap={noWrap}
      variant={variant}
      gutterBottom
    >
      {children}
    </Typography>
  )

}

const styles = theme => {
  const originalSize = theme.typography[variant].fontSize
  return ({
    root: {
      [theme.breakpoints.down('xs')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('md')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: fontSizeFromString(originalSize, 1),
      },
    },
  })
}

export default withStyles(styles, { withTheme: true })(Body1)