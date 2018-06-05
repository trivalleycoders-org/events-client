import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Headline from 'elements/Headline'
import Body1 from 'elements/Body1'
import SubHeading from 'elements/SubHeading'


const styles = theme => ({
  card: {
    height: 313.5,
    width: 330,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    // minHeight: 200,
    // maxHeight: 165,
    // backgroundColor: 'red',
  },
  actions: {
    display: 'flex',
    // backgroundColor: 'orange',
    height: 41.5,
  },
  expand: {
    // transform: 'rotate(0deg)',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
    // marginLeft: 'auto',
  },
  expandOpen: {
    // transform: 'rotate(180deg)',
  },
  date: {
    color: 'rgb(200, 200, 200)',
    textTransform: 'uppercase',
  },
  divTop: {
    // backgroundColor: 'green',
    height: '100%',
  },
  header: {
    height: 37.5
  },
  location: {
    color: 'rgb(200, 200, 200)',
  },
});

class Event extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, date, image, location, price, title } = this.props;

    return (
      <Card className={classes.card}>
        <div className={classes.divTop}>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />

          <CardContent>
            <SubHeading>
              <span className={classes.date}>{date}</span>
            </SubHeading>
            <Headline>
              {title}
            </Headline>
            <SubHeading>
              <span className={classes.subheading}>{location}</span>
            </SubHeading>
          </CardContent>
        </div>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

      </Card>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Event);
