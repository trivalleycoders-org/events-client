import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Button from 'ui/elements/Button'

const getModalStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

class AreYouSure extends React.Component {

  render() {

    const { classes, open, close } = this.props
    return (
      <div>
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={open}
          disableBackdropClick
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography
              variant='h6'
              id='modal-title'
              align='center'
            >
              Are you sure you want to cancel and discard all changes?
            </Typography>
            <div className={classes.controls}>
              <Button
                onClick={() => close(true)}
                color='green'
              >
                Yes
              </Button>
              <Button
                onClick={() => close(false)}
                color='red'
              >
                No
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

AreYouSure.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  controls: {
    marginTop: '40px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-around'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
})

export default withStyles(styles)(AreYouSure)
