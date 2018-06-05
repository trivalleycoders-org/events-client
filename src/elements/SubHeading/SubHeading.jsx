import React from 'react'
// import styled from 'styled-components'
// import { tvcGreen } from '../../colors'
// import HorizontalLine from 'elements/HorizontalLine'
import { Typography } from '@material-ui/core'


const SubHeading = ({ children }) => {
  return (
    <Typography variant='subheading' gutterBottom>
      {children}
    </Typography>
  )
}
export default SubHeading
