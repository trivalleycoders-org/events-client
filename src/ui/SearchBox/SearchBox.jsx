import React from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { Input, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {withRouter} from 'react-router-dom'
import Button from 'ui/elements/Button'
import CancelIcon from '@material-ui/icons/Cancel'

export class SearchBox extends React.Component {
  state = {
    showSearchIcon: true,
    searchString: '',
  }

  handleKeyPress = (e) => {
    if (e.keyCode === 0 || e.which === 0) {
      this.setState({
        searchString: e.target.value
      })
      this.props.history.push(`/search-events/?searchString=${e.target.value}`)
    }
  }

  handleChange = (e) => {
    this.setState({
      searchString: e.target.value
    })
  }

  clearSearchResults = () => {
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon,
      searchString: ''
    }))
    this.props.eventsReadRequest()
  }

  render() {

    const { classes } = this.props
    const { searchString, showSearchIcon } = this.state
    return (
      <Paper
        id='SearchBox'
        className={classes.wrapper}
      >
        <Input 
          className={classes.input}
          value={this.state.searchString}
          onChange={this.handleChange} 
          onKeyPress={this.handleKeyPress.bind(this)}/>
        {showSearchIcon
          ?
          <Link
            to={
              searchString.length > 3 ?
              {
              pathname: '/search-events/',
              search: `?searchString=${searchString}`,
              }
              :
              ''
            }
            className={classes.link}
          >
            <Button
              color='primary'
              disabled={searchString.length < 3}
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

const styles = theme => ({
  wrapper: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing.unit,
  },
  input: {
    color: 'white',
  },
  link: {
    textDecoration: 'none'
  }
})

export default compose (
  withRouter,
  withStyles(styles))(SearchBox)
