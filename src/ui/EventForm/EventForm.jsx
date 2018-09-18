import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Typography,
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import { mergeAll, omit, pick, prop, zipObj } from 'ramda'
import isBefore from 'date-fns/isBefore'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventSelectors from 'store/selectors/events-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'

import ChipRedux from 'ui/ui-elements/ChipRedux'
import TextFieldRedux from 'ui/ui-elements/TextFieldRedux'
import StartEndDateRedux from 'ui/ui-elements/StartEndDateRedux'
import CheckboxRedux from 'ui/ui-elements/CheckboxRedux'
import styles from './styles'
import UploadImage from 'ui/ui-elements/UploadImage'
import AreYouSure from './AreYouSure'
import { validateModel } from 'models'
import Event from './EventModel'
import PostalCodesRedux from 'ui/ui-elements/PostalCodesRedux'

/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
// eslint-disable-next-line
import { green } from 'logger'

const EDIT_MODE = 'edit-mode'
const CREATE_MODE = 'create-mode'

const shapeDataOut = (formValues, currentUserId) => {
  // dates
  const dates = pick(['combinedDateTime'], formValues)
  // postalCode - server expects postalCode._id which it uses to lookup
  // city, state & postalCode
  const postalCodeId = formValues.postalCode._id
  // remove props not needed
  const formValues0 = omit(['combinedDateTime', 'postalCode'], formValues)
  // merge it
  const mergedData = mergeAll([
    formValues0,
    {endDateTime: dates.combinedDateTime.endDate},
    {startDateTime: dates.combinedDateTime.startDate},
    {postalCodeId: postalCodeId},
    {userId: currentUserId}
  ])
  return mergedData
}
class EventForm extends React.Component {
  state = {
    values: '',
    imageUrl: '',
    free: this.props.free,
    goBack: this.props.history.goBack,
    areYouSure: false,
  }

  goBack = () => {
    this.state.goBack()
  }

  onSubmit = (values) => {
    const { mode, eventCreateRequest, eventUpdateOneRequest, editIdUnset } = this.props
    const reshapedData = shapeDataOut(values, this.props.currentUserId)

    this.setState({
      values: reshapedData
    })
    if (mode === EDIT_MODE) {
      eventUpdateOneRequest(reshapedData)
      editIdUnset()
    } else {
      eventCreateRequest(reshapedData)
    }
    this.goBack()
  }

  onCancel = (pristine) => {
    if (pristine) {
      this.goBack()
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
      this.goBack()
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
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <AreYouSure open={areYouSure} close={this.closeModal} />
        <div className={classes.pageWrapper}>
          {
            pastEvent
              ? <div>
                  <Typography variant='display1' className={classes.pastEvent}>
                    This event is in the past
                  </Typography></div>
              : null
          }
          <form>
            <UploadImage
              fieldName='imageUrl'
              fieldLabel='Upload Image'
            />
            <TextFieldRedux
              fieldName='title'
              fieldLabel='Event title'
              fullWidth
              required={true}
              rows={2}
              error={true}
            />
            <TextFieldRedux
              fullWidth
              fieldLabel='Organization'
              fieldName='organization'
            />
            <StartEndDateRedux
              disablePast
              fieldName='combinedDateTime'
              fieldLabel='Date & Time'
              fullWidth
              required={true}

            />
            <TextFieldRedux
              fullWidth
              fieldLabel='Venue Name'
              fieldName='venueName'
              required={true}
            />
            <TextFieldRedux
              fullWidth
              fieldLabel='Link to Url'
              fieldName='linkToUrl'
              required={true}
            />
            <PostalCodesRedux
              fieldName='postalCode'
              fieldLabel='Postal Code'
              required={false}
            />
            {
              !this.state.free
                ? <TextFieldRedux
                    fullWidth
                    fieldLabel='Price'
                    fieldName='price'
                    disabled={this.state.free}
                  />
                : null
            }
            <CheckboxRedux
              fieldLabel='Free'
              fieldName='free'
              onChange={() => this.freeClick()}
            />
            <ChipRedux
              fieldLabel='Tags'
              fieldName='tags'
            />
            <div>
              <Button type='button' onClick={() => this.onCancel(pristine)} disabled={submitting}>
                Cancel
              </Button>
              <Button
                type='button'
                onClick={handleSubmit(this.onSubmit)}
                disabled={pristine || submitting}
              >
                Submit
              </Button>
              <Button type='button' color='secondary' disabled={submitting} onClick={reset}>
                Delete
              </Button>
            </div>
          </form>
          <ShowValues values={this.state.values} />
        </div>
      </MuiPickersUtilsProvider>
    )
  }
}

const shapeDataIn = (data) => {

  const r1 = omit(['startDateTime', 'endDateTime'], data)
  const r2 = mergeAll ([
    r1,
    zipObj(
        ['combinedDateTime'],
        [zipObj(['startDate', 'endDate'], [data.startDateTime, data.endDateTime])]
      ),
  ])
  return r2
}

const mapStateToProps = (state) => {
  const _id = eventSelectors.getEventEdit_id(state)
  // if there is an _id then form is in edit mode
  const mode = _id ? EDIT_MODE : CREATE_MODE
  const currentUserId = authSelectors.getUserId(state)
  // green('currentUserId', currentUserId)
  if (_id) {
    const data = eventSelectors.getOneEvent(state, _id)
    const startDate = prop('startDateTime', data)
    const pastEvent = isBefore(startDate, new Date())
    const shapedData = shapeDataIn(data)

    return {
      free: prop('free', shapedData),
      initialValues: shapedData,
      mode,
      pastEvent,
      currentUserId,
    }
  } else {
    return {
      free: false,
      initialValues: {},
      mode,
      pastEvent: false,
      currentUserId,
    }
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions),
  reduxForm({
    form: 'NewEvent',
    // validate,
    // asyncBlurFields: ['combinedDateTime']
  })
)(EventForm)

EventForm.propTypes = {
  classes: PropTypes.object.isRequired,
  free: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  pastEvent: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
}


