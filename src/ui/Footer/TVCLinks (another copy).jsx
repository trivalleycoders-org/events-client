import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Body1 from 'ui/ui-elements/typography/Body1'
import classNames from 'classnames'
import {
  faFacebook,
  faMeetup,
  faGithub,
  faSlack
} from "@fortawesome/free-brands-svg-icons";

const styles = theme => ({
  meetup: {
    color: '#f64060',
     // margin: logoMargin
  },
  github: {
    color: 'white',
    // margin: logoMargin
  },
  slack: {
    color: 'white',
    // margin: logoMargin
  },
  facebook: {
    color: '#3e5b99',
    // margin: logoMargin
  },
  faItem: {
    fontSize: '3em'
    // justifyContent: 'canter',
    // alignItems: 'center',
  },
  root: {
    flexGrow: 1,
    // backgroundColor: 'orange',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    // color: theme.palette.text.secondary
    backgroundColor: 'transparent'
    // width: 50,
    // height: 50
  },
  grid: {
    margin: '2px 0 2px 0'
  }
})

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Body1
        align='center'
        color='white'
      >
        About Us
      </Body1>
      <Grid container spacing={8} justify='center' className={classes.grid}>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classNames(classes.faItem, classes.meetup)} icon={faMeetup} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classNames(classes.faItem, classes.facebook)} icon={faFacebook} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={8} justify='center' className={classes.grid}>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classNames(classes.faItem, classes.github)} icon={faGithub} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={0}>
            <FontAwesomeIcon className={classNames(classes.faItem, classes.slack)} icon={faSlack} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
