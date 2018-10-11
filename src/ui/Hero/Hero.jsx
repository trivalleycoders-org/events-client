import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper
} from '@material-ui/core'
// import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
// import SearchBox from 'ui/SearchBox'
import Display4 from 'ui/ui-elements/typography/Display4'
import iHero from './media/hero4.jpg'
import SearchBox from 'ui/SearchBox'

const Hero = ({ classes, location }) => {
  console.log('iHero', iHero)
  const background = {
    backgroundImage: `url(${iHero})`,
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
  }
  const showHero = location.pathname.startsWith('/search-events')
      || location.pathname === '/'
  return showHero
    ? <Paper className={classes.wrapper}  style={background}>
        <div className={classes.background}>
          <SearchBox />
        </div>
      </Paper>
    : null
}

const styles = theme => {
  const unit = theme.spacing.unit
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
      marginBottom: theme.spacing.unit * 4,
      // height: '500px',
      height: 383,
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