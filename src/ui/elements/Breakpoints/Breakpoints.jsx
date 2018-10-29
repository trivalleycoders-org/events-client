// @inheritedComponent Paper

import React from 'react'
import { compose } from 'recompose'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Paper, withWidth } from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import yellow from '@material-ui/core/colors/yellow'
import grey from '@material-ui/core/colors/grey'

class Breakpoints extends React.Component {

  state = {
    position: 'top',
  }

  positionClick = (e) => {
    this.setState({ position: e.target.name })
  }

  render() {
    const { classes, width } = this.props
    const className = classNames({
      [this.props.classes.root]: true,
      [this.props.classes.positionFixedTop]: this.state.position === 'top',
      [this.props.classes.positionFixedBottom]: this.state.position === 'bottom',
    })
    return (
      <Paper square elevation={4} className={className}>
        <div className={classes.width}>
          <span className={classes.widthSize}>{width.toUpperCase()}</span>
        </div>
        <div className={classes.buttons}>
          <button name='top' className={classes.button} onClick={this.positionClick}>Top</button>
          <button name='bottom' className={classes.button} onClick={this.positionClick}>Bottom</button>
        </div>
      </Paper>
    )
  }

}

export const styles = theme => {

  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar + 10,
      flexShrink: 0,
      textAlign: 'center',
      margin: 0,
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
    positionFixedTop: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
    },
    positionFixedBottom: {
      position: 'fixed',
      bottom: 0,
      left: 'auto',
      right: 0,
    },
    width: {
      flexBasis: '10%',
    },
    button: {
      marginRight: 8,
      marginLeft: 8,
      fontSize: 10,
      borderWidth: 3,
    },
    widthSize: {
      fontSize: 12,
    },
  }
}


export default compose(
  withWidth(),
  withStyles(styles),
)(Breakpoints)
