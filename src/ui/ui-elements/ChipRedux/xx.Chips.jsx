import React from 'react'
import PropTypes from 'prop-types'
import ChipInput from 'material-ui-chip-input'
import { append, without } from 'ramda'

import { green } from 'logger'

class Chips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chips: ['js']
    }
  }

  onBeforeAdd (chip) {
    return chip.length >= 3
  }

  handleAdd (chip) {
    green('handleAdd: chip', chip)
    this.setState({
      chips: [...this.state.chips, chip]
    })
  }

  handleDelete (deletedChip) {
    green('handleDelete: chip', deletedChip)
    const { chips } = this.state
    green('handleDelete: chips', chips)
    this.setState({
      chips: this.state.chips.filter((c) => c !== deletedChip)
    })
    
  }

  onLocalChange = (chipVal, action) => {
    // green('onLocalChagne', `${chipVal}, ${action}`)
    const { chips } = this.state
    let newState = undefined
    if (action === 'add') {
      newState = append(chipVal, chips)
      this.setState((prevState) => {
        return {chips: newState}
      })
    } else {
      newState = without([chipVal], chips)
      this.setState((prevState) => {
        return {chips: newState}
      }) 
    }
    this.props.onChange(newState)
  }
  render () {
    green('state', this.state.chips)
    return (
      <ChipInput
        value={this.state.chips}
        onBeforeAdd={(chip) => this.onBeforeAdd(chip)}
        onAdd={(chip) => this.onLocalChange(chip, 'add')}
        onDelete={(chip) => this.onLocalChange(chip, 'delete')}
        onBlur={(event) => {
          if (this.props.addOnBlur && event.target.value) {
            this.handleAdd(event.target.value)
          }
        }}
        fullWidth
      />
    )

    
  }  
}

export default Chips

Chips.propTypes = {
  onChange: PropTypes.func.isRequired,
  addOnBlue: PropTypes.func,
}