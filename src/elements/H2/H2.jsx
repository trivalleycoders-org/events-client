import React from 'react'
// import styled from 'styled-components'
import { brightBlue } from '../../colors'
import { Typography } from '@material-ui/core'


const H2 = ({ children }) => {
  return (
    <Typography variant='display3' gutterBottom>
      {children}
    </Typography>
  )
}
export default H2

// const H2 = styled.h2`
//   color: ${props => brightBlue};
// `
//
// export default H2
