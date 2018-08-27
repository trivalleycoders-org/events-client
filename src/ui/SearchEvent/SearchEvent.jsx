import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
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
      showSearchIcon: true,
      search: false,
    }

    // this.setSearchInputRef = element => {
    //   this.searchInput = element
    // }
    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (value) => {
    // e.persist()
    green('handleChange', value)
    this.setState((prevState, props) => ({
      searchText: value
    }))
  }

  searchEvents = () => {
    green('searchEvent', 'hello')
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon
    }))
    // this.props.requestSearchEvents(this.state.searchText)
    this.setState({ search: true })

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
    const { searchText, search } = this.state
    const showSearch = this.state.showSearchIcon



    if (search) {
      return <Redirect to={`/events/search/${searchText}`} />
    }
    return (
      <Fragment>
        <TextField onChange={e => this.handleChange(e.target.value)} value={this.state.searchText} />


        <IconButton aria-label='Add to favorites'>
          {showSearch
            ? <SearchIcon className={classes.searchIcon} onClick={this.searchEvents} />
            : <CancelIcon className={classes.cancelIcon} onClick={this.clearSearchResults} />
          }
        </IconButton>

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

