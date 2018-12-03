// This file is shared across the demos.

import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Login from '@material-ui/icons/Lock'
import Logout from '@material-ui/icons/LockOpen'
import Register from '@material-ui/icons/PersonAdd'
import Settings from '@material-ui/icons/Settings'
import { Home, Event, List } from '@material-ui/icons'

const linkStyle = {
  textDecoration: 'none'
}

export const menuLoggedOut = (
  <div>
    <Link to='/' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
    </Link>
    <Link to='/register' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <Register />
        </ListItemIcon>
        <ListItemText primary='Register' />
      </ListItem>
    </Link>
    <Link to='/login' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <Login />
        </ListItemIcon>
        <ListItemText primary='Login' />
      </ListItem>
    </Link>
  </div>
)

export const menuLoggedIn = (
  <div>
    <Link to='/' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
    </Link>
    <Link to='/create-event' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <Event />
        </ListItemIcon>
        <ListItemText primary='Create Event' />
      </ListItem>
    </Link>
    <Link to='/my-events' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <List />
        </ListItemIcon>
        <ListItemText primary='My Events' />
      </ListItem>
    </Link>
    <Link to='/settings' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary='Settings' />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      <ListItemText primary='Logout' />
    </ListItem>
  </div>
)
