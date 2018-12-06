import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

const Tag = ({ classes, label }) => {
  return (
    <div className={classes.tagWrapper}>
      <Typography variant='caption' className={classes.tag}>#{label}</Typography>
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
    color: grey[700]
  },
})

export default withStyles(styles)(Tag)
