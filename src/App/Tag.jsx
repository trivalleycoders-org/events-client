import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from 'logger'

const styles = {
  tag: {
    color: 'white',
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: '0.5px',
    lineHeight: '40px',
    marginRight: '10px',
    textDecoration: 'none',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
  },
}
const Tag = ({ classes, label }) => {
  green('label', label)
  return (
    <div>
      <a href='#' className={classes.tag}>#{label}</a>
    </div>
  )
}

export default withStyles(styles)(Tag)
