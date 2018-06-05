import React from 'react'
// import styled from 'styled-components'
import { Typography } from '@material-ui/core'


const H3 = ({ children }) => {
  return (
    <Typography variant='display2' gutterBottom>
      {children}
    </Typography>
  )
}
export default H3

// const H3 = styled.h3`
//   color: orange;
// `
// export default H3
