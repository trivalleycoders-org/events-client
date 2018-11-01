import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const ContentNotice = (props) => {
  const { classes, children } = props
    return (
      <Paper className={classes.root} elevation={0}>
        <Typography variant='body1'>
          {children}
        </Typography>
      </Paper>
    )
}

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    marginBottom: 40,
  },
})

export default withStyles(styles)(ContentNotice)