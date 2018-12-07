import React from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { Input, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {withRouter} from 'react-router-dom'
import Button from 'ui/elements/Button'

export class SearchBox extends React.Component {
  state = {
    searchString: '',
  }

  handleEnterKey = (e) => {
    e.persist()
    if (e.keyCode === 13 || e.which === 13) {
      this.setState({
        searchString: e.target.value
      })
      this.props.history.push(`/search-events/?searchString=${e.target.value}`)
    }
  }

  handleChange = (e) => {
    e.persist()
    
    this.setState({
      searchString: e.target.value
    })
  }

  clearSearchResults = () => {
    this.setState({
      searchString: ''
    })
    this.props.eventsReadRequest()
  }

  render() {
    const { classes } = this.props
    const { searchString } = this.state

    return (
      <Paper
        id='SearchBox'
        className={classes.wrapper}
      >
        <Input 
          className={classes.input}
          value={this.state.searchString}
          onChange={this.handleChange} 
          onKeyDown={this.handleEnterKey}/>
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
