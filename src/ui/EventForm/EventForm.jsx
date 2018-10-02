import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Typography,
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'


/* User */
// import * as eventActions from 'store/actions/event-actions'
// import * as eventSelectors from 'store/selectors/events-selectors'
// import * as authSelectors from 'store/selectors/auth-selectors'
import Form from './Form'


// fix?
import styles from './styles'
import AreYouSure from './AreYouSure'

/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
// eslint-disable-next-line
import { green } from 'logger'

const EDIT_MODE = 'edit-mode'
const CREATE_MODE = 'create-mode'

const shapeDataOut = (formValues, currentUserId) => {
  const mergedData = mergeAll([
    formValues,
    {userId: currentUserId}
  ])
  return mergedData
}

class EventForm extends React.Component {
  state = {
    values: '',
    imageUrl: '',
    free: this.props.free,
    areYouSure: false,
    // mode: undefined,
  }

  componentDidMount() {
    const { event } = this.props
    if (!event) {
      return
    } else {

    }

  }

  onSubmit = (values) => {
    // const { mode, eventCreateRequest, eventUpdateOneRequest, editIdUnset } = this.props
    const { mode, eventUpdate, eventCreate } = this.props
    const reshapedData = shapeDataOut(values, this.props.currentUserId)

    // TODO: remove this for production
    this.setState({
      values: reshapedData
    })
    //

    if (mode === EDIT_MODE) {
      // eventUpdateOneRequest(reshapedData)
      eventUpdate(reshapedData)
      // editIdUnset()
    } else {
      // eventCreateRequest(reshapedData)
      eventCreate(reshapedData)
    }
  }

  handleDeleteClick = () => {
    const { /*eventEditId,*/ eventDelete, event } = this.props
    // this.props.eventDeleteOneRequest(eventEditId)
    // this.props.editIdUnset()
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
    const { classes, handleSubmit, pastEvent, pristine, reset, submitting } = this.props
    const { areYouSure } = this.state
    // const enableEdit = mode !== VIEW_MODE
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <AreYouSure open={areYouSure} close={this.closeModal} />
        {
          pastEvent
            ? <div>
                <Typography variant='display1' className={classes.pastEvent}>
                  This event is in the past
                </Typography></div>
            : null
        }
        <Form />
        <ShowValues values={this.state.values} />
      </MuiPickersUtilsProvider>
    )
  }
}

const dataIn = (event) => {

  if (event) {

  }
}

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


