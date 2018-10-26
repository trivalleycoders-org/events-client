import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// eslint-disable-next-line
import { green, purple } from 'logger'

const Tag = ({ classes, label }) => {
  purple('Tag - render')
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '16px',
    },
    color: 'rgba(0, 0, 0, 0.75)',

    // eslint-disable-next-line
    fontFamily: 'Roboto, Condensed, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.5px',
    lineHeight: '40px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  }
})

export default withStyles(styles)(Tag)
