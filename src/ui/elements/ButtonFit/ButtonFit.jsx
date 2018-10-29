import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
import { green } from 'logger'

const ButtonFit = ({ classes, children, to }) => {
  const LinkComponent = props => <Link
    to={to}
    {...props}
  />

  return (
    <Button
      component={LinkComponent}
      className={classes.fit}
    >
      {children}
    </Button>
  )
}

const styles = {
  fit: {
    height: '100%',
    width: '100%',
    padding: 0,
    minWidth: 0,
  },
}

export default withStyles(styles)(ButtonFit)