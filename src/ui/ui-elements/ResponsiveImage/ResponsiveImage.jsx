import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

const styles = {
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
  },
}

const ResponsiveImage = ({ alt, classes, src, className}) => {
  const cls = classNames(classes.imgFluid, className)
  return (
    <img src={src} alt={alt} className={cls} />
  )
}

export default withStyles(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}