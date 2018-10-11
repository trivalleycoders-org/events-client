import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { searchTextSet, searchTextUnset, eventsSearchReadRequest } from 'store/actions/search-actions'
import { eventsReadRequest } from 'store/actions/event-actions'
import * as searchSelectors from 'store/selectors/search-selectors'
import { TextField, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel'
import Button from 'ui/ui-elements/Button'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

export class SearchEvent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showSearchIcon: true,
      searchText: ''
    }
  }

  handleChange = (value) => {
    this.setState((props) => ({
      searchText: value
    }))
  }

  searchEvents = () => {
    this.props.searchTextSet(this.state.searchText)
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon
    }))
    this.props.eventsSearchReadRequest(this.state.searchText)
  }

  clearSearchResults = () => {
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon,
      searchText: ''
    }))
    this.props.searchTextUnset()
    this.props.eventsReadRequest()
  }

  render() {
    const { classes, searchText } = this.props
    return (
      <Paper className={classes.wrapper}>
        <TextField onChange={e => this.handleChange(e.target.value)} value={this.state.searchText} />
        {this.state.showSearchIcon
          ?
          <Button
            color='green'
            className={classes.searchIcon}
            disabled={searchText.length < 3}
            onClick={this.searchEvents}
          >
            Search
              </Button>
          :
          <CancelIcon
            className={classes.cancelIcon}
            onClick={this.clearSearchResults}
          />
        }
      </Paper>
    )
  }

}


const styles = theme => {
  const unit = theme.spacing.unit
  return (
    {
      wrapper: {
        backgroundColor: 'white',
        padding: `${unit * 4}px ${unit * 8}px ${unit * 4}px ${unit * 8}px`
      }
    }
  )
}

const actions = { searchTextSet, searchTextUnset, eventsSearchReadRequest, eventsReadRequest }

const mapStateToProps = (state) => ({
  searchText: searchSelectors.getSearchText(state),
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(SearchEvent)


