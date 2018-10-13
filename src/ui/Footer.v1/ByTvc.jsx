import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Body1 from 'ui/ui-elements/typography/Body1'
import A from 'ui/ui-elements/A'

const ByTvc = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body1}>
        <Body1
          color='white'

        >
            Made with pride by
        </Body1>
      </div>

      <A href='http://trivalleycoders.org'>
        <ResponsiveImage
          src='https://s3-us-west-2.amazonaws.com/tvc-events/media/logo.svg'
          alt='trivalley coders logo'
          className={classes.tvcLogo}
        />
      </A>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    // height: 150,
    // backgroundColor: 'orange',
  },
  tvcLogo: {
    maxWidth: '325px',
  },
  body1: {
    // marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
  },
})

export default withStyles(styles)(ByTvc)