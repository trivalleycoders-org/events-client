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
const variant='headline'

const Headline = ({
  align,
  children,
  classes,
  className,
  color,
  gutter,
  noWrap,
}) => {
  // greenl('theme', theme)
  return (
    <Typography
      align={align}
      className={classNames([classes[variant], classes.gutterBottom, className ])}
      color={color}
      noWrap={noWrap}
      variant={variant}
      gutterBottom={false}
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
    },
    gutterBottom: {
      marginBottom: '1.4em',
    }
  })
}
export default withStyles(styles, { withTheme: true })(Headline)