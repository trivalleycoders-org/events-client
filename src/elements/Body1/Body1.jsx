import React from 'react'
// import styled from 'styled-components'
// import { tvcGreen } from '../../colors'
// import HorizontalLine from 'elements/HorizontalLine'
import { Typography } from '@material-ui/core'
import { green } from 'logger'

const Body1 = ({ children, noGutter }) => {
  return (
    <Typography variant='body1' gutterBottom={!noGutter}>
      {children}
    </Typography>
  )
}
export default Body1
