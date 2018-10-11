import React from 'react'
import {
  withStyles,
} from '@material-ui/core'

/* User */
import ByTvc from './ByTvc'
import TVCLinks from './TVCLinks'
import TvcCopyright from './TvcCopyright'
import Mern from './Mern'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Footer = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <ByTvc />
      <Mern />
    </div>

  )
}


const styles = theme => ({

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