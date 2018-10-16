import React from 'react'
import { Typography } from '@material-ui/core'

const RouteNotFound = ({ match }) => {
  console.log('match: ', match)
  return (
    <Typography variant='display4' color='error'>
      No component found for that route
    </Typography>
  )
}

export default RouteNotFound