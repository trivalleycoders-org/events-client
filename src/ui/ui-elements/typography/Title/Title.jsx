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
        fontSize: fontSizeFromString(originalSize, 0.7),
        marginBottom: '-0.8rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: fontSizeFromString(originalSize, 0.7),
        marginBottom: '-0.8rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: originalSize,
        marginBottom: '1.5em',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: originalSize,
        marginBottom: '1.5em',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: originalSize,
        marginBottom: '1.5em',
      },
    }
  })
}

export default withStyles(styles)(Title)
