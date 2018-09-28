import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
  Toolbar as MuiToolbar,
  IconButton,
  Paper,
} from '@material-ui/core'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'

export const Toolbar = ({ classes, handleDeleteClick, handleEditClick }) => {
  return (
    <Paper>
      <MuiToolbar variant='dense' className={classes.toolbar}>
        <Link to='/edit-event' >Edit</Link>
        <IconButton onClick={handleEditClick}>
          <Edit
            className={classes.editBtnIcon}
          />
        </IconButton>
        <IconButton onClick={handleDeleteClick}>
          <DeleteForever
            className={classes.deleteBtnIcon}
          />
        </IconButton>
      </MuiToolbar>
    </Paper>
  )
}

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  editBtnIcon: {
    color: 'blue',
  },
  deleteBtnIcon: {
    color: 'red',
  },
}

export default withStyles(styles)(Toolbar)