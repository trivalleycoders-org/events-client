import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Paper } from '@material-ui/core'
import Body1 from 'ui/ui-elements/typography/Body1'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import iTVC from './media/tvc-wordmark-2.svg'

const ByTvc = ({ classes }) => {
  return (
    <div id='ByTvc' className={classes.container}>
      <Paper className={classes.item} square elevation={0}>
        <Body1 align='center' color='white' className={classes.title}>Made with pride by</Body1>
        <ResponsiveImage src={iTVC} alt='tri valley coders' />
      </Paper>
    </div>
  )
}

const styles = theme => ({
  container: {
    // backgroundColor: 'rgb(25, 25, 25)',

    display: 'flex',
    flexFlow: 'column nowrap',


    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      alignContent: 'stretch',
      height: '100%',
      paddingTop: 0,
      paddingBottom: 0,
    },

  },
  item: {
    backgroundColor: 'transparent',
    // backgroundColor: 'rgb(50, 50, 50)',
    textAlign: 'center',
  },
  title:{
    marginBottom: theme.spacing.unit * 2
  }
})

export default withStyles(styles)(ByTvc)
