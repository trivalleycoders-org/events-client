import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  Edit as EditIcon
} from '@material-ui/icons'
import { lighten } from '@material-ui/core/styles/colorManipulator'
/* User */
// import { setEdit_id } from 'store/actions/event-actions'
import * as eventActions from 'store/actions/event-actions'
/* Dev */
import { green } from 'logger'


const styles = theme => ({
  actions: {
    color: theme.palette.text.secondary,
  },
  editDeleteGroup: {
    display: 'flex',
    flexflow: 'row nowrap'
  },
  highlight:
    theme.palette.type === 'light'
    ? {
      color: theme.palette.secondary.main,
      backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    }
    : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark,
    },
  root: {
    paddingRight: theme.spacing.unit,
  },
  spacer: {
    flex: '1 1 100%',
  },
  title: {
    flex: '0 0 auto',
  },
})



class TableToolbar extends React.Component {
  state = {
    editClicked: false,
  }
  
  handleEditClick = (event) => {
    const { selected } = this.props
    
    if (selected.length === 1) {
      green('handleEditClick: selected', selected)
      // green('handleEditClick: setEdit_id', setEdit_id)
      this.props.setEdit_id(selected[0])
      this.setState({
        editClicked: true,
      })
    }
    
  }
  
  
  render() {
    const { selected, classes } = this.props
    const numSelected = selected.length
    const { editClicked } = this.state

    // green('TableToobar: this.props', this.props)
    // green('TableToobar: this.state', this.state)
    // green('TableToobar: editClicked', editClicked)
    
    if (numSelected > 0 && editClicked) {
      return <Redirect to={'/new-event'}/>
    }
    

    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="title" id="tableTitle">
              Test's Events
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <div className={classes.editDeleteGroup}>
              <Tooltip title="Edit">
                <IconButton aria-label="Edit" disabled={numSelected > 1} onClick={e => this.handleEditClick(e)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    )
  }
  
}

TableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
}

// TableToolbar = withStyles(styles)(TableToolbar)

// export default TableToolbar

const mapStateToProps = (state) => {
  return {}
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions)
)(TableToolbar)