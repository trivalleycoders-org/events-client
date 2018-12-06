import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'

const IconButtonLink = ({ classes, children, color, to, variant }) => {
  const LinkComponent = props => <Link
    to={to}
    {...props}
  />
  return (
    <IconButton
      component={LinkComponent}
      variant={variant}
      color={color}
    >
      {children}
    </IconButton>
  )
}

export default IconButtonLink
