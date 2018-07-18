import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  MenuItem,
  Typography,
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import { mergeAll, omit, pick, prop, values, zipObj } from 'ramda'
import isBefore from 'date-fns/isBefore'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventSelectors from 'store/selectors/events-selectors'

import ChipRedux from 'ui/ui-elements/ChipRedux'
import TextFieldRedux from 'ui/ui-elements/TextFieldRedux'
import SelectRedux from 'ui/ui-elements/SelectRedux'
import StartEndDateRedux from 'ui/ui-elements/StartEndDateRedux'
import CheckboxRedux from 'ui/ui-elements/CheckboxRedux'
import validate from './validate'
import styles from './styles'
import UploadImage from 'ui/ui-elements/UploadImage'

/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
// eslint-disable-next-line
import { green } from 'logger'

const EDIT_MODE = 'edit-mode'
const CREATE_MODE = 'create-mode'

const shapeDataOut = (formValues) => {
  // for non-required fields, empty fields should not be written to db
  // includes tags, free||price
  // green('shapeDataOut IN:', formValues)
  const dates = pick(['combinedDateTime'], formValues)
  const fv0 = omit(['combinedDateTime'], formValues)
  // If free=true, remove field 'price' if present
  const freeTrue =  formValues.free
  const fv1 = freeTrue ? omit(['price'], fv0) : fv0
  green('shapeDataOut: fv1', fv1)
  // const fv2 = fv1.tags.length === 0 ? omit(['tags'], formValues) : fv1
  const mergedData = mergeAll([
    {endDateTime: dates.combinedDateTime.endDate},
    {startDateTime: dates.combinedDateTime.startDate},
    // {tags: formValues.tags},
    fv1
  ])
  green('shapeDataOut OUT:', mergedData)
  return mergedData
}
class EventForm extends React.Component {
  state = {
    values: '',
    imageUrl: '',
    free: this.props.free,
    goBack: this.props.history.goBack,
  }

  onSubmit = (values) => {
    const { mode, requestCreateEvent, requestPatchOneEvent, unsetEdit_id } = this.props
    const reshapedData = shapeDataOut(values)
    this.setState({
      values: reshapedData
    })
    if (mode === EDIT_MODE) {
      requestPatchOneEvent(reshapedData)
      unsetEdit_id()
    } else {
      requestCreateEvent(reshapedData)
    }
    this.state.goBack()
  }

  freeClick = () => {
    this.setState((prevState) => {
      return {free: !prevState.free}
    })
  }
  
  render() {
    const { classes, handleSubmit, pastEvent, pristine, reset, submitting } = this.props
    
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <div className={classes.pageWrapper}>
          {
            pastEvent
              ? <div>
                  <Typography variant='display1' className={classes.pastEvent}>
                    This event is in the past
                  </Typography></div>
              : null
          } 
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <UploadImage
              fieldName='imageUrl'
              fieldLabel='Upload Image'
            />
            <div className={classes.titleArea}>
              <TextFieldRedux
                fieldName='title'
                fieldLabel='Event title'
                fullWidth
                rows={2}
              // required
              />
            </div>
            <div className={classes.dateArea}>
              <StartEndDateRedux
                disablePast
                fieldName='combinedDateTime'
                fieldLabel='Date & Time'
                fullWidth
                required
                
              />
            </div>
            <div className={classes.organizationArea}>
              <TextFieldRedux
                fullWidth
                fieldLabel='Organization'
                fieldName='organization'
              />
            </div>
            <div className={classes.venueArea}>
              <TextFieldRedux
                fullWidth
                fieldLabel='Venue'
                fieldName='venue'
              />
            </div>
            <div className={classes.venueArea}>
              <TextFieldRedux
                fullWidth
                fieldLabel='Link to Url'
                fieldName='linkToUrl'
              />
            </div>
            <div className={classes.priceArea}>
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
            </div>
            <div className={classes.categoryArea}>
              <SelectRedux
                fieldName='category'
                fieldLabel='Category'
                fullWidth
              > 
                <MenuItem value='select' disabled>Select a category</MenuItem>
                <MenuItem value='quadcopter'>Quadcopter</MenuItem>
                <MenuItem value='octocopter'>Octocopter</MenuItem>
                <MenuItem value='battleDrone'>Battle Drone</MenuItem>
              </SelectRedux>
            </div>
            <div className={classes.tagArea}>
              <ChipRedux
                fieldLabel='Tags'
                fieldName='tags'
              />
            </div>
            <div>
              <Button type='button'>
                Cancel
              </Button>
              <Button type='submit' disabled={pristine || submitting}>
                Submit
              </Button>
              <Button type='button' disabled={pristine || submitting} onClick={reset}>
                Clear Values
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
  // green('shapeDataIn: r2', r2)
  return r2
}

const mapStateToProps = (state) => {
  const _id = eventSelectors.getEventEdit_id(state)
  // if there is an _id then form is in edit mode
  const mode = _id ? EDIT_MODE : CREATE_MODE
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
    }
  } else {
    return {
      free: false,
      initialValues: {},
      mode,
      pastEvent: false,
    }
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions),
  reduxForm({
    form: 'NewEvent',
    validate,
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


