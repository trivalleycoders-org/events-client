import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { mergeAll } from 'ramda'
import {
  Typography,
} from '@material-ui/core'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventsSelectors from 'store/selectors/events-selectors'
import * as requestSelectors from 'store/selectors/request-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import { eventsReadRequestKey } from 'store/actions/event-actions'
import EventCards from './EventCards'
import shortid from 'shortid'
import MyEvents from './MyEvents'
import EventDetails from './EventDetails'
import EventFormController from './EventFormController'
import { EDIT_MODE, CREATE_MODE } from './EventFormController'


/* Dev */
// eslint-disable-next-line
import { green, blue } from 'logger'

const shapeEditDataOut = (formValues, currentUserId) => {
  const mergedData = mergeAll([
    formValues,
    {userId: currentUserId}
  ])
  return mergedData
}

const getEventsForUserId = (events, userId) => {
  return events.filter(e => e.userId === userId)
}

class EventsController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      instanceId: shortid.generate()
    }
  }

  componentDidMount() {
    this.props.eventsReadRequest('Events')
    // green('EventsController: componentDidMount', this.state.instanceId)
  }

  eventCreate = (formValues) => {
    const data = shapeEditDataOut(formValues)
    this.props.eventCreateRequest(data)
    this.goBack()
  }

  eventDelete = () => {
    this.goBack()
  }

  eventUpdate = (formValues) => {
    const data = shapeEditDataOut(formValues)
    this.props.eventUpdateOneRequest(data)
    this.goBack()
  }

  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { classes, userId, events, match } = this.props

    // green('EventsController: match', match)

    const eventId = match.params.id

    // MAYBE NEED
    // if (this.props.requestReadAllEvents.status !== 'success') {
    //   // green('LOADING')
    //   return (
    //     <Typography variant='display1'>
    //       Loading
    //     </Typography>
    //   )
    // }

    return (
      <div className={classes.pageWrapper}>
        <Route
          exact
          path='/'
          render={props =>
            <EventCards
              events={events}
            />
          }
        />
        <Route
          path='/my-events'
          render={props =>
            <MyEvents
              events={getEventsForUserId(events, userId)}
              eventCreate={this.eventCreate}
            />
          }
        />
        <Route
          path='/event-details/:id'
          render={props =>
            <EventDetails
              {...props}
              eventCreate={this.eventCreate}
              eventDelete={this.eventDelete}
            />
          }
        />
        <Route
          path='/create-event'
          render={props =>
          <EventFormController
            { ...props }
            eventCreate={this.eventCreate}
            goBack={this.goBack}
            mode={CREATE_MODE}
          />
        } />
        <Route path='/edit-event/:id' render={props =>
          <EventFormController
            { ...props }
            eventUpdate={this.eventUpdate}
            goBack={this.goBack}
            mode={EDIT_MODE}
          />
        } />

      </div>
    )
  }
}
// <Route path='/event-details/:id' component={EventDetails} />


const mapStateToProps = (state, ownProps) => {
  // green('EventsController: ownProps.match', ownProps.match)
  return {
    events: eventsSelectors.getAllEvents(state),
    requestReadAllEvents: requestSelectors.getRequest(state, eventsReadRequestKey),
    userId: authSelectors.getUserId(state)
  }
}

const styles = theme => ({
  pageWrapper: {
    padding: '80px',
  },
})

export default compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, eventActions),
)(EventsController)

// export default compose(
//   withStyles(styles),
//   connect(mapStateToProps, eventActions)
// )(withRouter(Events))


