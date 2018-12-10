import React from 'react'
import { EDIT_MODE } from './EventFormContainer'
import EventSubForm from './EventSubForm'
import AreYouSure from './AreYouSure'
import PageTitle from 'ui/elements/PageTitle'
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
      return { free: !prevState.free }
    })
  }

  render() {
    const { areYouSure } = this.state
    const { event, mode } = this.props

    return (
      <div id='EventForm'>
        <AreYouSure open={areYouSure} close={this.closeModal} />
        <PageTitle>
          {(mode !== 'edit-mode') 
            ?
            'Create Event'
            :
            'Edit Event'
          }
        </PageTitle>
        <EventSubForm
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

export default EventForm
