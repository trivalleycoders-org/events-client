import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// eslint-disable-next-line
// import { green } from 'logger'

const Tag = ({ classes, label }) => {
  return (
    <div className={classes.tagWrapper}>
      <a href='#' className={classes.tag}>#{label}</a>
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
    /* eslint-disable */
    fontFamily: "'Roboto Condensed', sans-serif",
    /* eslint-disable */
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.5px',
    lineHeight: '40px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  }
})

export default withStyles(styles)(Tag)
