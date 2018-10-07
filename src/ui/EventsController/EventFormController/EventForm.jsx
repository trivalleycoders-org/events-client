import React from 'react'
import { connect } from 'react-redux'
import * as eventSelectors from 'store/selectors/events-selectors'
import { compose } from 'recompose'
import EventFormForm from './EventFormForm'
import PastEvent from './PastEvent'
import { hasProp } from 'lib/hasProp'
import { EDIT_MODE } from './EventFormController'

// fix?
import styles from './styles'
import AreYouSure from './AreYouSure'

/* Dev */
// eslint-disable-next-line
import { green, yellow } from 'logger'

class EventForm extends React.Component {
  state = {
    imageUrl: '',
    free: this.props.free,
    areYouSure: false,
  }

  onSubmit = (values) => {
    const { mode, eventUpdate, eventCreate } = this.props
    if (mode === EDIT_MODE) {
      eventUpdate(values)
    } else {
      eventCreate(values)
    }
  }

  onCancel = (pristine) => {
    if (pristine) {
      this.props.goBack()
    } else {
      this.setState({ areYouSure: true })
    }
  }

  closeModal = (close) => {
    // the modal always closes when button yes
    // or no is clicked
    this.setState({ areYouSure: false })
    // but the form only closes on yes click
    if (close) {
      this.props.goBack()
    }
  }

  freeClick = () => {
    this.setState((prevState) => {
      return {free: !prevState.free}
    })
  }

  render() {

    const { areYouSure } = this.state
    const event = hasProp('event', this.props) ? this.props.event : {}

    return (
      <div>
        <AreYouSure open={areYouSure} close={this.closeModal} />
        <PastEvent
          event={event}
        />
        <EventFormForm
          event={event}
          initialValues={event}
          freeClick={this.freeClick}
          free={this.free}
          onCancel={this.onCancel}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mstp = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  return {
    event: eventSelectors.getEventById(state, eventId),
    eventId,
  }
}

export default compose(
  connect(mstp)
)(EventForm)