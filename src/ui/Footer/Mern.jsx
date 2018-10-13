import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faMeetup, faGithub, faSlack, faReact } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import {
  withStyles,
  Grid,
  Paper,
} from '@material-ui/core'
import Body1 from 'ui/ui-elements/typography/Body1'

import A from 'ui/ui-elements/A'
import iExpress from './media/express.svg'
import iMongodb from './media/mongodb.boxed2.png'
import iNode from './media/nodejs.svg'
import iReact from './media/react-word.svg'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'

const TVCLinks = ({ classes }) => {
  return (
      <div>
        <div className={classes.top}>
          <Body1
            align='center'
            color='white'
            className={classes.title}
          >
            MERN Stack Experts
          </Body1>
        </div>
        <div>
        <Grid container xs={12} direction='row' spacing={16}>
          <Grid item xs={3} className={classes.item} alignContent='stretch'>
            <Paper className={classes.paper} elevation={0}>
              <ResponsiveImage src={iMongodb} className={classes.logo} alt='mongo db' />
            </Paper>
          </Grid>
          <Grid item xs={3} className={classes.item} alignItems='center'>
            <Paper className={classes.paper} elevation={0}>
              <ResponsiveImage src={iExpress} className={classNames(classes.logo, classes.express)} alt='express js' />
            </Paper>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <Paper className={classes.paper} elevation={0}>
              <ResponsiveImage src={iReact} className={classes.logo} alt='react js' />
            </Paper>
          </Grid>
          <Grid item xs={3} className={classes.item}>
            <Paper className={classes.paper} elevation={0}>
              <ResponsiveImage src={iNode} className={classes.logo} alt='node js' />
            </Paper>
          </Grid>
        </Grid>
        </div>
      </div>




  )
}

const styles = theme => {
  const leftRightMargin = theme.spacing.unit * 4
  const topBottomMargin = theme.spacing.unit * 4
  const logoMargin = `${topBottomMargin}px ${leftRightMargin}px ${topBottomMargin}px ${leftRightMargin}px`
  return ({
    top: {
      backgroundColor: 'red'
    },
    title: {
      backgroundColor: 'purple',
      marginBottom: 20,
    },
    item: {
      backgroundColor: 'rgb(100, 100, 100)',
      // height: '100%',
    },
    wrapper: {
      // backgroundColor: 'green',
      // backgroundColor: 'green',
      // display: 'flex',
      // flexFlow: 'column',
      // justifyContent: 'flex-start',
      // alignItems: 'flex-start',
      // flexflow: 'row wrap',
    },
    logo: {
      maxHeight: 35,
      // paddingRight: theme.spacing.unit,
      // paddingLeft: theme.spacing.unit,
    },
    express: {
      // padding: '5px 0 5px 0',
      // paddingTop: 2,
      // paddingBottom: 2,
      // minWidth: 100,
      // width: 40,
    },
    paper: {
      backgroundColor: 'transparent',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
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