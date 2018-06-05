import React from 'react'
// import styled from 'styled-components'
// import { tvcGreen } from '../../colors'
// import HorizontalLine from 'elements/HorizontalLine'
import { Typography } from '@material-ui/core'


const Headline = ({ children }) => {
  return (
    <Typography variant='headline' gutterBottom>
      {children}
    </Typography>
  )
}
export default Headline
