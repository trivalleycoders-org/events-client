import React from 'react'
import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  MenuItem,
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import { has } from 'ramda'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventSelectors from 'store/selectors/events-selectors'
                                
import TextFieldRedux from 'ui/ui-elements/TextFieldRedux'
import SelectRedux from 'ui/ui-elements/SelectRedux'
import StartEndDateRedux from 'ui/ui-elements/StartEndDateRedux'
import CheckboxRedux from 'ui/ui-elements/CheckboxRedux'
import validate from './validate'
import styles from './styles'
import UploadWrapped from 'ui/ui-elements/UploadImage'

/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
import { green } from 'logger'

const hasImageUrl = has('imageUrl')
const hasTag01 = has('tag01')
const hasTag02 = has('tag02')
const hasTag03 = has('tag03')

const populateEvent = (values) => {
  const { startDate, endDate } = values.combinedDateTime
  const startDateISO = new Date(startDate).toISOString()
  const endDateISO = new Date(endDate).toISOString()
  green('populateEvent: values', values)
  //  const 
  const toDb = {
    category: values.category,
    endDateTime: endDateISO,
    imageUrl: values.imageUrl,
    linkToUrl: values.linkToUrl,
    organization: values.organization,
    startDateTime: startDateISO,
    title: values.title,
    venue: values.venue,
  }
  if (values.free) {
    toDb.free = true
  } else {
    toDb.price = values.price
  }
  if (hasImageUrl(values)) {
    toDb.imageUrl = 'to do: imageUrl'
  }
  const tags = []
  if (hasTag01(values)) {
    tags.push(values.tag01)
  }
  if (hasTag02(values)) {
    tags.push(values.tag02)
  }
  if (hasTag03(values)) {
    tags.push(values.tag03)
  }
  if (tags.length > 0) {
    toDb.tags = tags
  }
  return toDb
}

class NewEvent extends React.Component {
  state = {
    values: '',
    imageUrl: '',
    endDateMin: null,
    free: this.props.initialValues.free || false,
  }

  getImageUrl = (url) => {
    green('getImageData: url', url)
  }

  onSubmit = (values) => {
    const validatedValues = populateEvent(values)
    // this.setState({
    //   values: validatedValues
    // })
    // this.props.requestCreateEvent(validatedValues)
  }
  startDateChange = (date) => {
    // green('startDateChange', typeof date)
    this.setState({
      endDateMin: date,
    })
  }

  freeClick = () => {
    // green('freeClick')
    this.setState((prevState) => {
      return {free: !prevState.free}
    })
  }
  
  render() {
    const { classes, handleSubmit, pristine, reset, submitting } = this.props
    green('NewEvent: props', this.props)
    // green('eventSelectors', eventSelectors)
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <div className={classes.pageWrapper}>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <UploadWrapped
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
                <MenuItem value='Quadcopter'>Quadcopter</MenuItem>
                <MenuItem value='Octocopter'>Octocopter</MenuItem>
                <MenuItem value='Racing'>Racing</MenuItem>
                <MenuItem value='Video'>Video</MenuItem>
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
              <Button type='submit' disabled={pristine || submitting}>
                Submit
              </Button>

              {/* This button is used for testing. Eventually delete.
               <Button type='submit' >
                Submit
              </Button> */}
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

const initData = {
  imageUrl: 'image-url',
  category: 'Octocopter',
  title: 'Event Title',
  combinedDateTime: {
    startDate: new Date(),
    endDate: new Date(),
  },
  // endDateTime: new Date(),
  free: true,
  linkToUrl: 'link-to-url',
  organization: 'some org',
  price: 25,
  // startDateTime: new Date(),
  tag01: 't1',
  tag02: 't2',
  tag03: 't3',
  venue: 'A place near me',
}

const mapStateToProps = (state) => {
  // const _id = eventSelectors.getEventEdit_id(state)
  // const event = eventSelectors.getOneEvent(state, _id)
  // const o = {
  //   initialValues: event
  // }
  // green('NewEvent.mapStateToProps: o', o)
  return {
    initialValues: initData
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