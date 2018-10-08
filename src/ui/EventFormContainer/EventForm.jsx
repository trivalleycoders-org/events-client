import React from 'react'
import Form from './Form'
import PastEvent from './PastEvent'
import { EDIT_MODE } from './EventFormContainer'

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
    // green('EventForm: props', this.props)
    const { areYouSure, event, mode } = this.state
    green('EventForm: event', event)

    return (
      <div>
        <AreYouSure open={areYouSure} close={this.closeModal} />
        <PastEvent
          event={event}
        />
        <Form
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