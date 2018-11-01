import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Headline from 'ui/elements/typography/Headline'
import * as pageMessageSelectors from 'store/selectors/page-message-selectors'
import { Paper } from '@material-ui/core'

const PageMessage = ({ classes, message = '', variant }) => {
  return message !== ''
    ? (
        <Paper className={classes.root}>
          <Headline className={classes.headline}>{message}</Headline>
        </Paper>
      )
    : null
}

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.error.dark,
    padding: '15px 0 15px 0',
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