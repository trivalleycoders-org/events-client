import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import iBriia from '../media/briia.jpg'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  card: {
    minHeight: 0,
    minWidth: 0,
    maxHeight: 800,
    maxWidth: 800,
    padding: '10px',
  },
  cardContent: {
    // padding: '16px 12px 24px 12px',
    padding: '16px 0 24px 0',
  },
  gridItem: {
    // backgroundColor: 'gray',
    // height: '200px',
    // width: '200px'
    // justifyContent: 'stretch',
    // border: '1px solid red',
  },
  image: {
    margin: 'auto',
    // display: 'block',
    width: '100%',
  },
  root: {
    flexGrow: 1
  },
  media: {
    height: 0,
    paddingTop: "50%"
  },
  pageMock: {
    marginLeft: 15,
    marginRight: 15,
  },
  time: {
    // width: '100%',
  },
  title: {
    maxHeight: "40px",
    letterSpacing: "0px",
    lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
  },
  venu: {
    // width: '100%',
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
      <div className={classes.pageMock}>
        <Grid container justify="center" spacing={16}>
          {numArray.map(value => (
            <Grid key={value} item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.gridItem}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={iBriia}
                  >
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant='subheading' component='p' className={classes.title}>
                    {'Word '.repeat(value)}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.time}>
                    thu, mar 28, 2018 8:00 pm
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.venu}>
                    thu, mar 28, 2018 8:00 pm thu, mar 28, 2018 8:00 pm thu, mar 28, 2018 8:00 pm
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

EventGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventGrid);
