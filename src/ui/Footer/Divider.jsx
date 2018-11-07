import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// import classNames from 'classnames'

const Divider = (props) => {
  const {
    classes,
    direction = 'vertical'
  } = props
  const container = direction === 'vertical'
    ? classes.verticalContainer
    : classes.horizontalContainer
  const divider = direction === 'vertical'
    ? classes.verticalDivider
    : classes.horizontalDivider
  return (
    <div className={container}>
      <div className={divider}></div>
    </div>
  )
}

const styles = theme => ({
  horizontalContainer: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  horizontalDivider: {
    backgroundColor: 'grey',
    height: 1,
  },
  verticalContainer: {
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit *2,
    //
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  verticalDivider: {
    backgroundColor: 'grey',
    height: 1,
    // width: '100%',

    [theme.breakpoints.up('md')]: {
      height: '100%',
      width: 1
    },
  },
})

export default withStyles(styles)(Divider)

/* vertical

*/