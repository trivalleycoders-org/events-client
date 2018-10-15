import React from 'react'
import {
  withStyles,
  Grid,
} from '@material-ui/core'

/* User */
import ByTvc from './ByTvc'
import TVCLinks from './TVCLinks'
import Mern from './Mern'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

// alignContent='stretch'


const Footer = ({ classes }) => {
  return (
    <Grid container className={classes.grid} alignItems='stretch' alignContent='stretch'>
      <Grid item className={classes.item}>
        <ByTvc />
      </Grid>
      <Grid item  className={classes.item}>
        <Mern />
      </Grid>
      <Grid item  className={classes.item}>
        <TVCLinks />
      </Grid>
    </Grid>

  )
}


const styles = theme => ({
  grid: {
    backgroundColor: 'rgb(22, 22, 22)',
  },
  item: {
    backgroundColor: 'green',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    alignItems: 'center',
    backgroundColor: 'rgb(22, 22, 22)',
    paddingTop: 65,
    paddingBottom: 85,
  },
})
export default withStyles(styles)(Footer)

// <TVCLinks />
   //    <TvcCopyright />