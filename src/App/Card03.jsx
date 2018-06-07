import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    fontFamily: "Roboto"
  },
  media: {
    height: 0,
    paddingTop: "50%"
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    height: "40px",
    letterSpacing: "0px",
    lineHeight: "19px",
    margin: 0,
    overflow: "hidden",
    // textOverflow: "ellipsis"
  },
  titleTwo: {
    textOverflow: "ellipsis"
  },
};

function SimpleMediaCard(props) {
  const { classes, image, price, tags, time, title, venu } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component='p'>
            {time}
          </Typography>
          <Typography
            gutterBottom
            variant="headline"
            component="div"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography component='p'>
            {venu}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
