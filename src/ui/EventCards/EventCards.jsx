import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
    Button,
    Grid,
    Typography,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    CardActionArea,
} from '@material-ui/core'
import { has } from 'ramda'

/* User */
import Tag from './Tag'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const hourAmPm = (date) => {
    const h = date.getHours()
    const tempMin = date.getMinutes()
    const m = (tempMin < 10) ? `0${tempMin}` : tempMin
    console.log('minutes: ', m)
    return (h > 12)
        ? `${h - 12}:${m} PM`
        : `${h}:${m} AM`
}

const formattedDate = (isoDateString) => {
    // const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    // const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const d = new Date(isoDateString)
    const MMM = monthNames[d.getMonth()]
    const DDD = dayNames[d.getDay()]
    const dd = d.getDate()
    const hour = hourAmPm(d)
    return `${DDD}, ${MMM} ${dd} ${hour}`
}

const hasTags = has('tags')

const EventCards = (props) => {
    const { classes, events } = props
    return (
        <React.Fragment>
            <p>number of events is {events.length}</p>
            <Grid container spacing={Number(32)} className={classes.outer} >
                {events.map(c => {
                    const location = `${c.location.cityName}, ${c.location.stateCode} ${c.location.postalCode}`
                    return (
                        <Grid key={c._id} item xs={12} sm={6} md={4} >
                            <Card className={classes.card}>
                                <a href={c.linkToUrl} className={classes.link}>
                                    <CardActionArea>
                                        <CardMedia
                                            component='img'
                                            image={c.imageUrl}
                                            height='180'
                                        />
                                        <CardContent>
                                            <Typography className={classes.title}>
                                                {c.title}
                                            </Typography>
                                            <Typography className={classes.time} component="p">
                                                {formattedDate(c.dates.startDateTime)}
                                            </Typography>
                                            <Typography variant='caption' component='p' noWrap className={classes.venue}>
                                                {location}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </a>
                                <CardActions className={classes.actions} disableActionSpacing>
                                    <div className={classes.tags}>
                                        {
                                            hasTags(c)
                                                ? c.tags.map((t, index) => (
                                                    <Tag key={`t${index}`} label={t} />
                                                ))
                                                : null
                                        }
                                    </div>
                                </CardActions>

                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

const styles = theme => ({
    action: {
        border: 'none',
    },
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
        maxWidth: '345px'
    },
    cardContent: {
        padding: '5px 15px 5px 15px',
        borderBottom: 'solid 0.5px gray',
    },
    link: {
        textDecoration: 'none',
    },
    tags: {
        display: 'flex',
        flexFlow: 'row nowrap',
        marginLeft: '.6em',
        overflow: 'hidden',
    },
    media: {
        objectFit: 'cover',
    },
    organization: {
        height: '33px',
        lineHeight: '16.5px',
        overflow: 'hidden',
        paddingTop: '7px',
        paddingBottom: '4px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    outer: {
        paddingBottom: '40px'
    },
    time: {
        fontSize: '1.3em',
        marginTop: '1em',
        overflow: 'hidden',
        paddingTop: '.4rem',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    title: {
        fontSize: '1.4em',
        fontWeight: '600',
        height: '40px',
        letterSpacing: '0px',
        lineHeight: '19px',
        margin: 0,
        overflow: 'hidden',
    },
    venue: {
        fontSize: '1.3em',
        overflow: 'hidden',
        paddingTop: '7px',
        paddingBottom: '4px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
})

export default withStyles(styles)(EventCards)