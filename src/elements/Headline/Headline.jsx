import React from 'react'
import { Typography } from '@material-ui/core'
import { green } from 'logger'

const Headline = ({ children, ...rest }) => {
  green('rest', rest)
  green('hi')
  return (
    <Typography variant='headline' component='div' className={rest.className} >
      {children}
    </Typography>
  )
}
export default Headline
