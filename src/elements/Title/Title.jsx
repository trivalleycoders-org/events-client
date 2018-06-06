import React from 'react'
// import styled from 'styled-components'
// import { tvcGreen } from '../../colors'
// import HorizontalLine from 'elements/HorizontalLine'
import { Typography } from '@material-ui/core'
import { green } from 'logger'

const Title = ({ children, noGutter, ...rest }) => {
  return (
    <Typography variant='title' gutterBottom={!noGutter} {...rest}>
      {children}
    </Typography>
  )
}
export default Title
