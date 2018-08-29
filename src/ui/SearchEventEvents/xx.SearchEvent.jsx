import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as searchActions from 'store/actions/search-actions'
import * as searchSelectors from 'store/selectors/search-selectors'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

export class SearchEvent extends Component {

  constructor(props) {
  super(props)
    this.state = {
      showSearchIcon: true,
      executeSearch: false,
    }
  }

  handleChange = (value) => {
    this.props.searchTextSet(value)
  }

  searchEvents = () => {
    green('searchEvents()')
    this.setState({ executeSearch: true })
    // this.props.eventsSearchReadRequest(this.props.searchText)
  }

  render() {
    const { executeSearch } = this.state
    const { classes, searchText, searchEvents } = this.props
    // if (executeSearch) {
    //   green('execute search')
    //   return <Redirect to='/events/search/:searchValue' />
    // } else {
      // green('do not execute search')
      return (
        <Fragment>
          <TextField onChange={e => this.handleChange(e.target.value)} value={searchText} />
            <Button
              className={classes.searchIcon}
              onClick={searchEvents}
              disabled={searchText.length < 3}
            >
              Search
            </Button>
        </Fragment>
      )
    // }
  }
}

const styles = {}

const mapStateToProps = (state) => ({
  searchText: searchSelectors.getSearchText(state)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, searchActions)
)(SearchEvent)


