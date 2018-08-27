import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { mailFolderListItems, otherMailFolderListItems } from './tileData'
import { menuItems } from './tileData'
import * as appMenuActions from 'store/actions/app-menu-actions'
import * as appMenuSelectors from 'store/selectors/app-menu-selectors'
// import SearchEvent from '../AppBar/SearchEvent'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class AppMenu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    // this.setState({
    //   [side]: open,
    // })
    // green('toggleDraw: props', this.props)
    this.props.toggleAppMenu()
  }

  render() {
    const { classes } = this.props

    // const sideList = (
    //   <div className={classes.list}>
    //     <List>{menuItems}</List>
    //     <Divider />
    //     <List>{otherMailFolderListItems}</List>
    //   </div>
    // )

    const renderMenuItems = (
      <div className={classes.list}>
        <List>{menuItems}</List>
      </div>
    )

    // const fullList = (
    //   <div className={classes.fullList}>
    //     <List>{mailFolderListItems}</List>
    //     <Divider />
    //     <List>{otherMailFolderListItems}</List>
    //   </div>
    // )

    return (
      <div>
        <Drawer open={this.props.appMenuState} onClose= {this.toggleDrawer('left', false)}>

          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >

            {renderMenuItems}
          </div>
        </Drawer>
      </div>
    )
  }
}

AppMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}

const mapStateToProps = (state) => ({
  appMenuState: appMenuSelectors.getAppMenuState(state),
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, appMenuActions),
)(AppMenu)

