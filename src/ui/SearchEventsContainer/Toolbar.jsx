import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Toolbar as MuiToolbar,
  IconButton,
  Paper,
} from '@material-ui/core'
import DeleteForever from '@material-ui/icons/DeleteForever'
import Edit from '@material-ui/icons/Edit'
import IconButtonLink from 'ui/ui-elements/IconButtonLink'

// eslint-disable-next-line
import { green } from 'logger'

export const Toolbar = ({ classes, handleDeleteClick, id }) => {
  return (
    <Paper>
      <MuiToolbar variant='dense' className={classes.wrapper}>
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
      </MuiToolbar>
    </Paper>
  )
}

const styles = {
  wrapper: {
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