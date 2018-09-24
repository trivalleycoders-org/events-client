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
import withWidth from '@material-ui/core/withWidth'
import { compose } from 'recompose'

const Xs = ({ classes, width }) => (
 <Typography variant='headline' className={classes.showXs}>xs width({width}px)</Typography>
)
const Sm = ({ classes, width }) => (
  <Typography variant='headline' className={classes.showSm}>sm width({width}px)</Typography>
)
const Md = ({ classes, width }) => (
  <Typography variant='headline' className={classes.showMd}>md width({width}px)</Typography>
)

const Lg = ({ classes, width }) => (
  <Typography variant='headline' className={classes.showLg}>lg width({width}px)</Typography>
)

const Xl = ({ classes, width }) => (
  <Typography variant='headline' className={classes.showXl}>xl width({width}px)</Typography>
)

const Breakpoints = ({ classes, width }) => {
  return (
    <React.Fragment>
      <Xs classes={classes} width={width}/>
      <Sm classes={classes} width={width}/>
      <Md classes={classes} width={width}/>
      <Lg classes={classes} width={width}/>
      <Xl classes={classes} width={width}/>
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

export default compose(
  withWidth(),
  withStyles(styles),
)(Breakpoints)

// export default withWidth()(withStyles(styles))(Breakpoints)