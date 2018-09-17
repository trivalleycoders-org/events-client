import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Grid,
  withWidth,
  Toolbar,
} from '@material-ui/core'
import {
  ViewList,
  ViewModule,
} from '@material-ui/icons'
import { append, without, contains } from 'ramda'
/* User */
import * as eventsSelectors from 'store/selectors/events-selectors'
import * as authSelectors from 'store/selectors/auth-selectors'
import EventColumn from './EventColumn'
import EventRow from './EventRow'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'


function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
}


class MyEvents extends React.Component {

  state = {

    order: 'asc',
    orderBy: 'startDateTime',
    page: 0,
    rowsPerPage: 5,
    selected: [],
  }

  // componentDidMount()

  handleRequestSort = (event, property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy })
  }

  handleSelectAllClick = (event, checked) => {
    const { events } = this.props
    if (checked) {
      this.setState({ selected: events.map(n => n._id) })
      return
    }
    this.setState({ selected: [] })
  };

  handleClick = (event, _id) => {
    const { selected } = this.state
    let newSelected = []
    if (contains(_id, selected)) {
      newSelected = without(_id, selected)
    } else {
      newSelected = append(_id, selected)
    }
    this.setState({
      selected: newSelected,
    })
  }

  clearSelected = () => {
    this.setState({
      selected: [],
    })
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  isSelected = _id => {
    const idx = this.state.selected.indexOf(_id)
    return idx !== -1
  }

  render() {
    const { classes, events, width } = this.props
    const { order, orderBy, selected, rowsPerPage, page } = this.state
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, events.length - page * rowsPerPage)

    // TODO: is this div, Paper or Fragmen?
    return (
      <div>
        <Toolbar className={classes.toolbar}>

          <Button className={classes.button}>
            <ViewList/>
          </Button>
          <Button className={classes.button}>
            <ViewModule/>
          </Button>
        </Toolbar>
        <Grid container spacing={Number(8)}>
        {events
            .sort(getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(n => {
              return (
                <Grid key={n._id} item xs={12}>
                  {
                    width === 'xs'
                      ? <EventRow
                          isSelected={this.isSelected(n._id)}
                          event={n}
                        />
                      : <EventRow
                          isSelected={this.isSelected(n._id)}
                          event={n}
                        />
                  }
                </Grid>
              )
            })}
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
  },
  cityState: {
    paddingTop: theme.spacing.unit
  },
  image: {
    maxHeight: 100,
    maxWidth: 200,
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

MyEvents.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  const currentUserId = authSelectors.getUserId(state)
  return {
    events: eventsSelectors.getAllEvents(state, currentUserId),
    currentUserId,
  }
}

export default compose(
  withWidth(),
  withStyles(styles),
  connect(mapStateToProps)
)(MyEvents)
