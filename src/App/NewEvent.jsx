import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import * as eventActions from 'store/actions/event-actions'

import { compose } from 'recompose'
import { green } from 'logger'

const styles = {
  dateGroup: {
    display: 'flex',

  },
  timeField: {
    paddingRight: '15px'
  }
}

const NewEvent = ({
                    classes,
                    handleSubmit,
                    pristine,
                    reset,
                    requestCreateEvent,
                    submitting,
                    values
                  }) => {

  const onSubmit = (values) => {
    // console.log('handleSubmit')
    console.log('values', values)
    const toDb = {
      endDateTime: values.endDateTime,
      imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
      organization: values.organization,
      price: values.price,
      startDateTime: values.startDateTime,
      tags: [
        values.tag01,
        values.tag02,
        values.tag03
      ],
      title: values.title,
      venu: values.venu,
    }
    // const startDate = '2018-12-25'
    // const startTime = '09:00'
    // const endDate = '2018-12-26'
    // const endTime = '10:00'
    // const toDbHard = {
    //   endDateTime: `${endDate}T${endTime}`,
    //   imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
    //   organization: 'TVC',
    //   price: 10,
    //   startDateTime: `${startDate}T${startTime}`,
    //   tags: [
    //     'tag-a',
    //     'tag-b',
    //     'tag-c',
    //   ],
    //   title: 'Title X',
    //   venu: 'Dublin Concert Hall',
    // }
    green('toDb', toDb)
    requestCreateEvent(toDb)

  }
  const renderTextField = ({
                             input,
                             label,
                             meta: { touched, error },
                             ...custom
                           },) => (
    <TextField
      placeholder={label}
      {...input}
      {...custom}
    />
  )


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field
            name='imageUrl'
            component={renderTextField}
            label='url to image'
          />
        </div>
        <div>
          <Field
            name='title'
            component={renderTextField}
            label='Event title'
          />
        </div>
        <div>
          <div className={classes.dateGroup}>
            <Field
              component={renderTextField}
              label='start date'
              name='startDate'
            />
            <Field
              className={classes.timeField}
              component={renderTextField}
              label='startTime'
              name='start time'
            />
          </div>
          <div className={classes.dateGroup}>
            <Field
              component={renderTextField}
              label='end date'
              name='endDate'
            />
            <Field
              className={classes.timeField}
              component={renderTextField}
              label='end ime'
              name='endTime'
            />
          </div>
        </div>
        <div>
          <Field
            name='organization'
            component={renderTextField}
            label='Organization'
          />
        </div>
        <div>
          <Field
            name='venu'
            component={renderTextField}
            label='Venu'
          />
        </div>
        <div>
          <Field
            name='price'
            component={renderTextField}
            label='Price'
          />
        </div>
        <div>
          <Field
            name='tag01'
            component={renderTextField}
            label='tag 1'
          />
          <Field
            name='tag02'
            component={renderTextField}
            label='tag 2'
          />
          <Field
            name='tag03'
            component={renderTextField}
            label='tag 3'
          />
        </div>
        <div>
          {/*<Button type="submit" disabled={pristine || submitting}>*/}
            {/*Submit*/}
          {/*</Button>*/}
          <Button type="submit" >
            Submit
          </Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { }
}

export default compose(
  withStyles(styles),
  reduxForm({ form: 'newEvent' }),
  connect(mapStateToProps, eventActions)
)(NewEvent)
