import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const IconButtonLink = ({ classes, children, color, to, variant }) => {
  const LinkComponent = props => <Link
    to={to}
    {...props}
  />
  return (
    <IconButton
      component={LinkComponent}
      className={classes.root}
      variant={variant}
      color={color}
    >
      {children}
    </IconButton>
  )
}

const styles = theme => ({
  root: {
    //color: theme.palette.primary.contrastText,
  },
})

export default withStyles(styles)(IconButtonLink)
