import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import SelectReduxNew from './SelectReduxNew'
import { reduxForm } from 'redux-form'

// import { green } from 'logger'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

const SelectReduxNewForm = (props) => {
  const { classes } = props
  return (
    <form className={classes.root} autoComplete='off'>
      <SelectReduxNew
        fieldName='animal'
        fieldLabel='Animal'
        fullWidth
      >
        <MenuItem value='placeholder' disabled>
                    Placeholder
        </MenuItem>
        <MenuItem value='cow'>Cow</MenuItem>
        <MenuItem value='horse'>Horse</MenuItem>
        <MenuItem value='camel'>Camel</MenuItem>  
      </SelectReduxNew>
      
    </form>
  )  
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'SelectReduxNewForm',
  }),
)(SelectReduxNewForm)