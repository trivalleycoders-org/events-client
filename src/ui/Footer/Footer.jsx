import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ResponsiveImage from 'ui/elements/ResponsiveImage'
import iTVC from './media/tvc-wordmark-2.svg'
import Divider from './Divider'
import Mern from './Mern'
import Us from './Us'

const Footer = (props) => {
  const { classes } = props

  return (
    <div id='Footer-wrapper' className={classes.wrapper}>
      <div id='Footer-left' className={classes.left}>
        <Typography variant='h6' align='center' color='inherit' className={classes.madeByTitle}>
          Made with pride by
        </Typography>
        <ResponsiveImage src={iTVC} alt='tri valley coders logo' minHeight={50}/>
      </div>
      <div id='Footer-right' className={classes.right}>
        <div className={classes.rightTop}>
          <Mern />
        </div>
        <Divider direction='horizontal' />
        <div className={classes.rightBottom}>
          <Us />
        </div>
      </div>
    </div>
  )
}

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    rightTop: {
      flexBasis: '50%',
      paddingTop: spaceUnit * 4,
      paddingBottom: spaceUnit * 2,
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'space-between',
      },
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }
    },
    wrapper: {
      color: 'white',
      [theme.breakpoints.up('xs')]: {
        paddingTop: spaceUnit * 3,
      },
      [theme.breakpoints.up('md')]: {
        height: 480,
        display: 'flex',
        paddingTop: spaceUnit * 3,
        paddingBottom: spaceUnit * 3,
      },
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: spaceUnit * 4,
      [theme.breakpoints.up('md')]: {
        flexBasis: '33.333333%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    right: {
      flexBasis: '66.666666%',
      display: 'flex',
      flexDirection: 'column',
    },
    madeByTitle: {
      marginBottom: spaceUnit * 2,
      [theme.breakpoints.up('md')]: {
        marginBottom: 32,
      }
    },
    rightBottom: {
      flexDirection: 'column',
      flexBasis: '50%',
      display: 'flex',
      paddingTop: spaceUnit * 4,
      paddingBottom: spaceUnit * 4,
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
    },
  })
}

export default withStyles(styles)(Footer)