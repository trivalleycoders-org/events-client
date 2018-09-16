import React from 'react'
import Body1 from 'ui/ui-elements/typography/Body1'
import {withStyles } from '@material-ui/core'

const TvcCopyright = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <Body1
        align='center'
        className={classes.body1}
        color='white'
      >
        &copy; 2017 TriValley Coders &trade; All rights reserved.
      </Body1>
      <Body1
        align='center'
        className={classes.body1}
        color='white'
      >
        <i>Don't code alone!</i> &trade;
      </Body1>
    </div>
  )
}

const styles = {
  wrapper: {
    // backgroundColor: 'red'
  }
}

export default withStyles(styles)(TvcCopyright)