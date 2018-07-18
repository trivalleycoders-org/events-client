import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { Field } from 'redux-form'

// eslint-disable-next-line
import { green } from 'logger'



const renderSelect = (props) => {
  // green('props', props)
  const { children, input, meta, fieldValue, fullWidth, ...rest } = props
  const { onChange } = input
  green('SelectRedux.renderSelect: fieldValue', fieldValue)
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
    // margin: theme.spacing.unit,
    minWidth: 120,
  },

})

class SelectRedux extends React.Component {
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

export default withStyles(styles)(SelectRedux)

SelectRedux.propTypes = {
  fieldValue: PropTypes.string,
  fullWidth:  PropTypes.bool,
  input: PropTypes.object, 
  meta: PropTypes.object,
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  fieldLabel: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
}