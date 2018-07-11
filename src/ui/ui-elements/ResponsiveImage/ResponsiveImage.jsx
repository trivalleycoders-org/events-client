import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
  },
}

const ResponsiveImage = ({ src, alt, classes}) => {
  return (
    <img src={src} alt={alt} className={classes.imgFluid} />    
  )
}

export default withStyles(styles)(ResponsiveImage)