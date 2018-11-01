import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'
// Dev
// eslint-disable-next-line
import { green, purple } from 'logger'
import { logRender } from 'logging'

const Tag = ({ classes, label }) => {
  logRender && purple('Tag - render')
  return (
    <div className={classes.tagWrapper}>
      <Typography variant='caption' className={classes.tag}>#{label}</Typography>
    </div>
  )
}

//

const styles = theme => ({

  tagWrapper: {
    marginRight: '10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tag: {
    color: grey[700]
  },
  xxtag: {
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
