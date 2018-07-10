import React from 'react'
import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
                                
import TextFieldRedux from 'ui/ui-elements/TextFieldRedux'
import SelectRedux from 'ui/ui-elements/SelectRedux'
import StartEndDateRedux from 'ui/ui-elements/StartEndDateRedux'
import CheckboxRedux from 'ui/ui-elements/CheckboxRedux'
import validate from './validate'
import styles from './styles'
import UploadImage from 'ui/ui-elements/UploadImage'

/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
import { green } from 'logger'

const EDIT_MODE = 'edit-mode'
const CREATE_MODE = 'create-mode'

const shapeDataOut = (formValues) => {
  const dates = pick(['combinedDateTime'], formValues)
  const tags = pick(['tag01', 'tag02', 'tag03'], formValues)

  const fieldsToOmit = ['combinedDateTime', 'tag01', 'tag02', 'tag03']
  const fv0 = omit(fieldsToOmit, formValues)
  // If free=true, remove field 'price' if present
  var freeTrue =  formValues.free
  const fv1 = freeTrue ? omit(['price'], fv0) : fv0

  const mergedData = mergeAll([
    {endDateTime: dates.combinedDateTime.endDate},
    {startDateTime: dates.combinedDateTime.startDate},
    {tags: values(tags)},
    fv1
  ])
  // green('mergedData', mergedData)
  return mergedData
}
class NewEvent extends React.Component {
  state = {
    values: '',
    imageUrl: '',
    free: this.props.free,
  }

  onSubmit = (values) => {
    const { mode, requestCreateEvent, requestPatchOneEvent, unsetEdit_id } = this.props
    const validatedValues = shapeDataOut(values)
    this.setState({
      values: validatedValues
    })
    green('EventForm: validatedValues', validatedValues)
    if (mode === EDIT_MODE) {
      green('onSubmit: mode', mode)
      requestPatchOneEvent(validatedValues)
      // unsetEdit_id()
    } else {
      green('onSubmit: mode', mode)
      requestPatchOneEvent(validatedValues)
      // requestCreateEvent(validatedValues)
    }
    

    /* <Redirect path='/my-events' /> */
  }

  freeClick = () => {
    this.setState((prevState) => {
      return {free: !prevState.free}
    })
  }
  
  render() {
    const { classes, handleSubmit, pastEvent, pristine, reset, submitting } = this.props
    // green('_id', _id)
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
              // required
              />
            </div>
            <div>

            </div>
            <div className={classes.dateArea}>
              <StartEndDateRedux
                disablePast
                fieldName='combinedDateTime'
                fieldLabel='Date & Time'
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
              >
                <MenuItem value='quadcopter'>Quadcopter</MenuItem>
                <MenuItem value='octocopter'>Octocopter</MenuItem>
                <MenuItem value='racing'>Racing</MenuItem>
                <MenuItem value='video'>Video</MenuItem>
                <MenuItem value='startup'>Startup</MenuItem>
              </SelectRedux>

            </div>

            <div className={classes.tagArea}>
              <TextFieldRedux
                fieldLabel='tag 1'
                fieldName='tag01'
              />
              <TextFieldRedux
                fieldLabel='tag 2'
                fieldName='tag02'
              />
              <TextFieldRedux
                fieldLabel='tag 3'
                fieldName='tag03'
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

// hard coded data for dev
// const initData = {
//   imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
//   category: 'Octocopter',
//   title: 'Event Title',
//   combinedDateTime: {
//     startDate: new Date(), // needs nesting
//     endDate: new Date(), // needs nesting
//   },
//   free: true,
//   linkToUrl: 'link-to-url',
//   organization: 'some org',
//   price: 25, // absent if free=true
//   tag01: 't1', // un-nest
//   tag02: 't2', // un-nest
//   tag03: 't3', // un-nest
//   venue: 'A place near me',
// }

const shapeDataIn = (data) => {
  
  
  // is it a past event
  const r1 = omit(['tags', 'startDateTime', 'endDateTime'], data)
  const r2 = mergeAll ([
    r1,
    zipObj(
        ['combinedDateTime'],
        [zipObj(['startDate', 'endDate'], [data.startDateTime, data.endDateTime])]
      ), 
    zipObj(['tag01', 'tag02', 'tag03'], data.tags)
  ])
  // green('shapeData: r2', r2)
  return r2
}

const mapStateToProps = (state) => {
  
  const _id = eventSelectors.getEventEdit_id(state)
  // if there is an _id then form is in edit mode
  const mode = _id ? EDIT_MODE : CREATE_MODE
  green('mapStateToProps: mode', mode)
  if (_id) {
    const data = eventSelectors.getOneEvent(state, _id)
    const startDate = prop('startDateTime', data)
    const pastEvent = isBefore(startDate, new Date())
    const shapedData = shapeDataIn(data)
    
    return {
      initialValues: shapedData,
      free: prop('free', shapedData),
      mode,
      pastEvent,
    }
  } else {
    return {
      free: false,
      mode,
    }
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions),
  reduxForm({
    form: 'NewEvent',
    validate,
  }),
)(NewEvent)