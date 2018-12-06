import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import * as pageMessageSelectors from 'store/selectors/page-message-selectors'
import { Paper, Typography } from '@material-ui/core'
import { green } from 'logger'

const PageMessage = ({ classes, message = '', variant }) => {
  green('PageMessage: message', message)
  const ret = message !== '' 
    ? <Paper className={classes.root}>
        <Typography variant='h5' className={classes.headline}>{message}</Typography>
      </Paper>
    : null
  return ret
}

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.error.dark,
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px 0`,
    marginBottom: theme.spacing.unit * 3,
  },
  headline: {
    color: 'white',
    margin: 0,
  }
})

const mapStateToProps = (state) => ({
  message: pageMessageSelectors.getPageMessage(state)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(PageMessage)