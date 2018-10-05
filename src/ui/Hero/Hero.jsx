import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper
} from '@material-ui/core'
// import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
// import SearchBox from 'ui/SearchBox'
import Display4 from 'ui/ui-elements/typography/Display4'

const Hero = ({ classes, location }) => {
  const showHero = location.pathname.startsWith('/search-events')
      || location.pathname === '/events'
      || location.pathname === '/'
  return showHero
    ? <Paper className={classes.wrapper}>
        <div className={classes.title}>
          <Display4 /*color='white'*/>Drone Madness</Display4>
        </div>

        <div className={classes.search}>

        </div>

      </Paper>
    : null
}

const styles = theme => {
  const unit = theme.spacing.unit
  return ({
    wrapper: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      // justifyContent: 'center',
      // alignContent: 'center',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing.unit * 4,
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/tvc-events/media/hero.jpg)',

      height: '500px',
      paddingTop: unit * 8,
      // opacity: 0.2,
    },
    title: {
      // paddingTop: unit * 4,
      display: 'flex',
      alignItems: 'center',
      flexBasis: '25%',
      // backgroundColor: 'green',
    },
    search: {
      display: 'flex',
      flexBasis: '75%',
      // backgroundColor: 'orange',
      // height: '100%',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: theme.spacing.unit * 3
    },
    mainFeaturedPostContent: {
      padding: `${theme.spacing.unit * 6}px`,
      [theme.breakpoints.up('md')]: {
        paddingRight: 0,
      },
    },
  })
}

export default withStyles(styles)(withRouter(Hero))