import React, { Component, Fragment } from 'react'
import { compose } from 'recompose'
import SearchIcon from '@material-ui/icons/Search'
import { TextField, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class SearchEvent extends Component {

  searchEvents = () => {
    console.log('Searching Events....')
  }
  render() {
    const { classes } = this.props

    return (
      <Fragment>
        <TextField />
        <IconButton aria-label='Add to favorites' onClick={this.searchEvents}>
          <SearchIcon className={classes.folderIcon} />
        </IconButton>
      </Fragment>
    )
  }
}

export default compose(
  withStyles(styles),
)(SearchEvent)
