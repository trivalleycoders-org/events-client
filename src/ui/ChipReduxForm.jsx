import React from 'react'
import { compose } from 'recompose'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
// import {
//   Button,
//   MenuItem,
//   Typography,
// } from '@material-ui/core'

/* User */
import * as eventActions from 'store/actions/event-actions'
import * as eventSelectors from 'store/selectors/events-selectors'

import ChipRedux from 'ui/ui-elements/ChipRedux'

/* Dev */
import { green } from 'logger'



const styles = {}

class ChipReduxForm extends React.Component {
  onSubmit = (values) => {
    green('values submitted:  ', values)
    
    this.setState({
      values: values
    })
  }

  render() {
    const { /*classes, event,*/ handleSubmit, /*pristine, reset, submitting */} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <ChipRedux
            fieldName='chips'
          />
        </div>
      </form>

    )
  }
}

const mapStateToProps = (state) => {

  const _id = '5b2a61038ea7b71ef1e290c3'
  const event = eventSelectors.getOneEvent(state, _id)
  return {
    event,
  }
  
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions),
  reduxForm({
    form: 'ChipReduxForm',
  }),
)(ChipReduxForm)