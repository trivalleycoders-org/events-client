import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import iBriia from '../media/briia.jpg'
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    fontFamily: "Roboto",
  },
  cardContent: {
    padding: '16px 12px 24px 12px',
  },
  gridItem: {
    flexBasis: '33.33333%',
  },
  media: {
    height: 0,
    paddingTop: "50%"
  },
  root: {
    flexGrow: 1
  },
  time: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    // width: '100px',
    maxWidth: '557px',
  },
  title: {
    fontSize: 16,
    // fontWeight: 600,
    height: "40px",
    letterSpacing: "0px",
    // lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
    // textOverflow: 'ellipsis', doesn't work with 2 lines
  }
});

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

class EventGrid extends React.Component {
  state = {
    spacing: "16"
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
              <Grid className={classes.gridItem} key={value} item>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={iBriia}
                    >
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    {/* <p className={classes.time}>{'Time '.repeat(value)}</p> */}
                    <Typography variant='subheading' component='p' className={classes.time}>
                      thu, mar 28, 2018 8:00 pm
                    </Typography>

                    <Typography variant='headline' component='p' className={classes.title}>
                      {'Word '.repeat(value)}
                    </Typography>
                  </CardContent>
                </Card>
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
