import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as searchActions from 'store/actions/search-actions'
import * as searchSelectors from 'store/selectors/search-selectors'
import { Link, Redirect } from 'react-router-dom'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { green } from '../../logger/index'

export class SearchEvent extends Component {

  constructor(props) {
  super(props)
    this.state = {
      searchText: '',
      showSearchIcon: true,
      search: false,
    }
  }


  handleChange = (value) => {
    green('handleChange', value)
    // this.setState((prevState, props) => ({
    //   searchText: value
    // }))
    this.props.setSearchText(value)
  }

  searchEvents = () => {
    green('searchEvent', 'hello')
    this.setState({ search: true })
  }

  render() {
    const { classes } = this.props
    const { searchText } = this.props

    green('Search: render()')
    green('searchText', searchText.length)
    green('props', this.props)

    // if (search) {
    //   return <Redirect to={`/events/search/${searchText}`} />
    // }
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

const styles = {

}

const mapStateToProps = (state) => {
  const o = searchSelectors.getSearchText(state)
  green('o', o)
  return {
    searchText: o
  }

}


export default compose(
  withStyles(styles),
  connect(mapStateToProps, searchActions)
)(SearchEvent)


