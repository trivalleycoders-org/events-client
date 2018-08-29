import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

const ButtonNavLink = ({ to, children}) => {
  return (
    <NavLink
      to={to}
    >
      <Button
        colro='inherit'
      >
        {children}
      </Button>
    </NavLink>
  )
}

export default ButtonNavLink