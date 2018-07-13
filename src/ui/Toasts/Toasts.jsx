import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
// import * as toastActions from 'store/actions/toast-actions'
import * as toastActions from '../../store/actions/toast-actions'
// import * as toastSelectors from 'store/selectors/toast-selectors'
import * as toastSelectors from '../../store/selectors/toast-selectors'


class Toast extends React.Component {
  componentDidMount() {
    this.timeout = setTimeout(
      () => this.props.clearToast(this.props.id),
      3000
    )
  }
  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
  render() {
    const { id, message, level } = this.props
    return (
      <div key={id} style={{ ...styles.toast, ...styles[level] }}>
        {message}
      </div>
    )
  }
}

Toast.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  level: PropTypes.oneOf([ 'info', 'warn' ]).isRequired,
}

const Toasts = ({ toast, clearToast }) => (
  <div style={styles.wrapper}>
    {toast &&
      <Toast
        {...toast}
        key={toast.id}
        clearToast={clearToast}
        />
    }
  </div>
)

Toasts.propTypes = {
  toast: PropTypes.shape(Toast.propTypes),
  clearToast: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  toast: toastSelectors.getToast(state),
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, toastActions),
)(Toasts)

const styles = {
  toast: {
    position: 'fixed',
    right: '0.75rem',
    top: '4.75rem',
    boxShadow: '0 .2rem .4rem rgba(0,0,0,.1)',
    borderRadius: '.2rem',
    padding: '1rem',
    animationName: 'slideIn',
    animationDuration: '.2s',
  },
  info: {
    backgroundColor: 'black',
    color: 'white',
  },
  warn: {
    backgroundColor: '#b93f55',
    color: 'white',
  }
  
}