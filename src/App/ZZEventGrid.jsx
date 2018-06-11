import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 313,
    width: 330
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

class EventGrid extends React.Component {
  state = {
    spacing: "16"
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
    console.log("classes", classes);
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(spacing)}>
            {numArray.map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper}>{value}</Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    );
  }
}

EventGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventGrid);
