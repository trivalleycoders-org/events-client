import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faMeetup, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
import Body1 from 'ui/ui-elements/typography/Body1'

const TVCLinks = ({ classes }) => {
  return (
    <div className={classes.logoGrid}>
      <Grid
        item
        container
        xs={12}
        justify='center'
      >
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <FontAwesomeIcon className={classes.meetup} icon={faMeetup} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <FontAwesomeIcon className={classes.github} icon={faGithub} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <FontAwesomeIcon className={classes.slack} icon={faSlack} />
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          container
          justify='center'
        >
          <FontAwesomeIcon className={classes.facebook} icon={faFacebook} />
        </Grid>
      </Grid>
      </div>
  )
}

const styles = theme => {
  const unit = theme.spacing.unit
  const leftRightMargin = theme.spacing.unit * 4
  const topBottomMargin = theme.spacing.unit * 4
  const logoMargin = `${topBottomMargin}px ${leftRightMargin}px ${topBottomMargin}px ${leftRightMargin}px`
  return ({
    logoGrid: {
      // margin: '50px 0 50px 0',
      // width: '100%',
      // maxWidth: '70%',
      backgroundColor: 'green',

    },
    meetup: {
      color: '#f64060',
      fontSize: '3em',
      margin: logoMargin
    },
    github: {
      color: 'white',
      fontSize: '3em',
      margin: logoMargin
    },
    slack: {
      color: 'white',
      fontSize: '3em',
      margin: logoMargin
    },
    facebook: {
      color: '#3e5b99',
      fontSize: '3em',
      margin: logoMargin
    },
  })
}

export default withStyles(styles)(TVCLinks)