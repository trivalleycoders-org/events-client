import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Body1 from 'ui/ui-elements/typography/Body1'

const ByTvc = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <Body1
        className={classes.body1}
      >
          Made with pride by
      </Body1>
      <ResponsiveImage
        src='https://s3-us-west-2.amazonaws.com/tvc-events/media/logo.svg'
        alt='trivalley coders logo'
        className={classes.tvcLogo}
      />
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    paddingBottom: '3rem',
    backgroundColor: 'orange',
  },
  tvcLogo: {
    maxWidth: '325px',
  },
  body1: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    color: 'white',
  },
})

export default withStyles(styles)(ByTvc)