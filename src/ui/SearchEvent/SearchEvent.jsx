import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as searchActions from 'store/actions/search-actions'
import * as searchSelectors from 'store/selectors/search-selectors'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

export class SearchEvent extends Component {

  constructor(props) {
  super(props)
    this.state = {
      showSearchIcon: true,
    }
  }

  handleChange = (value) => {
    this.props.searchTextSet(value)
  }

  searchEvents = () => {
    green('searchEvents()')
    this.props.eventsSearchReadRequest(this.props.searchText)
  }

  render() {
    const { classes } = this.props
    const { searchText } = this.props

    return (
      <Fragment>
        <TextField onChange={e => this.handleChange(e.target.value)} value={searchText} />

        <Button
            className={classes.searchIcon}
            onClick={this.searchEvents}
        >
          Search
        </Button>

      </Fragment>
    )
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


