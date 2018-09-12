import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import Downshift from 'downshift'
import { getPostalCodes } from 'store/selectors/location-selectors'
import * as locationActions from 'store/actions/location-actions'
import {
  Paper,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { renderInput, renderSuggestion } from './postalcode-helpers'
/* Dev */
// eslint-disable-next-line
import { green, red } from 'logger'

class PostalCodesComponent extends React.Component {
  onInputValueChange = (inputValue, state) => {
    // green('inputValue', typeof inputValue)
    // green('selectedItem', state.selectedItem)

    if (!(inputValue === '') && inputValue !== undefined ) {
      const inputValueLength = inputValue.length
      if (inputValueLength > 3 && inputValueLength < 6) {
        this.props.postalCodesReadRequest(inputValue)
      }
    } else {
      red('else')
      this.props.postalCodesClear()

    }
    this.props.onChange(state.selectedItem)
  }
  render() {
    const { classes, suggestions } = this.props
    // green('suggestions', suggestions)
    return (
      <div className={classes.root}>
        <p>suggestions: {suggestions.length}</p>
        <Downshift
          onInputValueChange={this.onInputValueChange}
          // itemToString={item => (item ? item.searchString : '')}
        >
          {
            downshift => {
              const {
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                highlightedIndex,
                isOpen,
                selectedItem
              } = downshift
              return (
                <div className={classes.container}>
                  <label {...getLabelProps()}>Enter a Zip Code</label>
                  {
                    renderInput({
                      fullWidth: true,
                      classes,
                      InputProps: getInputProps({
                        placeholder: 'Search for a Zip Code'
                      })
                    })
                  }
                  <div {...getMenuProps()}>
                    { isOpen ? (
                      <Paper className={classes.paper} square>
                        {
                          suggestions.map((suggestion, index) => {
                            return (
                              renderSuggestion({
                                suggestion,
                                index,
                                itemProps: getItemProps({ item: suggestion.searchString }),
                                highlightedIndex,
                                selectedItem,
                              })
                            )
                          })
                        }
                      </Paper>
                      ) : null
                    }
                  </div>
                </div>
              )
            }
          }
        </Downshift>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: getPostalCodes(state)
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
})


export default compose(
  withStyles(styles),
  connect(mapStateToProps, locationActions),
)(PostalCodesComponent)