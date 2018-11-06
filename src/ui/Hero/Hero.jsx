import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper
} from '@material-ui/core'
// import ResponsiveImage from 'ui/elements/ResponsiveImage'
// import SearchBox from 'ui/SearchBox'
import iHero from './media/hero4.jpg'
import SearchBox from 'ui/SearchBox'
// eslint-disable-next-line
import { purple } from 'logger'
import { logRender } from 'logging'

const Hero = ({ classes, location }) => {
  logRender && purple('Hero - render')
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
      color: theme.palette.common.white,
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
    },
    title: {
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
