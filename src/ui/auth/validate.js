/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const validate = (values, props) => {

  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (props.form !== 'LoginForm') {
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more'
    }
  } else {
    if (!values.password) {
      errors.password = 'Required'
    }
  }
  return errors
}

export default validate
