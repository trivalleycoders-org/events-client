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
import Tag from './Tag'

const styles = theme => ({
  action: {
    borderLeft: '1px solid rgb(50, 50, 50)',
    // color: '#666A73',
    // fontSize: '20px',
    height: '40px',
    // lineHeight: '38px',
    // padding: '0 10px',
    textAlign: 'center',
    textDecoration: 'none',
    // width: '40px',
  },
  actions: {
    display: 'flex',
    // backgroundColor: 'orange',
    height: 41.5,
  },
  body: {
    // backgroundColor: 'white',
    letterSpacing: '.5px',
    lineHeight: '22px',
    margin: 0,
    padding: '5px 15px',
  },
  card: {
    display: 'flex',
    flexFlow: 'column',
    fontFamily: "'Roboto Condensed', sans-serif",
  },
  footer: {
    borderTop: '1px solid rgb(50, 50, 50)',
    display: 'flex',
    fontSize: 15,
    fontWeight: 400,
    justifyContent: 'space-between',
    lineHeight: '40px',
    lineSpacing: '0.5px',
    maxHeight: '3em',
    minHeight: '2.8em',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  header: {
    textDecoration: 'none',
  },
  image: {
    backgroundColor: 'white',
    // margin: '0 auto',
  },
  tags: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  time: {
    color: 'rgb(200, 200, 200)',
    textTransform: 'uppercase',

    /////////////////
    // color: '#45494E',
    // display: 'block',
    // fontSize: 13,
    // fontWeight: 400,
    // height: '2em',
    // letterSpacing: '1px',
    // lineHeight: '18px',
    overflow: 'hidden',
    padding: '5px 0 0 0',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    /////////////////
  },
  title: {
    // color: '#282C35',
    fontSize: 16,
    fontWeight: 600,
    height: '2.5em',
    letterSpacing: 0,
    lineHeight: '19px',
    margin: '0 auto',
    maxHeight: '2.5em',
    padding: 0,
    overflow: 'hidden',
    overflowWrap: 'breakWord',
    textOverflow: 'ellipsis',
    color: 'green',
  },
  venu: {
    color: 'rgb(200, 200, 200)',
    // color: '#666A73',
    fontSize: 13,
    height: '2em',
    lineHeight: '18px',
    overflow: 'hidden',
    padding: '5px 0 0 0',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

class Event extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, time, image, venu, price, tags, title } = this.props;
    return (
      <Card className={classes.card}>
        <a className={classes.header}>
          <div>
            <img src={image}/>
          </div>

          <CardContent className={classes.body}>
            <SubHeading>
              <time className={classes.time}>{time}</time>
            </SubHeading>
            <Headline className={classes.title}>
              {title}
            </Headline>
            <SubHeading>
              <span className={classes.venu}>{venu}</span>
            </SubHeading>
          </CardContent>
        </a>
        <div className={classes.footer}>
          <div className={classes.tags}>
            {tags.map(t => (
              <Tag label={t} />
            ))}
          </div>
          <CardActions className={classes.actions} disableActionSpacing>
            <div  className={classes.action}>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
            </div>
            <div  className={classes.action}>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </div>
            {/* <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton> */}
          </CardActions>
        </div>


      </Card>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Event);
