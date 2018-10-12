import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Link } from 'react-router-dom'
import * as searchActions from 'store/actions/search-actions'
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
    }
  }

  handleChange = (value) => {
    this.props.searchTextSet(value)
  }

  render() {
    const { classes, searchText } = this.props
      return (
        <Paper className={classes.wrapper}>
          <TextField onChange={e => this.handleChange(e.target.value)} value={searchText} />
            <Link to={`/search-events/${searchText}`}>
              <Button
                color='secondary'
                // color='orange'
                // className={classes.searchButton}
                disabled={searchText.length < 3}
                variant='contained'
              >
                Search
              </Button>
            </Link>
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

const mapStateToProps = (state) => ({
  searchText: searchSelectors.getSearchText(state)
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, searchActions)
)(SearchEvent)


