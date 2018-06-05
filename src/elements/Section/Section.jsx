import React from 'react'

import { Typography } from '@material-ui/core'

const Section = ({ title, subTitle, l0, l1, l2, l3, l4, children }) => {

  const display = () => {
    switch (true) {
      case l4:
        return 'display1'
      case l3:
        return 'display2'
      case l2:
        return 'display3'
      case l1:
      default:
        return 'display4'
    }
  }
  // console.log('title', title)
  // console.log('display', display)
  return (
    <div>
      <Typography variant={display()} gutterBottom>
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default Section
