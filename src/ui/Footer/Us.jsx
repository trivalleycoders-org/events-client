import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Body1 from 'ui/ui-elements/typography/Body1'
import iMeetup from './media/meetup-swarm.svg'
import iSlack from './media/slack.svg'
import iFacebook from './media/facebook.svg'
import iGithub from './media/github-octocat.svg'

const colors = ['red', 'green', 'blue']

const Us = ({ classes }) => {
  return (
    <Grid
      container
      id='Us'
      // spacing={16}
      className={classes.container}
      alignItems='stretch'
      direction='row'
      justify='center'
    >

      <Grid item xs={12} md={4} className={classes.gridItemL2}>
        <Paper
          className={classes.itemPaper}
          // style={{ backgroundColor: colors[0] }}
          square
          elevation={0}
        >
          <Body1 align='center' color='white' className={classes.body1}>
            Join Us
          </Body1>
          <div className={classes.logoGroup}>
            <div><img src={iMeetup} className={classes.logoImg} alt='meetup' /></div>
            <div><img src={iSlack} className={classes.logoImg} alt='meetup' /></div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} className={classes.gridItemL2}>
        <Paper
          className={classes.itemPaper}
          // style={{ backgroundColor: colors[1] }}
          square
          elevation={0}
        >
          <Body1 align='center' color='white' className={classes.body1}>
            Follow Us
          </Body1>
          <div className={classes.logoGroup}>
            <div><img src={iFacebook} className={classes.logoImg} alt='meetup' /></div>
            <div><img src={iGithub} className={classes.logoImg} alt='meetup' /></div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} className={classes.gridItemL2}>
        <Paper
          className={classes.itemPaper}
          // style={{ backgroundColor: colors[2] }}
          square
          elevation={0}
        >
            <Body1 align='center' color='white'  className={classes.body1ContactUs}>
              Contact Us
            </Body1>
            <Body1 align='center' color='white' className={classes.info}>
              info@trivalleycoders.com
            </Body1>
        </Paper>
      </Grid>

    </Grid>
  )
}

const styles = theme => ({
  container: {
    // backgroundColor: 'rgb(50, 250, 50)',
    display: 'flex',
    height: '100%',
    // maxWidth: 400,
    // justifyContent: 'center',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  itemPaper: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  gridItemL2: {
    // backgroundColor: 'rgb(75, 75, 75)'
  },
  logoImg: {
    maxHeight: 50,
  },
  logoGroup: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  body1: {
    marginBottom: 30
  },
  body1ContactUs: {
    marginTop: theme.spacing.unit,
    marginBottom: 0
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
})

export default withStyles(styles)(Us)