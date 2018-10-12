import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import { searchTextSet, searchTextUnset, eventsSearchReadRequest } from 'store/actions/search-actions'
import { eventsReadRequest } from 'store/actions/event-actions'
import * as searchSelectors from 'store/selectors/search-selectors'
import { TextField, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import Button from 'ui/ui-elements/Button'
import { Button } from '@material-ui/core'
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
  return (
    {
      wrapper: {
        backgroundColor: 'transparent',
        // border: '1px solid #2196f3',
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: theme.spacing.unit

        // padding: `${unit * 2}px ${unit * 8}px ${unit * 2}px ${unit * 8}px`
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


