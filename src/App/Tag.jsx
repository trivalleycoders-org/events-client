import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from 'logger'

const styles = {
  tagWrapper: {
    marginRight: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tag: {
    color: 'white',
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: '0.5px',
    lineHeight: '40px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  }
}
const Tag = ({ classes, label }) => {
  green('label', label)
  return (
    <div className={classes.tagWrapper}>
      <a href='#' className={classes.tag}>#{label}</a>
    </div>
  )
}

export default withStyles(styles)(Tag)
