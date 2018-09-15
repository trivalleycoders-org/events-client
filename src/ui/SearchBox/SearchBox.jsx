import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import * as searchActions from 'store/actions/search-actions'
import * as searchSelectors from 'store/selectors/search-selectors'
import { TextField, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Button from 'ui/ui-elements/Button'
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

  render() {
    const { classes, searchText } = this.props
      green('props', this.props)
      return (
        <Paper className={classes.wrapper}>
          <TextField onChange={e => this.handleChange(e.target.value)} value={searchText} />
            <Link to={`/search-events/${searchText}`}>
              <Button
                color='green'
                className={classes.searchIcon}
                disabled={searchText.length < 3}
              >
                Search
              </Button>
            </Link>
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

const mapStateToProps = (state) => ({
  searchText: searchSelectors.getSearchText(state)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, searchActions)
)(SearchEvent)


