import React from 'react'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const TestIt = (props) => {
  green('TestIt: props.initialValues', props.initialValues)
  return (
    <h1>TestIt</h1>
  )
}
export default TestIt