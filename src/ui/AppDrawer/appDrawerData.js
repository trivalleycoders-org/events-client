// This file is shared across the demos.

import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import { Home, Event } from '@material-ui/icons'

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
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Register' />
      </ListItem>
    </Link>
    <Link to='/login' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
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
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='My Events' />
      </ListItem>
    </Link>
    <Link to='/settings' style={linkStyle}>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Settings' />
      </ListItem>
    </Link>
  </div>
)

