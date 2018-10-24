import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
} from '@material-ui/core'
import { formattedDate } from 'lib/formattedDate'
import Title from 'ui/ui-elements/typography/Title'
import Subheading from 'ui/ui-elements/typography/Subheading'
import Body1 from 'ui/ui-elements/typography/Body1'
import Tag from './Tag'
// eslint-disable-next-line
import { green } from 'logger'

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
   // green('imageUrl', imageUrl)
   green('startDate', startDate)
  return (
    <Card className={classes.card}>
      <a href={linkToUrl} className={classes.link}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
        />
        <CardActionArea>
          <CardContent>
            <Title className={classes.title}>
              {title}
            </Title>
            <Subheading className={classes.time}>
              {formattedDate(startDate)}
            </Subheading>
            <Body1 className={classes.location}>
              {location}
            </Body1>
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
    // backgroundColor: 'blue',
    minHeight: 0,
    minWidth: 0,
    // margin: '3%'

    /* xs */
    // xs1 0
    margin: 0,
    // xs2 136
    [theme.breakpoints.up(136)]: {
      // margin: '1%',
    },
    // xs3 272
    [theme.breakpoints.up(272)]: {
      // margin: '2%',
    },
    // xs4 408
    [theme.breakpoints.up(408)]: {
      // margin: '4%',
    },
    // xs5 544
    [theme.breakpoints.up(544)]: {
      margin: '5%',
    },
    /* md */
    [theme.breakpoints.up(560)]: {
      margin: '4%',
    },
    [theme.breakpoints.up(920)]: {
      margin: '5%',
    },
    [theme.breakpoints.up(1040)]: {
      margin: '10%',
    },
    [theme.breakpoints.up(1160)]: {
      margin: '12%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: 0,
    },
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
    fontWeight: '600',
    height: '40px',
  },
  time: {
    color: theme.palette.primary.main,
    marginTop: '1em',
    overflow: 'hidden',
    paddingTop: '.4rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  location: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
})

export default withStyles(styles)(EventCard)