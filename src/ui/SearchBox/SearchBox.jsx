import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
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

  handleChange = (e) => {
    // green('handleChange: value', value)
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
      // backgroundColor: this.state.mouseOver ? 'white' : 'transparent'
    }
    green('mouseOver', this.state.mouseOver)
    return (
      <Paper
        id='SearchBox'
        className={classes.wrapper}
        // onMouseEnter={this.handleMouseEnter}
        // onMouseOut={this.handleMouseOut}
        // style={paperStyle}
        // elevation={this.state.mouseOver ? 2 : 0}
        // elevation={2}
      >
        <Input className={classes.input} value={this.state.searchString} onChange={this.handleChange} />
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    // backgroundColor: 'lightgrey',
    // border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing.unit,
  },
  input: {
    color: 'white',
  },
})

export default withStyles(styles)(SearchBox)