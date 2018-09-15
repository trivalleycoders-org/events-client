import React from 'react'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import Body1 from 'ui/ui-elements/typography/Body1'

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
      <Body1
        variant='body1'
        className={body1Styles}
        // color='green'
      >
        {children}
      </Body1>
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
