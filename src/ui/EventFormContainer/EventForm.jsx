import React from 'react'
// import PastEvent from './PastEvent'
import { EDIT_MODE } from './EventFormContainer'
import EventSubForm from './EventSubForm'
// import TestIt from './TestIt'

// fix?
// import styles from './styles'
import AreYouSure from './AreYouSure'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'



// const getOneEventById = (events, eventId) => {
//   const r = events.find(e => e._id === eventId)
//   return r
// }

// const getOneEventForEdit = (events, eventId) => {
//   green('events', events)
//   green('eventId', eventId)
//   const e = getOneEventById(events, eventId)
//   return shapeEditDataIn(e)
// }

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
    // green('EventForm: props.event', this.props.event)
    const { areYouSure } = this.state
    const { event } = this.props
    // green('EventForm: event', event)

    return (
      <div id='EventForm'>
        <AreYouSure open={areYouSure} close={this.closeModal} />
        {/* <PastEvent
          event={event}
        /> */}
        <EventSubForm
          // event={event}
          initialValues={event}
          freeClick={this.freeClick}
          free={this.free}
          onCancel={this.onCancel}
          onSubmit={this.onSubmit}
          // mode={mode}
        />
      </div>
    )
  }
}

export default EventForm