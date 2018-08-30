import React from 'react'
import {
  Typography,
  withStyles,
} from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import yellow from '@material-ui/core/colors/yellow'
import grey from '@material-ui/core/colors/grey'

const Xs = ({ classes }) => (
 <Typography variant='headline' className={classes.showXs}>xs</Typography>
)
const Sm = ({ classes }) => (
  <Typography variant='headline' className={classes.showSm}>sm</Typography>
)
const Md = ({ classes }) => (
  <Typography variant='headline' className={classes.showMd}>md</Typography>
)

const Lg = ({ classes }) => (
  <Typography variant='headline' className={classes.showLg}>lg</Typography>
)

const Xl = ({ classes }) => (
  <Typography variant='headline' className={classes.showXl}>xl</Typography>
)

const Breakpoints = ({ classes }) => {
  return (
    <React.Fragment>
      <Xs classes={classes}/>
      <Sm classes={classes}/>
      <Md classes={classes}/>
      <Lg classes={classes}/>
      <Xl classes={classes}/>
    </React.Fragment>
  )
}

const styles = theme => ({
  showXs: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: red[500],
      textAlign: 'center',
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    marginBottom: 40,
  },
  showSm: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: green[500],
      textAlign: 'center',
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    marginBottom: 40,
  },
  showMd: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: purple[500],
      textAlign: 'center',
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
    marginBottom: 40,
  },
  showLg: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: yellow[500],
      textAlign: 'center',
      color: 'black',
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    marginBottom: 40,
  },
  showXl: {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: grey[500],
      textAlign: 'center',
      paddingBottom: theme.spacing.unit,
      paddingTop: theme.spacing.unit,
    },
    marginBottom: 40,
  },
})

export default withStyles(styles)(Breakpoints)