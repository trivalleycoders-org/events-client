import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import RightSide from './RightSide'
import ByTvc from './ByTvc'
// esline-disable-next-line
import { purple } from 'logger'

const Footer = ({ classes }) => {
  purple('Footer - render')
  return (
    <footer id='footer' className={classes.footer}>
      <div className={classes.left}>
        <ByTvc />
      </div>
      <div className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </div>
      <div className={classes.right}>
        <RightSide />
      </div>
    </footer>
  )
}

const styles = theme => ({

  footer: {

    width: '100%',
    // backgroundColor: 'rgba(255, 150, 255, 0.4)',
    // borderTop: '3px red solid',
    // borderBottom: '3px red solid',

    backgroundColor: '#303030',
    display: 'flex',
    flexFlow: 'column nowrap',

    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'rgba(255, 150, 255, 1)',
      height: 350,
      flexFlow: 'row nowrap',
    },
    flexShrink: 0,
  },
  left: {

    // backgroundColor: 'orange',


    [theme.breakpoints.up('md')]: {
      height: '100%',
      flexBasis: '33.33333333%',
    },
  },
  right: {
    // backgroundColor: 'yellow',


    [theme.breakpoints.up('md')]: {
      // width: 300,
      height: '100%',
      flexBasis: '66.66666666%',
    },
  },
  dividerContainer: {
    // backgroundColor: 'grey',
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit *2,
    //
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  divider: {
    backgroundColor: 'grey',
    height: 1,
    // width: '100%',

    [theme.breakpoints.up('md')]: {
      height: '100%',
      width: 1
    },
  },
})

export default withStyles(styles)(Footer)