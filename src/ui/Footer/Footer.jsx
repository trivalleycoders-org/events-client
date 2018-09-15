import React from 'react'
import {
  withStyles,
} from '@material-ui/core'

import Body2 from 'ui/ui-elements/typography/Body2'


/* User */
import ByTvc from './ByTvc'

import TVCLinks from './TVCLinks'
import TvcCopyright from './TvcCopyright'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Footer = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <ByTvc />
      <TVCLinks />
      <TvcCopyright />
    </div>

  )
}


const styles = theme => ({

  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(22, 22, 22)',

  },

  body1: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    color: 'white',
  },
  body2: {
    color: 'white',
  },

})
export default withStyles(styles)(Footer)