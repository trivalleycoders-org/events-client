import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
  Divider,
} from '@material-ui/core'
import { formattedDate } from 'lib/formattedDate'
import Tag from './Tag'
import { Typography } from '@material-ui/core'

const EventCard = ({
  classes,
  linkToUrl,
  imageUrl,
  title,
  startDate,
  location,
  hasTags,
  tags,
}) => {
  return (
    <Card className={classes.card}>
      <a href={linkToUrl} className={classes.link}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
        />
        <Divider />
        <CardActionArea>
          <CardContent>
            <Typography variant='h4' color='primary' className={classes.title}>
              {title}
            </Typography>
            <Typography variant='h6' className={classes.time}>
              {formattedDate(startDate)}
            </Typography>
            <Typography variant='subtitle1'>
              {location}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <CardActions className={classes.actions} disableActionSpacing>
        <div className={classes.tags}>
          {
            hasTags
              ? tags.map((t, index) => (
                <Tag key={`t${index}`} label={t} />
              ))
              : null
          }
        </div>
      </CardActions>
    </Card>
  )
}

const styles = theme => ({
  actions: {
    display: 'flex',
    flexFlow: 'row nowrap',
    height: 41.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 15px 0px 15px',
  },
  card: {
    minHeight: 0,
    minWidth: 0,
    maxWidth: 390, // was 250?
    margin: '0 auto 0 auto',
  },
  link: {
    textDecoration: 'none',
  },
  media: {
    height: 0,
    paddingTop: '50%',
  },
  tags: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginLeft: '.6em',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    }
  },
  title: {
    height: '57px',
    overflow: 'hidden',
  },
  time: {
    // color: theme.palette.primary.main,
    // marginTop: '0rem',
    overflow: 'hidden',
    paddingTop: '.4rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})

export default withStyles(styles)(EventCard)
