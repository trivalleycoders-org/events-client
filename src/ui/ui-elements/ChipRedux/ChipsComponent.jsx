import React from 'react'
import ChipInput from 'material-ui-chip-input'
import { append, without } from 'ramda'
import { withStyles } from '@material-ui/core/styles'

// eslint-disable-next-line
import { green } from 'logger'

const keyCodes = [9, 32]

class Chips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chips: this.props.initial || [],
    }
  }

  onBeforeAdd(chip) {
    return chip.length >= 3
  }

  handleAdd(chip) {
    this.setState({
      chips: [...this.state.chips, chip]
    })
  }

  handleDelete(deletedChip) {
    const { chips } = this.state
    this.setState({
      chips: chips.filter((c) => c !== deletedChip)
    })

  }

  onLocalChange = (chipVal, action) => {
    const { chips } = this.state
    let newState = undefined
    if (action === 'add') {
      newState = append(chipVal, chips)
      this.setState((prevState) => {
        return { chips: newState }
      })
    } else {
      newState = without([chipVal], chips)
      this.setState((prevState) => {
        return { chips: newState }
      })
    }
    this.props.onChange(newState)
  }
  render() {
    const { classes, label } = this.props
    return (
      <div className={classes.chipInput}>
        <ChipInput
          value={this.state.chips}
          newChipKeyCodes={keyCodes}
          label={label}
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
      </div>
    )


  }
}

const styles = theme => ({
  chipInput: {
    paddingBottom: theme.spacing.unit * 2
  }
})

export default withStyles(styles)(Chips)
