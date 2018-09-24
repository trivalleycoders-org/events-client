import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Toolbar as MuiToolbar,
  IconButton,
  Paper,
} from '@material-ui/core'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'

export const Toolbar = ({ classes }) => {
  return (
    <Paper>
      <MuiToolbar variant='dense' className={classes.toolbar}>
        <IconButton>
          <Edit className={classes.editBtn} />
        </IconButton>
        <IconButton>
          <DeleteForever className={classes.deleteBtn} />
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
  editBtn: {
    color: 'blue',
  },
  deleteBtn: {
    color: 'red',
  },
}

export default withStyles(styles)(Toolbar)