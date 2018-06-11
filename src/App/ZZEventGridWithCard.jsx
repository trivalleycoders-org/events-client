import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import iBriia from '../media/briia.jpg'
import Typography from "@material-ui/core/Typography";
import Tag from './Tag'

const styles = theme => ({
  card: {
    // fontFamily: "Roboto",
    minWidth: '170px',
    maxWidth: '341.347px',
  },
  cardContent: {
    padding: '16px 12px 24px 12px',
  },
  footer: {
    backgroundColor: 'blue',
    maxHeight: '3em',
    padding: '0 12px 0 12px',
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
  tags: {
    display: 'flex',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
  },
  time: {
    // fontFamily: "'Roboto', sans-serif",
    // color: '#45494E',
    // display: 'block',
    // fontSize: '10px',
    height: '2em',
    // letterSpacing: '0.5px',
    lineHeight: '18px',
    overflow: 'hidden',
    padding: '5px 0 0',
    // textAlign: 'left',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },

  // time: {
  //   // overflow: 'hidden',
  //   // textOverflow: 'ellipsis',
  //   // textTransform: 'uppercase',
  //   whiteSpace: 'nowrap',
  //   minWidth: 0,
  //   // ** not used **
  //   // width: '100px',
  //   // maxWidth: '557px',
  //   // maxWidth: '317.317px',
  // },
  title: {
    // fontSize: 16,
    // fontWeight: 500,
    height: "40px",
    letterSpacing: "0px",
    lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
    // textOverflow: 'ellipsis', doesn't work with 2 lines
  },
  venu: {
    height: '2em',
    lineHeight: '18px',
    overflow: 'hidden',
    padding: '5px 0 0',
    // textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    // whiteSpace: 'nowrap',
    // maxWidth: '100px'
  },
  ellipsis: {
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
    // maxWidth: '100%',
    // paddingRight: '50px',
  },
});

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const tags = [ 'Light', 'Radiance' ]

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
                    {/* <div className={classes.ellipsis}>Here is some long text that needs to get truncated with ellipsis</div> */}
                    <Typography variant='caption' component='p' className={classes.time}>
                      thu, mar 28, 2018 8:00 pm
                    </Typography>
                    <Typography variant='subheading' component='p' className={classes.title}>
                      {'Word '.repeat(value)}
                    </Typography>

                    <Typography variant='caption' component='p' noWrap className={classes.venu}>
                      thu, mar 28, 2018 8:00 pm thu, mar 28, 2018 8:00 pm thu, mar 28, 2018 8:00 pm
                    </Typography>
                  </CardContent>
                  {/* <div className={classes.footer}>
                    <div className={classes.tags}>
                      {tags.map(t => (
                        <Tag label={t} />
                      ))}
                    </div>
                  </div> */}
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
