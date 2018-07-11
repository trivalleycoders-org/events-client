import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { Field } from 'redux-form'

import { green } from 'logger'



const renderSelect = (props) => {
  green('props', props)
  const { children, input, meta, fieldValue, fullWidth, ...rest } = props
  const { onChange } = input
  // const handleChange = (e) => {
  //   green('handleChange', e)
  // }
  return (
    <Select
      // label='Animal'
      value={fieldValue}
      onChange={e => onChange(e.target.value)}
      name='age'
      displayEmpty
      fullWidth
      {...rest}
    >
      {children}
    </Select>
  )
}

const styles = theme => ({

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },

})

class SelectReduxNew extends React.Component {
  state = {
    value: 'placeholder',
    name: 'hai',
  }

  handleChange = (e, val) => {
    // this.setState({ [a.target.name]: a.target.value })
    this.setState({value: val})
  }

  render() {
    const { classes, children, fieldLabel, fieldName, fullWidth } = this.props
    return (
      
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel>{fieldLabel}</InputLabel>
          <Field
            component={renderSelect}
            name={fieldName}
            fieldValue={this.state.value}
            fullWidth={fullWidth}
            onChange={(e, val) => this.handleChange(e, val)}
          >
            {children}
          </Field>
          {/* <FormHelperText>Placeholder</FormHelperText> */}
        </FormControl>
        
      
    )
  }
}

export default withStyles(styles)(SelectReduxNew)
