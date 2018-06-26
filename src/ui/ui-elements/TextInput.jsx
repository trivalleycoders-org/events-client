import React from 'react'
import { Field } from 'redux-form'
import { TextField } from '@material-ui/core'
import { green } from 'logger'

const textFieldInput = (props) => {
  
  console.log('propsx', props)
  return (
    <TextField
      label={'label'}
      placeholder={'label'}
      value={'input.value'}
      {...props.input}
      {...props.custom}
    />
  )
}

// const textFieldInput = ({
//   input,
//   label,
//   meta: { touched, error},
//   ...custom
// }) => {
//   green('text field')
//   return (
//     <TextField
//       label={label}
//       placeholder={label}
//       value={input.value}
//       {...input}
//       {...custom}
//     />
//   )
// }

class TextInput extends React.Component {
  render() {
    const { name, label } = this.props
    console.log('textinput')
    return (
      <Field
        component={textFieldInput}
        label={label}
        name={name}
      />
    )
  }
  
}

export default TextInput
