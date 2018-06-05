import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'


const H4 = ({ children }) => {
  return (
    <Typography variant='display1' gutterBottom>
      {children}
    </Typography>
  )
}
export default H4

// const H4 = styled.h4`
//   color: yellow;
// `
// export default H4
