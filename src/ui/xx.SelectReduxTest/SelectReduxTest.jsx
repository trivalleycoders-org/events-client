import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { green } from 'logger'

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

class SelectReduxTest extends React.Component {
  state = {
    age: 'placeholder',
    name: 'hai',
  }

  handleChange = (a, b) => {
    this.setState({ [a.target.name]: a.target.value })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.root} autoComplete='off'>
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            name='age'
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value='placeholder' disabled>
              Placeholder
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Placeholder</FormHelperText>
        </FormControl>
        
      </form>
    )
  }
}

SelectReduxTest.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SelectReduxTest)
