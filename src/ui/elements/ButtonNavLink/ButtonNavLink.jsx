import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const ButtonNavLink = ({ classes, children, color, to, variant, className }) => {
  const LinkComponent = props => <NavLink
    to={to}
    {...props}
  />
  return (
    <Button
      component={LinkComponent}
      className={classNames(classes.root, className)}
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