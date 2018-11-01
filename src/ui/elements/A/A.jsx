import React from 'react'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import { Typography } from '@material-ui/core'

const A = ({ classes, children, href, color}) => {
  const body1Styles = classNames({
    [classes.colorWhite]: color === 'white',
    [classes.colorBlack]: color === 'black',
    a: true,
  })
  const aStyles = classNames({
    [classes.aWhite]: color === 'white',
    [classes.aBlack]: color === 'black',
  })
  return (
    <a href={href} className={aStyles}>
      <Typography
        variant='body2'
        className={body1Styles}
      >
        {children}
      </Typography>
    </a>
  )
}

const styles = {
  aWhite: {
    textDecoration: 'none',
    borderBottom: '1px solid white',
  },
  aBlack: {
    textDecoration: 'none',
    borderBottom: '1px solid black',
  },
  colorWhite: {
    color: 'white',
  },
  colorBlack: {
    color: 'black',
  },
}
export default withStyles(styles)(A)
