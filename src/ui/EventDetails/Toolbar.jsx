import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Toolbar as MuiToolbar,
  IconButton,
  Paper,
  Typography,
} from '@material-ui/core'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'
import IconButtonLink from 'ui/elements/IconButtonLink'

export const Toolbar = ({ classes, handleDeleteClick, id, title }) => {
  return (
    <Paper id='Toolbar'>
      <MuiToolbar id='MuiToolbar' variant='dense' className={classes.wrapper}>
        <Typography variant='title' color='inherit'>
          <span className={classes.title}>{title}</span>
        </Typography>
        <div id='ToobarButtons'>
          <IconButtonLink to={`/edit-event/${id}`}>
            <Edit
              className={classes.editBtnIcon}
            />
          </IconButtonLink>
          <IconButton onClick={handleDeleteClick}>
            <DeleteForever
              className={classes.deleteBtnIcon}
            />
          </IconButton>
        </div>
      </MuiToolbar>
    </Paper>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: '#dc0747',
  },
  editBtnIcon: {
    color: 'blue',
  },
  deleteBtnIcon: {
    color: 'red',
  },
}

export default withStyles(styles)(Toolbar)