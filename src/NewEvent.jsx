import React from 'react'
import { compose } from 'recompose'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateTimeChooser from './DateTimeChooser'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'

const styles = {
  dateGroup: {
    display: 'flex',

  },
  timeField: {
    paddingRight: '15px'
  }
}

const NewEvent = ({ classes, handleSubmit, pristine, reset, requestCreateEvent, submitting, values }) => {
  return (
    <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
      <form>
        <div>
          <Field
            name='data'
            component={DateTimeChooser}
            fullWidth
            label='Data'
            placeholder='Data'
            autoOk
            animateYearScrolling={false}
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
  connect(mapStateToProps)
)(NewEvent)