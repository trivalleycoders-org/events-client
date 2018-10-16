import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Us from './Us'
import Mern from './Mern'

const RightSide = ({ classes }) => {
  return (
    <div id='RightSide' className={classes.container}>
      <div className={classes.rightTop}>
        <Mern />
      </div>
      <div className={classes.dividerContainer}>
        <div className={classes.divider}></div>
      </div>

      <div className={classes.rightBottom}>
        <Us />
      </div>
    </div>
  )
}

const styles = theme => ({
  container: {
    // backgroundColor: 'grey',
    display: 'flex',
    flexFlow: 'column',
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
  rightTop: {
    // backgroundColor: 'red',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,

    [theme.breakpoints.up('md')]: {
      // paddingBottom: theme.spacing.unit * 2,
      flexBasis: '50%',
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 3,
    },
  },
  rightBottom: {
    // backgroundColor: 'orange',
    [theme.breakpoints.up('md')]: {
      flexBasis: '50%',
    },
  },
  dividerContainer: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  divider: {
    backgroundColor: 'grey',
    height: 1,
  },
})

export default withStyles(styles)(RightSide)