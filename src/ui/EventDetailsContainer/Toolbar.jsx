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

// eslint-disable-next-line
import { green } from 'logger'
import Title from '../ui-elements/typography/Title/Title';

export const Toolbar = ({ classes, handleDeleteClick, id, title }) => {
  console.log('event title: ', title)
  return (
    <Paper className={classes.wrapper} elevation={0}>
      <MuiToolbar variant='dense' className={classes.toolbar}>
        <Title className={classes.title}>{title}
        </Title>
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

// <Typography variant='title' color='inherit'>
//   <span className={classes.title}>{title}</span>
// </Typography>


const styles = {
  wrapper: {
    margin: 'auto',
    width: '60%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: '0',
    paddingRight: '0',
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