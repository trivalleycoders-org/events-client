import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const ButtonNavLink = ({classes, children, color, to, variant}) => {
  const LinkComponent = props => <NavLink
      to={to}
      {...props}
    />
  return (
    <Button
      component={LinkComponent}
      className={classes.root}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  )
}

const styles = theme => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
})

export default withStyles(styles)(ButtonNavLink)