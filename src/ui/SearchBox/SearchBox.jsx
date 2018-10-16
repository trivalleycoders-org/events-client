import React from 'react'
// import { connect } from 'react-redux'
// import { compose } from 'recompose'
import { Link } from 'react-router-dom'
// import { searchTextSet, searchTextUnset, eventsSearchReadRequest } from 'store/actions/search-actions'
// import { eventsReadRequest } from 'store/actions/event-actions'
// import * as searchSelectors from 'store/selectors/search-selectors'
import { TextField, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
// import Button from 'ui/ui-elements/Button'
// import { Button } from '@material-ui/core'
import Button from 'ui/ui-elements/Button'
import CancelIcon from '@material-ui/icons/Cancel'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

export class SearchBox extends React.Component {
  state = {
    showSearchIcon: true,
    searchString: ''
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     showSearchIcon: true,
  //     searchString: ''
  //   }
  // }

  handleChange = (value) => {
    // green('handleChange: value', value)
    this.setState({
      searchString: value
    })
  }

  // searchEvents = () => {
  //   this.setState((prevState) => ({
  //     showSearchIcon: !prevState.showSearchIcon
  //   }))
  //   this.props.eventsSearchReadRequest(this.state.searchString)
  // }

  clearSearchResults = () => {
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon,
      searchText: ''
    }))
    // this.props.searchTextUnset()
    // ??? Should this be a link?
    this.props.eventsReadRequest()
  }

  render() {
    const { classes } = this.props
    const { searchString, showSearchIcon } = this.state

    return (
      <Paper className={classes.wrapper}>
        <TextField onChange={e => this.handleChange(e.target.value)} value={searchString} />
        {showSearchIcon
          ?
          <Link
            to={{
              pathname: '/search-events/',
              search: `?searchString=${searchString}`,
            }}

          >
            <Button
              color='primary'
              disabled={searchString.length < 3}
              // variant='contained'
            >
              Search
            </Button>
          </Link>
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
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: theme.spacing.unit
      }
    }
  )
}

// const actions = { searchTextSet, searchTextUnset, eventsSearchReadRequest, eventsReadRequest }

// const mapStateToProps = (state) => ({
//   searchText: searchSelectors.getSearchText(state),
// })

export default withStyles(styles)(SearchBox)

// export default compose(
//   withStyles(styles),
//   connect(mapStateToProps, actions)
// )(SearchBox)


