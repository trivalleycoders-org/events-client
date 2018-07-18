import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// eslint-disable-next-line
// import { green } from 'logger'

const styles = theme => ({
  tagWrapper: {
    marginRight: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tag: {
    color: theme.palette.primary.contrastText,
    /* eslint-disable */
    fontFamily: "'Roboto Condensed', sans-serif",
    /* eslint-disable */
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: '0.5px',
    lineHeight: '40px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  }
})
const Tag = ({ classes, label }) => {
  return (
    <div className={classes.tagWrapper}>
      <a href='#' className={classes.tag}>#{label}</a>
    </div>
  )
}

export default withStyles(styles)(Tag)
