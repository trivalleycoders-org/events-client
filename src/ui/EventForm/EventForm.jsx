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
import { dissoc, clone, has, mergeAll, omit, zipObj } from 'ramda'


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

const hasImageUrl = has('imageUrl')
const hasTag01 = has('tag01')
const hasTag02 = has('tag02')
const hasTag03 = has('tag03')

const populateEvent = (values) => {
  const { startDate, endDate } = values.combinedDateTime
  const startDateISO = new Date(startDate).toISOString()
  const endDateISO = new Date(endDate).toISOString()
  green('populateEvent: values', values)
  //  required properties
  const toDb = {
    category: values.category,
    endDateTime: endDateISO,
    imageUrl: values.imageUrl,
    organization: values.organization,
    startDateTime: startDateISO,
    title: values.title,
    venue: values.venue,
  }
  if (values.linkToUrl) {
    toDb.linkToUrl = values.linkToUrl
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

  onSubmit = (values) => {
    this.setState({ vlaues: values})
    const validatedValues = populateEvent(values)
    this.setState({
      values: validatedValues
    })
    this.props.requestCreateEvent(validatedValues)
  }

  freeClick = () => {
    this.setState((prevState) => {
      return {free: !prevState.free}
    })
  }
  
  render() {
    const { classes, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <div className={classes.pageWrapper}>
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
                <MenuItem value='Quadcopter'>Quadcopter</MenuItem>
                <MenuItem value='Octocopter'>Octocopter</MenuItem>
                <MenuItem value='Racing'>Racing</MenuItem>
                <MenuItem value='Video'>Video</MenuItem>
                <MenuItem value='Video'>Startup</MenuItem>
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
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  category: 'Octocopter',
  title: 'Event Title',
  combinedDateTime: {
    startDate: new Date(), // needs nesting
    endDate: new Date(), // needs nesting
  },
  free: true,
  linkToUrl: 'link-to-url',
  organization: 'some org',
  price: 25, // absent if free=true
  tag01: 't1', // un-nest
  tag02: 't2', // un-nest
  tag03: 't3', // un-nest
  venue: 'A place near me',
}

const shapeData = (data) => {
  green('EventForm.shapeData: data', data)
  
  const r1 = omit(['tags', 'startDateTime', 'endDateTime'], clone(data))
  
  green('EventForm.shapeData: r1', r1)
  
  const r2 = mergeAll ([
    r1,
    zipObj(
        ['combinedDateTime'],
        [zipObj(['startDate', 'endDate'], [data.startDateTime, data.endDateTime])]
      ), 
    zipObj(['tag01', 'tag02', 'tag03'], data.tags)
  ])
  green('r2', r2)
  green('EventForm.shapeData: r2', r2)
  return r2
  
}

const mapStateToProps = (state) => {
  const _id = eventSelectors.getEventEdit_id(state)
  const data = eventSelectors.getOneEvent(state, _id)
  green('EventForm.mapStateToProps: data', data)
  const shapedData = shapeData(data)
  return {
    initialValues: shapedData
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

