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
    color: theme.palette.primary.main,
    // eslint-disable-next-line
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.5px',
    lineHeight: '40px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  }
})

export default withStyles(styles)(Tag)
