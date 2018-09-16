// This file is shared across the demos.

import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'

import { Home, Event } from '@material-ui/icons'

const linkStyle = {
  textDecoration: 'none'
}

export const menuLoggedOut = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <Link to='/' style={linkStyle}>
        <ListItemText primary='Home' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Link to='/register' style={linkStyle}>
        <ListItemText primary='Register' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Link to='/login' style={linkStyle}>
        <ListItemText primary='Login' />
      </Link>
    </ListItem>
  </div>
)

export const menuLoggedIn = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <Link to='/' style={linkStyle}>
        <ListItemText primary='Home' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Event />
      </ListItemIcon>
      <Link to='/new-event' style={linkStyle}>
        <ListItemText primary='New Event' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Link to='/my-events' style={linkStyle}>
        <ListItemText primary='My Events' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Link to='/settings' style={linkStyle}>
        <ListItemText primary='Settings' />
      </Link>
    </ListItem>
  </div>
)

