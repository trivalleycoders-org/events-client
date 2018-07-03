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
import isValid from 'date-fns/isValid'

/* User */
import * as eventActions from 'store/actions/event-actions'
import TextFieldRedux from 'ui/ui-elements/TextFieldRedux'
import SelectRedux from 'ui/ui-elements/SelectRedux'
import StartEndDateRedux from 'ui/ui-elements/StartEndDateRedux'
/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
import styles from './styles'
import validate from './validate'
import { green } from 'logger'
import UploadImage from './UploadImage';

const populateEvent = (values) => {
  const { startDate, endDate } = values.combinedDateTime
  green('startDate', startDate)
  green('endDtae', endDate)
  green('isValid startDate', isValid(startDate))
  green('isValid endDate', isValid(endDate))
  const startDateISO = new Date(startDate).toISOString()
  green('startDateISO', startDateISO)
  const endDateISO = new Date(endDate).toISOString()
  green('endDateISO', endDateISO)
  green('populateEvent: values', values)

  return ({
    category: values.category,
    endDateTime: endDateISO,
    imageUrl: 'to do: imageUrl',
    linkToUrl: values.linkToUrl,
    organization: values.organization,
    price: values.price,
    startDateTime: startDateISO,
    tags: [
      values.tag01,
      values.tag02,
      values.tag03
    ],
    title: values.title,
    venue: values.venue,
  })
}

class NewEvent extends React.Component {
  state = {
    values: '',
    imageUrl: 'kkk',
    endDateMin: null,
  }

  getImageUrl = (url) => {
    green('getImageData: url', url)
  }

  onSubmit = (values) => {
    const validatedValues = populateEvent(values)
    this.setState({
      values: validatedValues
    })
    this.props.requestCreateEvent(validatedValues)
  }
  startDateChange = (date) => {
    green('startDateChange', typeof date)
    this.setState({
      endDateMin: date,
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
              <TextFieldRedux
                fullWidth
                fieldLabel='Price'
                fieldName='price'
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

            <UploadImage getImageUrl={this.getImageUrl} />

            <div>
              {/*<Button type='submit' disabled={pristine || submitting}>*/}
              {/*Submit*/}
              {/*</Button>*/}
              <Button type='submit' >
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

const mapStateToProps = (state) => {
  return {}
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'form',
    validate,
  }),
  connect(mapStateToProps, eventActions)
)(NewEvent)