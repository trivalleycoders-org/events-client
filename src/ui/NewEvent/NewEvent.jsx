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

/* User */
import * as eventActions from 'store/actions/event-actions'
import TextFieldRedux from 'ui/ui-elements/TextFieldRedux'
import DateTimeRedux from 'ui/ui-elements/DateTimeRedux'
import SelectRedux from 'ui/ui-elements/SelectRedux'
/* Dev */
import ShowValues from 'ui/ui-elements/ShowValues'
import { green } from 'logger'

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
  
  const sd = new Date(values.startDateTime)
  const startDate = sd.toISOString()
  const ed = new Date(values.endDateTime)
  const endDate = ed.toISOString()
  green(`start:${startDate}, end:${endDate}`)
  // console.log('dt', dt)
  return ({
    category: values.category,
    endDateTime: endDate,
    imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
    organization: values.organization,
    price: values.price,
    startDateTime: endDate,
    tags: [
      values.tag01,
      values.tag02,
      values.tag03
    ],
    title: values.title,
    venu: values.venu,
  })
}

class NewEvent extends React.Component {
  state = {
    values: ''
  }
   
  onSubmit = (values) => {
    const validatedValues = populateEvent(values)
    this.setState({
      values: validatedValues
    })
    this.props.requestCreateEvent(validatedValues)
  }
  render() {
    const { classes, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <MuiPickersUtilsProvider
          utils={DateFnsUtils}
        >
        <div className={classes.pageWrapper}>
          <form onSubmit={handleSubmit(this.onSubmit)}>
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
              <TextFieldRedux
                fieldName='title'
                fieldLabel='Event title'
                
              />
            </div>
            <div>
              
            </div>
            <div className={classes.dateArea}>
              <DateTimeRedux
                fieldName='startDateTime'
                fieldLabel='Start Date & Time'
              />
              <DateTimeRedux
                fieldName='endDateTime'
                fieldLabel='End Dat & Time'
              />
            </div>
            
            <div className={classes.organizationArea}>
              <TextFieldRedux
                fullWidth
                fieldLabel='Organization'
                fieldName='organization'
              />
            </div>
            
            <div className={classes.venuArea}>
              <TextFieldRedux
                fullWidth
                fieldLabel='Venu'
                fieldName='venu'
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
  return { }
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'form',
  }),
  connect(mapStateToProps, eventActions)
)(NewEvent)