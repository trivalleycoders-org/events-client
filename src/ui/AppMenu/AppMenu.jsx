import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { menuItems } from './appMenuData'
import * as appMenuActions from 'store/actions/app-menu-actions'
import * as appMenuSelectors from 'store/selectors/app-menu-selectors'
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
    this.props.appMenuToggle()
  }

  render() {
    const { classes } = this.props

    const renderMenuItems = (
      <div className={classes.list}>
        <List>{menuItems}</List>
      </div>
    )

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
}

const mapStateToProps = (state) => ({
  appMenuState: appMenuSelectors.getAppMenuState(state),
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, appMenuActions),
)(AppMenu)

