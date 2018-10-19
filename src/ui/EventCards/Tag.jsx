import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// eslint-disable-next-line
// import { green } from 'logger'

const Tag = ({ classes, label }) => {
  return (
    <div className={classes.tagWrapper}>
      <div className={classes.tag}>#{label}</div>
    </div>
  )
}

const styles = theme => ({
  tagWrapper: {
    marginRight: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tag: {
    color: 'rgba(0, 0, 0, 0.9)',
    fontSize: '16px',
    // eslint-disable-next-line
    fontFamily: 'Roboto, Condensed, sans-serif',
    fontWeight: 500,
    letterSpacing: '0.5px',
    lineHeight: '40px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  }
})

export default withStyles(styles)(Tag)
