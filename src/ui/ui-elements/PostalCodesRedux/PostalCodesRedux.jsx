import React from 'react'
import { Field } from 'redux-form'
import { FormControl } from '@material-ui/core'
import PostalCodesComponent from './PostalCodesComponent'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class PostalCodesRedux extends React.Component {
  picker = (props) => {
    const { onChange, ...rest } = props.input
    return (
      <FormControl
        fullWidth={true}
      >
        <PostalCodesComponent
          onChange={onChange}
          { ...rest }
          { ...props.meta }
        />
      </FormControl>
    )
  }

  render() {
    const { fieldLabel, fieldName } = this.props
    return (
      <Field
        component={this.picker}
        name={fieldName}
        label={fieldLabel}

      />
    )
  }
}

export default PostalCodesRedux