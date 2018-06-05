import React from 'react'
// import styled from 'styled-components'
// import { tvcGreen } from '../../colors'
// import HorizontalLine from 'elements/HorizontalLine'
import { Typography } from '@material-ui/core'


const Caption = ({ children, noGutter }) => {
  return (
    <Typography variant='caption' gutterBottom={!noGutter}>
      {children}
    </Typography>
  )
}
export default Caption
