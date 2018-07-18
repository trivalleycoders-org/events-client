import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class SelectComponent extends React.Component {
  constructor(props) {
    super(props)
    const initialValue = props.meta.initial
    this.state = {
      currentValue: initialValue ? initialValue : 'select',
    }
  }
  
  render() {
    const { children, input, meta, fullWidth, ...rest } = this.props
    const { onChange } = input

    return (
      <Select
        value={this.state.currentValue}
        onChange={e => onChange(e.target.value)}
        displayEmpty
        fullWidth
        {...rest}
      >
        {children}
      </Select>
    )
  }
}

export default SelectComponent

SelectComponent.propTypes = {
  children: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool
}