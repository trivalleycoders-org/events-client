import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import iBriia from '../media/briia.jpg'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import Tag from './Tag'
import { cardData } from '../mock-data/card-data'

const styles = theme => ({
  actions: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: 41.5,
    justifyContent: 'space-between',
  },
  card: {
    borderRight: 'solid 1px white',
    minHeight: 0,
    minWidth: 0,
    maxHeight: 800,
    maxWidth: 300,
    padding: '10px',
  },
  cardContent: {
    padding: '16px 12px 24px 12px',
  },
  grid: {
    // justifyContent: 'space-around'
  },
  image: {
    margin: 'auto',
    width: '100%',
  },
  root: {
    flexGrow: 1
  },
  media: {
    height: 0,
    paddingTop: '50%',
  },
  pageMock: {
    // marginLeft: 15,
    // marginRight: 15,
    margin: 'auto',
    backgroundColor: 'blue',
  },
  tags: {
    display: 'flex',
    flexFlow: 'row nowrap'
  },
  time: {
    marginTop: '4px',
  },
  title: {
    height: '40px',
    letterSpacing: '0px',
    lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
  },
  venu: {
    marginTop: '4px',
  },
  grid1: {
    backgroundColor: 'green',
    // margin: 'auto',
  },
  grid1: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // margin: '30px',
    // margin: 'auto',
  },
  // grid3: {
  //   // border: 'solid 1px yellow',
  //   backgroundColor: 'pink',
  //   margin: 'auto',
  // },
})

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

class EventGrid extends React.Component {
  state = {
    spacing: '16'
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    })
  }
// justify='center'
  render() {
    const { classes } = this.props
    const { spacing } = this.state
    console.log('classes', classes)
    return (
      <div className={classes.pageMock}>
        <Grid container spacing={Number(spacing)} className={classes.grid1} >
          {cardData.map(c => (
            <Grid key={c.id} item xs={12} sm={4} md={4} lg={3} xl={2} className={classes.grid2}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={c.image}
                  >
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant='subheading' component='p' className={classes.title}>
                    {c.title}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.time}>
                    {c.time}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.venu}>
                    {c.venu}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <div className={classes.tags}>
                    {c.tags.map(t => (
                      <Tag label={t} />
                    ))}
                  </div>
                  <div className={classes.actions}>
                    <div className={classes.action}>
                      <IconButton aria-label='Add to favorites'>
                        <FavoriteIcon />
                      </IconButton>
                    </div>
                    <div className={classes.action}>
                      <IconButton aria-label='Share'>
                        <ShareIcon />
                      </IconButton>
                    </div>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

EventGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EventGrid)
