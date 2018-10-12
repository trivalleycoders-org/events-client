import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faMeetup, faGithub, faSlack, faReact } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import {
  withStyles,
  Grid,
} from '@material-ui/core'
import Body1 from 'ui/ui-elements/typography/Body1'
import A from 'ui/ui-elements/A'
import iExpress from './media/express.svg'
import iMongodb from './media/mongodb.svg'
import iNode from './media/nodejs.svg'
import iReact from './media/react-word.svg'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'

const TVCLinks = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <Body1
          color='white'
      >
        MERN Stack Experts
      </Body1>
      <ResponsiveImage src={iMongodb} className={classes.logo} alt='mongo db' />
      <ResponsiveImage src={iExpress} className={classNames(classes.logo, classes.express)} alt='express js' />
      <ResponsiveImage src={iReact} className={classes.logo} alt='react js' />
      <ResponsiveImage src={iNode} className={classes.logo} alt='node js' />
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
      flexFlow: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      // flexflow: 'row wrap',
    },
    logo: {
      maxHeight: 35,
      // paddingRight: theme.spacing.unit,
      // paddingLeft: theme.spacing.unit,
    },
    express: {
      // padding: '5px 0 5px 0',
      paddingTop: 2,
      paddingBottom: 2,
      // minWidth: 100,
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