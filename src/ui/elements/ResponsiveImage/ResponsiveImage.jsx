import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'



const ResponsiveImage = ({ alt, classes, src, className, maxHeight = undefined, minHeight=0}) => {
  const styles = {

      // height: 'auto',
      maxHeight: maxHeight ? maxHeight : 'auto',
      minHeight: minHeight ? minHeight : 0,
      // maxHeight: 10,
  }
  return (
    <img src={src} alt={alt} style={styles} />
  )
}

export default ResponsiveImage