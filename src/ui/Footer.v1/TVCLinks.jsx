import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faMeetup,
  faGithub,
  faSlack
} from '@fortawesome/free-brands-svg-icons'

const styles = theme => ({
  faItem: {
    fontSize: '3em',
    color: 'white'
    // justifyContent: 'canter',
    // alignItems: 'center',
  },
  root: {
    flexGrow: 1
    // backgroundColor: 'orange'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: 'transparent'

    // width: 50,
    // height: 50
  },
  grid: {
    margin: '2px 0 2px 0'
  }
})

function CenteredGrid(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={8} justify='center' className={classes.grid}>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classes.faItem} icon={faMeetup} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classes.faItem} icon={faFacebook} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={8} justify='center' className={classes.grid}>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classes.faItem} icon={faGithub} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classes.faItem} icon={faSlack} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CenteredGrid)
