import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
// User
import ChipRedux from 'ui/ui-elements/ChipRedux'
import TextFieldRedux from 'ui/ui-elements/TextFieldRedux'
import StartEndDateRedux from 'ui/ui-elements/StartEndDateRedux'
import CheckboxRedux from 'ui/ui-elements/CheckboxRedux'
import UploadImage from 'ui/ui-elements/UploadImage'
import PostalCodesRedux from 'ui/ui-elements/PostalCodesRedux'

// eslint-disable-next-line
import { green } from 'logger'

const EventFormForm = (props) => {
  green('EventFormForm: props', props)
  const { classes,
    freeClick,
    handleSubmit,
    onCancel,
    onSubmit,
    pristine,
    reset,
    submitting,
    free, } = props
  return (
    <div className={classes.pageWrapper}>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <form>
          <UploadImage
            fieldName='imageUrl'
            fieldLabel='Upload Image'
            enableEdit={true}
          />
          <TextFieldRedux
            fieldName='title'
            fieldLabel='Event title'
            fullWidth
            required={true}
            rows={2}
            error={true}
            enableEdit={true}
          />
          <TextFieldRedux
            fullWidth
            fieldLabel='Organization'
            fieldName='organization'
            enableEdit={true}
          />
          <StartEndDateRedux
            disablePast
            fieldName='dates'
            fieldLabel='Date & Time'
            fullWidth
            required={true}
            enableEdit={true}
          />
          <TextFieldRedux
            fullWidth
            fieldLabel='Venue Name'
            fieldName='venueName'
            required={true}
            enableEdit={true}
          />
          <TextFieldRedux
            fullWidth
            fieldLabel='Link to Url'
            fieldName='linkToUrl'
            required={true}
            enableEdit={true}
          />
          <PostalCodesRedux
            fieldName='location'
            fieldLabel='Postal Code'
            required={false}
            enableEdit={true}
          />
          {
            !free
              ? <TextFieldRedux
                  fullWidth
                  fieldLabel='Price'
                  fieldName='price'
                  disabled={free}
                  enableEdit={true}
                />
              : null
          }
          <CheckboxRedux
            fieldLabel='Free'
            fieldName='free'
            onChange={() => freeClick()}
            enableEdit={true}
          />
          <ChipRedux
            fieldLabel='Tags'
            fieldName='tags'
            enableEdit={true}
          />
          <div>
            <Button
              type='button'
              onClick={() => onCancel(pristine)}
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type='button'
              onClick={handleSubmit(onSubmit)}
              disabled={pristine || submitting}
            >
              Submit
            </Button>
            <Button
              type='button'
              color='secondary'
              disabled={submitting}
              onClick={reset}
            >
              Delete
            </Button>
          </div>
        </form>

      </MuiPickersUtilsProvider>
    </div>
  )
}

const styles = {
  pageWrapper: {
    padding: '20px',
  },
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'EventForm',
    // validate,
    // asyncBlurFields: ['combinedDateTime']
  })
)(EventFormForm)