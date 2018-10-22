import React from 'react'
import { withStyles } from '@material-ui/core'
import TypographyBase from '../TypographyBase'
import fontSizeFromString from 'lib/fontSizeFromString'
// eslint-disable-next-line
import { green as greenl } from 'logger'

const variant = 'title'

const Title = (props) => {
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
        fontSize: fontSizeFromString(originalSize, 0.6),
        marginBottom: '-1em',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeFromString(originalSize, 0.6),
        marginBottom: '1em',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: fontSizeFromString(originalSize, 0.9),
        lineHeight: '19px',
        marginBottom: '1.5em',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: originalSize,
        lineHeight: '25px',
        marginBottom: '1.5em',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: originalSize,
        lineHeight: '25px',
        marginBottom: '1.5em',
      },
    }
  })
}

export default withStyles(styles)(Title)
