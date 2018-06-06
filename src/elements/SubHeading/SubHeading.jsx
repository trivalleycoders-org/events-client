import React from 'react'
import { Typography } from '@material-ui/core'

const SubHeading = ({ children }) => {
  return (
    <Typography variant='subheading' gutterBottom component='div'>
      {children}
    </Typography>
  )
}
export default SubHeading
