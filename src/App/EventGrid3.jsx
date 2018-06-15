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
  action: {
    border: 'none',
  },
  actions: {
    // alignItems: 'center',
    display: 'flex',
    flexFlow: 'row nowrap',
    height: 41.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px 0px 15px',
  },
  card: {
    // borderRight: 'solid 1px white',
    minHeight: 0,
    minWidth: 0,
    // maxHeight: 800,
    // maxWidth: 300,
    padding: '15px 5px 0 5px',
  },
  cardContent: {
    padding: '5px 15px 5px 15px',
    borderBottom: 'solid 0.5px gray',
  },
  image: {
    margin: 'auto',
    width: '100%',
  },
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '50%',
  },
  pageMock: {
    margin: 'auto',
    // backgroundColor: 'blue',
  },
  tags: {
    // color: theme.palette.primary.contrastText,
    display: 'flex',
    flexFlow: 'row nowrap',
    overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
  },
  time: {
    overflow: 'hidden',
    paddingTop: '.4rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  title: {
    height: '40px',
    letterSpacing: '0px',
    lineHeight: '19px',
    margin: 0,
    overflow: 'hidden',
    paddingTop: '5px',
  },
  venu: {
    overflow: 'hidden',
    paddingTop: '7px',
    paddingBottom: '4px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  grid1111: {
    // backgroundColor: 'green',
    paddingBottom: '40px'
  },
  grid22222: {
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // backgroundColor: 'blue',
    // margin: '30px',
    // margin: 'auto',
    // color: 'orange',
    margin: '30px',
    padding: '30px',
    // border: 'solid 3px orange'
  },
  // grid3: {
  //   // border: 'solid 1px yellow',
  //   backgroundColor: 'pink',
  //   margin: 'auto',
  // },
})

class EventGrid extends React.Component {
  state = {
    spacing: '16'
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { classes } = this.props
    const { spacing } = this.state
    return (
      <div className={classes.pageMock}>
        <Grid container spacing={Number(8)} className={classes.grid1111} >
          {cardData.map(c => (
            <Grid key={c.id} item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.grid2222}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={c.image}
                  >
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant='caption' component='p' noWrap className={classes.time}>
                    {c.time}
                  </Typography>
                  <Typography variant='subheading' component='p' className={classes.title}>
                    {c.title}
                  </Typography>
                  <Typography variant='caption' component='p' noWrap className={classes.venu}>
                    {c.venu}
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <div className={classes.tags}>
                    {c.tags.map(t => (
                      <Tag key={t} label={t} />
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
