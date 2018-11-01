import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import ResponsiveImage from 'ui/elements/ResponsiveImage'
import iMongo from './media/mongodb.boxed.svg'
import iExpress from './media/express.boxed.svg'
import iReact from './media/react.boxed.1.svg'
import iNode from './media/nodejs.boxed.svg'

const Mern = (props) => {
  const { classes } = props

  return (
    <React.Fragment>
      <Typography variant='h6' align='center' color='inherit'>
          MERN Stack Experts
        </Typography>
        <div className={classes.logoRowWrapper}>
          <div className={classes.logoRow}>
            <ResponsiveImage src={iMongo} alt='mongo db logo' maxHeight={40}/>
            <ResponsiveImage src={iExpress} alt='express js logo' maxHeight={40}/>
          </div>
        </div>
        <div className={classes.logoRowWrapper}>
          <div className={classes.logoRow}>
            <ResponsiveImage src={iReact} alt='react js logo' maxHeight={32}/>
            <ResponsiveImage src={iNode} alt='node js logo' maxHeight={32}/>
          </div>
        </div>

    </React.Fragment>
  )
}

const styles = theme => {
  const spaceUnit = theme.spacing.unit
  return ({
    logoRowWrapper: {
      [theme.breakpoints.up('sm')]: {
        padding: '0 20%',
      },
    },
    logoRow: {
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: spaceUnit * 2,
      paddingBottom: spaceUnit * 2,
    },
  })
}



export default withStyles(styles)(Mern)