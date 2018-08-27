import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import SearchIcon from '@material-ui/icons/Search'
import CancelIcon from '@material-ui/icons/Cancel'
import { TextField, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import * as eventActions from 'store/actions/event-actions'
import { green } from '../../logger/index';

export class SearchEvent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      showSearchIcon: true
    }

    this.setSearchInputRef = element => {
      this.searchInput = element
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    e.persist()
    this.setState((prevState, props) => ({
      searchText: e.target.value
    }))
  }

  searchEvents = () => {
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon
    }))
    this.props.requestSearchEvents(this.state.searchText)
  }

  //clearSearch
  clearSearchResults = () => {
    this.setState((prevState, props) => ({
      searchText: ''
    }))
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon
    }))
    this.props.requestReadEvents()
  }

  render() {
    const { classes } = this.props
    const showSearch = this.state.showSearchIcon


    return (
      <Fragment>
        <TextField onChange={this.handleChange} value={this.state.searchText} />

        <Link to={`/search/${this.state.searchText}`}>
          <IconButton aria-label='Add to favorites'>
            {showSearch
              ? <SearchIcon className={classes.searchIcon} onClick={this.searchEvents} />
              : <CancelIcon className={classes.cancelIcon} onClick={this.clearSearchResults} />
            }
          </IconButton>
        </Link>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  // events: eventsSelectors.getAllEvents(state),
  requestSearchEvents: eventActions.requestSearchEvents,
  requestReadEvents: eventActions.requestReadEvents
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions)
)(SearchEvent)

