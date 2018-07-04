import React from 'react'
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


const handleEditClick = (event, _id) => {
  /* 
      Use react reactRouter <Link/> component passing it the _id.
      The link will be to NewEvent
      Having received an _id, NewEvent will initialize values
  */
  green('handleEditClick: _id', _id)
  return (
    <Redirect to={`/new-event/:${_id}`}/>
  )
}

let TableToolbar = props => {
  const { selected, classes } = props
  const numSelected = selected.length
  green('TableToobar: props', props)
  let _id = ''
  if (numSelected === 1) {
    green('**num = 1')
    green('if selected', selected[0])
    _id = selected[0]
    green('_id', _id)
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
              <IconButton aria-label="Edit" disabled={numSelected > 1} onClick={e => handleEditClick(e, _id)}>
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

TableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
}

TableToolbar = withStyles(styles)(TableToolbar)

export default TableToolbar