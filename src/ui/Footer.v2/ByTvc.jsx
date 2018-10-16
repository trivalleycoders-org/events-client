import React from 'react'
import {
  withStyles,
} from '@material-ui/core'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Body1 from 'ui/ui-elements/typography/Body1'
import A from 'ui/ui-elements/A'
import iTVC from './media/tvc-wordmark-2.svg'

const ByTvc = ({ classes }) => {
  return (
    <React.Fragment>
      <Body1 color='white'>Made with pride by</Body1>
      <A href='http://trivalleycoders.org'>
      <ResponsiveImage src={iTVC} alt='tri valley coders' />
      </A>
    </React.Fragment>
  )
}

const styles = theme => ({})

export default withStyles(styles)(ByTvc)