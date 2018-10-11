import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faMeetup, faGithub, faSlack, faReact } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
import A from 'ui/ui-elements/A'
import iExpress from './media/express.01.svg'
import iMongodb from './media/mongodb.svg'
import iNode from './media/node.svg'
import iReact from './media/react.svg'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'

const TVCLinks = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <ResponsiveImage src={iReact} className={classes.logo} alt='express js' />
      <ResponsiveImage src={iExpress} className={classNames(classes.logo, classes.express)} alt='express js' />
      <ResponsiveImage src={iMongodb} className={classes.logo} alt='express js' />
      <ResponsiveImage src={iNode} className={classes.logo} alt='express js' />
    </div>
  )
}

const styles = theme => {
  const leftRightMargin = theme.spacing.unit * 4
  const topBottomMargin = theme.spacing.unit * 4
  const logoMargin = `${topBottomMargin}px ${leftRightMargin}px ${topBottomMargin}px ${leftRightMargin}px`
  return ({
    wrapper: {
      // backgroundColor: 'green',
      // backgroundColor: 'green',
      display: 'flex',
      // flexflow: 'row wrap',
    },
    logo: {
      maxHeight: 50,
      paddingRight: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
    },
    express: {
      padding: '5px 0 5px 0',
      minWidth: 100,
    }
    // meetup: {
    //   color: '#f64060',
    //   fontSize: '3em',
    //   margin: logoMargin
    // },
    // github: {
    //   color: 'white',
    //   fontSize: '3em',
    //   margin: logoMargin
    // },
    // slack: {
    //   color: 'white',
    //   fontSize: '3em',
    //   margin: logoMargin
    // },
    // facebook: {
    //   color: '#3e5b99',
    //   fontSize: '3em',
    //   margin: logoMargin
    // },
  })
}

export default withStyles(styles)(TVCLinks)