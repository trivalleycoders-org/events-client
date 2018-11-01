import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const ContentFiller = (props) => {
  const { classes } = props
  return (
    <div id='ContentFiller-wrapper' className={classes.wrapper}>
      <div
        className={classes.fillerBlock}
        style={{backgroundColor: '#551a8b'}}
      >
      </div>
      <div
        className={classes.fillerBlock}
        style={{backgroundColor: '#663096'}}
      >
      </div>
      <div
        className={classes.fillerBlock}
        style={{backgroundColor: '#7647a2'}}
      >
      </div>
      <div
        className={classes.fillerBlock}
        style={{backgroundColor: '#885ead'}}
      >
      </div>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    // overflow: 'scroll',
    // background: 'purple',

  },
  fillerBlock: {
    border: '2px solid #a936f1',
    paddingTop: 200,
  }
})

export default withStyles(styles)(ContentFiller)

