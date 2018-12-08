import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Paper,
  Typography
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
// User
import ChipRedux from 'ui/elements/ChipRedux'
import TextFieldRedux from 'ui/elements/TextFieldRedux'
import StartEndDateRedux from 'ui/elements/StartEndDateRedux'
import CheckboxRedux from 'ui/elements/CheckboxRedux'
import UploadImage from 'ui/elements/UploadImage'
import PostalCodesRedux from 'ui/elements/PostalCodesRedux'

const EventSubForm = (props) => {

  const {
    classes,
    freeClick,
    handleSubmit,
    onCancel,
    onSubmit,
    pristine,
    submitting,
    free
  } = props

  return (
    <div id='EventSubForm'>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <form className={classes.form}>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>TITLE</Typography>
            <TextFieldRedux
              fieldName='title'
              fieldLabel='Event title'
              fullWidth
              required={true}
              error={true}
              enableEdit={true}
            />
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>WHEN</Typography>
            <StartEndDateRedux
              disablePast
              fieldName='dates'
              fieldLabel='Date & Time'
              fullWidth
              required={true}
              enableEdit={true}
            />
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>WHERE</Typography>
            <TextFieldRedux
              fullWidth
              fieldLabel='Venue Name'
              fieldName='venueName'
              required={true}
              enableEdit={true}
            />
            <PostalCodesRedux
              fieldName='location'
              fieldLabel='Postal Code'
              required={false}
              enableEdit={true}
            />
          </Paper>



          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>EVENT IMAGE</Typography>
            <div id='dropZone' className={classes.dropZone}>
              <UploadImage
                fieldName='imageUrl'
                fieldLabel='Upload Image'
                enableEdit={true}
              />
            </div>
          </Paper>

          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>TICKETING</Typography>
            <TextFieldRedux
              fullWidth
              fieldLabel='Link to Url'
              fieldName='linkToUrl'
              required={true}
              enableEdit={true}
            />
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>WHO</Typography>
            <TextFieldRedux
              fullWidth
              fieldLabel='Organization'
              fieldName='organization'
              enableEdit={true}
            />
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>HOW MUCH</Typography>
            <div className={classes.priceFields}>
              <div className={classes.price}>
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
              </div>
              <div className={classes.free}>
                <CheckboxRedux
                  fieldLabel='Free'
                  fieldName='free'
                  onChange={freeClick}
                  enableEdit={true}
                />
              </div>
            </div>
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>TAGS</Typography>
            <ChipRedux
              fieldLabel='Tags'
              fieldName='tags'
              enableEdit={true}
            />
          </Paper>
          <div className={classes.actions}>
            <Button
              type='button'
              onClick={handleSubmit(onSubmit)}
              disabled={pristine || submitting}
            >
              Save
            </Button>
            <Button
              type='button'
              onClick={() => onCancel(pristine)}
              disabled={submitting}
            >
              Cancel
            </Button>
          </div>
        </form>

      </MuiPickersUtilsProvider>
    </div>
  )
}

const styles = theme => {
  const space = theme.spacing.unit
  return ({
    actions: {
      marginTop: space * 4,
      paddingBottom: space,
    },
    dropZone: {
      margin: '22px auto',
      maxWidth: 400,
      paddingBottom: 32,

    },
    form: {
      backgroundColor: 'rgb(225, 225, 225)',
      paddingTop: space,
    },
    free: {
      flexBasis: '30%',
    },
    price: {
      flexBasis: '70%',
      paddingRight: 20,
    },
    priceFields: {
      display: 'flex',
    },
    paper: {
      paddingTop: space * 2,
      paddingRight: space * 2,
      paddingLeft: space * 2,
      margin: space * 2,
    },
  })
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'EventForm',
  })
)(EventSubForm)