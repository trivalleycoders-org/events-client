import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import EventFormForm from './EventFormForm'
import PastEvent from './PastEvent'
import { hasProp } from 'lib/hasProp'

// fix?
import styles from './styles'
import AreYouSure from './AreYouSure'

/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
// eslint-disable-next-line
import { green, yellow } from 'logger'

export const EDIT_MODE = 'edit-mode'
export const CREATE_MODE = 'create-mode'

class EventForm extends React.Component {
  state = {
    values: '',
    imageUrl: '',
    free: this.props.free,
    areYouSure: false,
  }

  componentDidMount() {
    yellow('EventForm.componentDidMount', this.props.mode)

  }

  componentDidUpdate() {
    yellow('EventForm.componentDidUpdate')
  }

  componentWillUnmout() {
    yellow('App.componentWillUnmount')
  }


  onSubmit = (values) => {
    const { mode, eventUpdate, eventCreate } = this.props

    // TODO: remove this for production
    this.setState({
      values: values
    })
    //

    if (mode === EDIT_MODE) {
      eventUpdate(values)
    } else {
      eventCreate(values)
    }
  }

  handleDeleteClick = () => {
    const { /*eventEditId,*/ eventDelete, event } = this.props
    eventDelete(event._id)
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
    green('EventForm: initialValues', event.initialValues)
    return (
      <div>
        <AreYouSure open={areYouSure} close={this.closeModal} />

        <PastEvent
          event={event}
        />
        <EventFormForm
          event={event}
          initialValues={event.initialValues}
          freeClick={this.freeClick}
          free={this.free}
          onCancel={this.onCancel}
          onSubmit={this.onSubmit}
        />
        <ShowValues values={this.state.values} />
      </div>
    )
  }
}

/*
this.state.free
this.freeClick()
this.onCancel(pristine)
this.onSubmit

*/


//
//
/*

*/


// const mapStateToProps = (state) => {
//   const _id = eventSelectors.getEventEdit_id(state)
//   // if there is an _id then form is in edit mode
//   const mode = _id ? EDIT_MODE : CREATE_MODE
//   const currentUserId = authSelectors.getUserId(state)
//   if (_id) {
//     const data = eventSelectors.getOneEvent(state, _id)
//     const startDate = path(['dates', 'startDateTime'], data)
//     const pastEvent = isBefore(startDate, new Date())
//     const free = path(['free'], data) === undefined ? false :  true

//     return {
//       free: free,
//       initialValues: data,
//       mode,
//       pastEvent,
//       currentUserId,
//       eventEditId: _id,
//     }
//   } else {
//     return {
//       free: false,
//       initialValues: {},
//       mode,
//       pastEvent: false,
//       currentUserId,
//     }
//   }
// }

export default compose(
  withStyles(styles),
)(EventForm)

// EventForm.propTypes = {
//   classes: PropTypes.object.isRequired,
//   free: PropTypes.bool,
//   handleSubmit: PropTypes.func.isRequired,
//   initialValues: PropTypes.object.isRequired,
//   pastEvent: PropTypes.bool.isRequired,
//   pristine: PropTypes.bool.isRequired,
//   reset: PropTypes.func.isRequired,
//   submitting: PropTypes.bool.isRequired,
// }


