import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Paper,
  Checkbox,
} from '@material-ui/core'
import format from 'date-fns/format'
import { append, without, contains } from 'ramda'
/* User */
import TableHead from './TableHead'
import TableToolbar from './TableToolbar'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetail,
} from '@material-ui/core'
import * as eventsSelectors from '../../store/selectors/events-selectors'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Body2 from 'ui/ui-elements/typography/Body2'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'


function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
}

const dateFormat = 'MMM DD, YYYY  hh:mm A'

class MyEvents extends React.Component {

  state = {

    order: 'asc',
    orderBy: 'startDateTime',
    page: 0,
    rowsPerPage: 5,
    selected: [],
  }

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
    const { classes, events } = this.props
    const { order, orderBy, selected, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, events.length - page * rowsPerPage)
    return (
      <Paper className={classes.root}>
        <TableToolbar
          selected={selected}
          clearSelected={this.clearSelected}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={events.length}
            />
            <TableBody>
              {events
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n._id)
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n._id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n._id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell>
                        <ResponsiveImage src={n.imageUrl} alt='some' className={classes.image}/>
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        <Body2>
                          {n.title}
                        </Body2>
                        <div className={classes.cityState}>
                          {n.cityName}, {n.stateCode}
                        </div>
                      </TableCell>
                      <TableCell numeric>{format(n.startDateTime, dateFormat)}</TableCell>
                      <TableCell numeric>{format(n.endDateTime, dateFormat)}</TableCell>
                      <TableCell numeric>{n.price || 'Free'}</TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={events.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    )
  }
}

const styles = theme => ({
  title: {

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
  return {
    events: eventsSelectors.getAllEvents(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(MyEvents)
