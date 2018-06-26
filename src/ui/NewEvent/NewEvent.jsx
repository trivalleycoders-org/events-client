import React from 'react'
import { compose } from 'recompose'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { 
  Button,
  MenuItem,
  Typography
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'

/* User */
import DateTimeField from 'ui/ui-elements/DateTimeField'
import * as eventActions from 'store/actions/event-actions'
import SelectField from 'ui/ui-elements/SelectField'
import TextInput from 'ui/ui-elements/TextInput'
import { green } from 'logger'
import DateTimePickerRow from 'ui/ui-elements/DateTimePickerRow'

const styles = theme => ({
  dateGroup: {
    display: 'flex',

  },
  dummyImage: {
    backgroundColor: 'gray',
    height: '230px',
    width: '460px',

  },
  categoryArea: {
    padding: '20px 0 20px 0'
  },
  dateArea: {
    padding: '20px 0 20px 0'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  imageArea: {
    border: '1px solid white'
  },
  organizationArea: {
    padding: '20px 0 20px 0'
  },
  pageWrapper: {
    padding: '20px'
  },
  priceArea: {
    padding: '20px 0 20px 0'
  },
  tagArea: {
    padding: '20px 0 20px 0'
  },
  timeField: {
    paddingRight: '15px'
  },
  titleArea: {
    padding: '20px 0 20px 0'
  },
  uploadControls: {
    height: '100px',
  },
  venuArea: {
    padding: '20px 0 20px 0'
  },
})

const populateEvent =(values) => {
  if (!values.startDateTime) {
    green('startDateTime', values.startDateTime)
    
  }
  return ({
    category: values.category,
    endDateTime: values.endDateTime || new Date(),
    imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
    organization: values.organization,
    price: values.price,
    startDateTime: values.startDateTime || new Date(),
    tags: [
      values.tag01,
      values.tag02,
      values.tag03
    ],
    title: values.title,
    venu: values.venu,
  })
}

const NewEvent = ({ classes, handleSubmit, pristine, reset, requestCreateEvent, submitting, values }) => {

  const onSubmit = (values) => {
    green('onSubmit: values', values)
    // console.log('handleSubmit')
    console.log('values', values)
    
    const toDb = populateEvent(values)
    green('toDb', toDb)
    // requestCreateEvent(toDb)

  }

  return (
    <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
      <div className={classes.pageWrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 
          <div className={classes.imageArea}>
            <div className={classes.dummyImage}>
              <Typography variant="body2" gutterBottom>
                Image will got here
              </Typography>
            </div>
            <div className={classes.uploadControls}>
              <TextInput
                label='url to image'
                name='imageUrl'
              />
            </div>
          </div>
           */}
          <div className={classes.titleArea}>
            <TextInput
              label='Event title'
              name='title'
              id='title'
            />
          </div>
          <div>
            <DateTimePickerRow
              name='time-picker'
            />
          </div>
          <div className={classes.dateArea}>
            {/* 
            <DateTimeField
              name='startDateTime'
              // placeholder='Data'
            />
             */}
            {/* <Field
              animateYearScrolling={false}
              autoSubmit={false}
              className={classes.timeField}
              component={DateTimeChooser}
              inputProps={{ id: 'startDateTime' }}
              label='Start date & time'
              name='startDateTime'
              // placeholder='Data'
            />
            <Field
              animateYearScrolling={false}
              autoSubmit={false}
              className={classes.timeField}
              component={DateTimeChooser}
              inputProps={{ id: 'endDateTime' }}
              label='End date & time'
              name='endDateTime'
              // placeholder='Data'
            /> */}
          </div>
          {/* 
          <div className={classes.organizationArea}>
            <TextInput
              fullWidth
              label='Organization'
              name='organization'
            />
          </div>
          
          <div className={classes.venuArea}>
            <TextInput
              fullWidth
              label='Venu'
              name='venu'
            />
          </div>
          <div className={classes.priceArea}>
            <TextInput
              fullWidth
              label='Price'
              name='price'
            />
          </div>
          <div className={classes.categoryArea}>
            <SelectField
              name='category'
            >
              <MenuItem value='Quadcopter'>Quadcopter</MenuItem>
              <MenuItem value='Octocopter'>Octocopter</MenuItem>
              <MenuItem value='Racing'>Racing</MenuItem>
              <MenuItem value='Video'>Video</MenuItem>
            </SelectField>
            
          </div>
          <div className={classes.tagArea}>
            <TextInput
              label='tag 1'
              name='tag01'
            />
            <TextInput
              label='tag 2'
              name='tag02'
            />
            <TextInput
              label='tag 3'
              name='tag03'
            />
          </div>
           */}
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
      </div>
    </MuiPickersUtilsProvider>
  )
}

const mapStateToProps = (state) => {
  return { }
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'form',
  }),
  connect(mapStateToProps, eventActions)
)(NewEvent)