import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class SelectReduxComponent extends React.Component {
  constructor(props) {
    super(props)
    const initialValue = props.meta.initial
    this.state = {
      currentValue: initialValue ? initialValue : 'select',
    }
  }

  onLocalChange = (value) => {
    this.setState({
      currentValue: value
    })
    this.props.input.onChange(value)
  }

  render() {
    const { children, input, meta, fullWidth, ...rest } = this.props

    return (
      <Select
        value={this.state.currentValue}
        onChange={e => this.onLocalChange(e.target.value)}
        displayEmpty
        fullWidth
        {...rest}
      >
        {children}
      </Select>
    )
  }
}

export default SelectReduxComponent

SelectReduxComponent.propTypes = {
  children: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  fullWidth: PropTypes.bool
}