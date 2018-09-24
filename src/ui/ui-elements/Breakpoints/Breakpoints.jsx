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

const Breakpoints = ({ classes, width }) => {
  return (
    <Typography variant='headline' className={classes.root}>{width}</Typography>
  )
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    // paddingBottom: theme.spacing.unit,
    // paddingTop: theme.spacing.unit,
    padding: '0.5rem',
    [theme.breakpoints.only('xs')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.only('sm')]: {
      backgroundColor: green[500],
    },
    [theme.breakpoints.only('md')]: {
      backgroundColor: purple[500],
    },
    [theme.breakpoints.only('lg')]: {
      backgroundColor: yellow[500],
    },
    [theme.breakpoints.only('xl')]: {
      backgroundColor: grey[500],
    },
  },
})

export default compose(
  withWidth(),
  withStyles(styles),
)(Breakpoints)

// export default withWidth()(withStyles(styles))(Breakpoints)