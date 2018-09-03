import React from 'react'
import classNames from 'classnames'
import { compose } from 'recompose'
// import Button from '@material-ui/core/Button'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle'
// import ErrorIcon from '@material-ui/icons/Error'
// import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
// import WarningIcon from '@material-ui/icons/Warning'
// import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import * as snackbarActions from '../../store/actions/snackbar-actions'
import * as snackbarSelectors from '../../store/selectors/snackbar-selectors'


// eslint-disable-next-line
// import { greenl } from 'logger'

/* Snackbar variants
    - success
    - warning
    - error
    - info
*/

// const variantIcon = {
//   success: CheckCircleIcon,
//   warning: WarningIcon,
//   error: ErrorIcon,
//   info: InfoIcon,
// }

const variants = ['success', 'warning', 'error', 'info']

function Content(props) {
  const { classes, className, message, onClose, variant, ...other } = props
  // const Icon = variantIcon[variant || 'info']

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={message}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  )
}

/*
<span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
*/


class Snackbars extends React.Component {

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.props.snackbarUnset()
  }

  render() {
    const { snackbar } = this.props

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={snackbar.open}
          autoHideDuration={1500}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant={snackbar.variant}
            message={snackbar.message}
          />
        </Snackbar>
      </div>
    )
  }
}

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

const MySnackbarContentWrapper = withStyles(styles1)(Content)



const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
})

// export default withStyles(styles2)(Snackbars)


const mapStateToProps = (state) => ({
  snackbar: snackbarSelectors.getToast(state),
})

export default compose(
  withStyles(styles2),
  connect(mapStateToProps, snackbarActions),
)(Snackbars)

