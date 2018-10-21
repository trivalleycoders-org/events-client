import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Paper,
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
import Title from 'ui/ui-elements/typography/Title'

// eslint-disable-next-line
import { green } from 'logger'

const EventSubForm = (props) => {

  const {
    classes,
    freeClick,
    handleSubmit,
    onCancel,
    onSubmit,
    pristine,
    // reset,
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
            <Title>TITLE</Title>
            <TextFieldRedux
              fieldName='title'
              fieldLabel='Event title'
              fullWidth
              required={true}
              // rows={2}
              error={true}
              enableEdit={true}
            />
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Title>WHEN</Title>
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
            <Title>WHERE</Title>
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
          <Paper className={classes.uploadPaper} elevation={0}>
            <Title>EVENT IMAGE</Title>
            <div className={classes.dropZone}>
              <UploadImage
                fieldName='imageUrl'
                fieldLabel='Upload Image'
                enableEdit={true}
              />
            </div>
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Title>TICKETING</Title>
            <TextFieldRedux
              fullWidth
              fieldLabel='Link to Url'
              fieldName='linkToUrl'
              required={true}
              enableEdit={true}
            />
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Title>WHO</Title>
            <TextFieldRedux
              fullWidth
              fieldLabel='Organization'
              fieldName='organization'
              enableEdit={true}
            />
          </Paper>
          <Paper className={classes.paper} elevation={0}>
            <Title>HOW MUCH</Title>
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
            <Title>TAGS</Title>
            <ChipRedux
              fieldLabel='Tags'
              fieldName='tags'
              enableEdit={true}
            />
          </Paper>
          <div className={classes.actions}>
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
              Save
            </Button>
            {/* <Button
              type='button'
              color='secondary'
              disabled={submitting}
              onClick={reset}
            >
              Delete
            </Button> */}
          </div>
        </form>

      </MuiPickersUtilsProvider>
    </div>
  )
}

const styles = theme => ({
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
  },
  uploadPaper: {
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 2,
    // [theme.breakpoints.up('sm')]: {
    //   padding: '0 10% 40px 10%',
    // },
    // [theme.breakpoints.up('md')]: {
    //   padding: '0 15% 40px 15%',
    // },
  },
  dropZone: {
    marginTop: 22,
  },
  form: {
    // backgroundColor: 'pink',
  },
  actions: {
    marginTop: 30,
  },
  priceFields: {
    // backgroundColor: 'green',
    display: 'flex',
  },
  price: {
    flexBasis: '70%',
    paddingRight: 20,
  },
  free: {
    flexBasis: '30%',
  },
})

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'EventForm',
    // validate,
    // asyncBlurFields: ['combinedDateTime']
  })
)(EventSubForm)