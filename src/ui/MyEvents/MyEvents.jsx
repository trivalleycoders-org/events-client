import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
} from '@material-ui/core'
/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventsSelectors from 'store/selectors/events-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import EventNew from './EventNew'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class MyEvents extends React.Component {

  state = {
    navigateAway: false
  }

  handleItemClick = (_id) => {
    green('handleItemClick', _id)
    this.props.editIdSet(_id)
    this.setState({
      navigateAway: true,
    })
  }

  render() {
    const { classes, events, width } = this.props
    const { navigateAway } = this.state
    if (navigateAway) {
      return <Redirect to={'/new-event'}/>
    }

    return (
      <div className={classes.wrapper}>
        <Grid container spacing={Number(8)}>
          {events.map(n => {
            return (
              <Grid key={n._id} item xs={12} lg={6}>
                <EventNew
                  event={n}
                  handleItemClick={this.handleItemClick}
                />
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  wrapper: {
    [theme.breakpoints.only('sm')]: {
      paddingLeft: '10%',
      paddingRight: '10%',
    },
    [theme.breakpoints.only('md')]: {
      paddingLeft: '20%',
      paddingRight: '20%',
    },
  },
})

MyEvents.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  const currentUserId = authSelectors.getUserId(state)
  return {
    events: eventsSelectors.getAllEvents(state, currentUserId),
    currentUserId,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions)
)(MyEvents)
