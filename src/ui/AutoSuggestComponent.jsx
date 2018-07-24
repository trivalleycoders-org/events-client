import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'
/* Dev */
// eslint-disable-next-line
import { green, blue } from 'logger'

// let suggestions = [

function renderInput(inputProps) {
  // green('01 renderInput')
  const { classes, ref, ...other } = inputProps

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  )
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  // green('06 renderSuggestion')
  const matches = match(suggestion.searchString, query)
  const parts = parse(suggestion.searchString, matches)
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        })}
      </div>
    </MenuItem>
  )
}

function renderSuggestionsContainer(options) {
  // green('02 renderSuggestionsContainer')
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

function getSuggestionValue(suggestion) {
  // green('** getSuggestionValue')
  return suggestion.searchString
}

function getSuggestions(value, suggestions) {
  // blue('05 getSuggestions')
  const inputValue = value.trim().toLowerCase()
  // blue('inputValue', inputValue)
  const inputLength = inputValue.length
  // blue('inputLength', inputLength)
  let count = 0

  if (inputLength === 0) {
    return []
  } else {
    return suggestions.filter() // it is filtering suggestions and then setting state to that filtered amount - so no ramping back up on backspace :(
  }

  return inputLength === 0
    ? []
    : suggestions.filter(s => {
        
        // blue('count', count)
        const keep = count < 25 && s.searchString.toLowerCase().slice(0, inputLength) === inputValue
        // const keep = s.searchString.toLowerCase().slice(0, inputLength) === inputValue

        if (keep) {
          // blue('keep', keep)
          count += 1
        }

        return keep
      })
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 250,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
})

class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
    suggestions: [],
    shouldGetSuggestions: true,
  }
  
  handleSuggestionsFetchRequested = ({ value }) => {
    // green('04 handleSuggestionsFetchRequested')
    // green('04 handleSuggestionsFetchRequested: value', value)
    this.setState({
      suggestions: getSuggestions(value, this.state.suggestions),
    })
  }

  handleSuggestionsClearRequested = () => {
    // green('** handleSuggestionsClearRequested')
    this.setState({
      suggestions: [],
    })
  }

  handleChange = async (event, { newValue }) => {
    // green('03 handleChange')
    const limit = 2
    const { shouldGetSuggestions } = this.state
    // green('handleChange', newValue)
    this.setState({
      value: newValue,
    })
    green('shouldGetSuggestions', shouldGetSuggestions)
    green('newValue.length === limit', newValue.length === limit)
    if (shouldGetSuggestions && newValue.length === limit) {
      green('** go get data')
      await this.props.requestReadCities(newValue)
      // suggestions = this.props.suggestions
      // green('** setting state')
      this.setState({
        suggestions: this.props.suggestions,
        shouldGetSuggestions: false,
      })
    }
    if (newValue.length < limit) {
      green('** set suggestions true')
      this.setState({
        shouldGetSuggestions: true,
      })
    }
    
  }

  render() {
    const { classes } = this.props
    green('state.suggestions.length', this.state.suggestions.length)
    
    // green('** render')
    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          placeholder: 'Search a country (start with a)',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    )
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  const cities = locationSelectors.getCities(state)
  const suggestions = cities.map(c => {
    return (
      {
        _id: c._id,
        searchString: `${c.cityName}, ${c.stateName} ${c.postalCode}`
      }
    )
  })
  return {
    suggestions,
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, locationActions)
)(IntegrationAutosuggest)