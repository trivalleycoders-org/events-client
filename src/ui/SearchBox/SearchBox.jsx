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
    searchString: '',
    mouseOver: false,
  }

  handleChange = (value) => {
    // green('handleChange: value', value)
    this.setState({
      searchString: value
    })
  }

  clearSearchResults = () => {
    this.setState((prevState, props) => ({
      showSearchIcon: !prevState.showSearchIcon,
      searchText: ''
    }))
    this.props.eventsReadRequest()
  }

  handleMouseEnter = () => {
    green('mouseEnter')
    this.setState({
      mouseOver: true,
    })
  }
  handleMouseOut = () => {
    green('mouseOut')
    this.setState({
      mouseOver: false,
    })
  }


  render() {
    const { classes } = this.props
    const { searchString, showSearchIcon } = this.state
    const paperStyle = {
      backgroundColor: this.state.mouseOver ? 'white' : 'transparent'
    }
    green('mouseOver', this.state.mouseOver)
    return (
      <Paper
        id='SearchBox'
        className={classes.wrapper}
        onMouseEnter={this.handleMouseEnter}
        onMouseOut={this.handleMouseOut}
        style={paperStyle}
      >
        <TextField
          // className={classes.textField}
          onChange={e => this.handleChange(e.target.value)}
          onMouseEnter={this.handleMouseEnter}
          onMouseOut={this.handleMouseOut}
          value={searchString}
          Input={{
            root: classes.textField
          }}
          classes={{
            root: classes.textField
          }}

        />
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


const styles = theme => ({
  wrapper: {
    // backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing.unit,
  },
  textField: {
    color: 'orange',
    // backgroundColor: 'blue',
    // '&hover': {
    //   backgroundColor: 'white'
    // }
  },

})

export default withStyles(styles)(SearchBox)