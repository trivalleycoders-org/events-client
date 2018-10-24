import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper
} from '@material-ui/core'
// import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
// import SearchBox from 'ui/SearchBox'
import iHero from './media/hero4.jpg'
import SearchBox from 'ui/SearchBox'

const Hero = ({ classes, location }) => {
  const background = {
    backgroundImage: `url(${iHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const showHero = location.pathname.startsWith('/search-events')
      || location.pathname === '/'
  return showHero
    ? <Paper id='Hero' className={classes.wrapper} style={background} square elevation={0}>
        <div className={classes.background}>
          <SearchBox />
        </div>
      </Paper>
    : null
}

const styles = theme => {
  return ({
    background: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapper: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      // backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      // marginBottom: theme.spacing.unit * 4,
      // height: '500px',
      height: 200,

      [theme.breakpoints.only('sm')]: {
        height: 300,
      },
      [theme.breakpoints.only('md')]: {
        height: 350,
      },
      [theme.breakpoints.up('lg')]: {
        height: 380,
      },
      // Tmp
      borderTop: '3px solid pink',
      borderBottom: '3px solid pink',

      // Tmp

    },
    title: {
      // paddingTop: unit * 4,
      display: 'flex',
      alignItems: 'center',
      flexBasis: '25%',
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