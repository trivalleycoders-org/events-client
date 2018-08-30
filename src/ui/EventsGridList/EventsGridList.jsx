import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Collapse,
  ListItemSecondaryAction,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import InboxIcon from '@material-ui/icons/MoveToInbox';

import { Favorite as FavoriteIcon } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { Share as ShareIcon } from '@material-ui/icons'
import { has } from 'ramda'

/* User */
import Tag from './Tag'
import { formattedDate } from 'lib/formattedDate'

const divComp = () => {
  return (
    <div>

    </div>
  )
}

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const hasTags = has('tags')

// StartDateTime
// organization
// linkToUrl



class EventGrid extends React.Component {

  state = {
    open: false,
  }
  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }



  render() {
    const { classes, events } = this.props
    return (
      <div>
      <List
      subheader='the subheader'

      >
      <ListSubheader>More Subheaders</ListSubheader>
      {events.map(e => {
        // green('e', e)
        const secondaryText = `${formattedDate(e.startDateTime)}`
        return (
          <div>
          <ListItem key={e._id} component={divComp}>
            <div>div one</div>
            <div>div two</div>
          </ListItem>
          </div>
        )
      })}

    </List>
    <ListItem button onClick={this.handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText inset primary="Inbox" />
      {this.state.open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Starred" />
          </ListItem>
        </List>
    </Collapse>
    </div>
    )
  }

}

const styles = {
  action: {
    border: 'none',
  },
  actions: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: 41.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px 0px 15px',
  },
  card: {
    minHeight: 0,
    minWidth: 0,
    padding: '15px 5px 0 5px',
  },
  cardContent: {
    padding: '5px 15px 5px 15px',
    borderBottom: 'solid 0.5px gray',
  },
  link: {
    textDecoration: 'none',
  },
  tags: {
    display: 'flex',
    flexFlow: 'row nowrap',
    overflow: 'hidden',
  },
  media: {
    height: 0,
    paddingTop: '50%',
  },
  organization: {
    height: '33px',
    lineHeight: '16.5px',
    overflow: 'hidden',
    paddingTop: '7px',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  outer: {
    paddingBottom: '40px'
  },
  time: {
    overflow: 'hidden',
    paddingTop: '.4rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  title: {
    height: '40px',
    letterSpacing: '0px',
    lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
    paddingTop: '5px',
  },
  venue: {
    overflow: 'hidden',
    paddingTop: '7px',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}

export default withStyles(styles)(EventGrid)

