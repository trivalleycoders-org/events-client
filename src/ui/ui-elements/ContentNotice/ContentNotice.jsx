import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Body2 from 'ui/ui-elements/typography/Body2'
import { Paper } from '@material-ui/core'

const ContentNotice = (props) => {
  const { classes, children } = props
    return (
      <Paper className={classes.root} elevation={0}>
        <Body2>
          {children}
        </Body2>
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