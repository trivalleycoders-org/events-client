import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import debounce from 'lodash.debounce'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { TextField } from '@material-ui/core'
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
  const { classes, ref, ...other } = inputProps

  return (
    <TextField
      // fullWidth
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
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

function getSuggestionValue(suggestion) {
  return suggestion.searchString
}

function getSuggestions(value, suggestions) {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  if (inputLength === 0) {
    return []
  } else {
    return suggestions.filter(s => {
      const keep = s.searchString.toLowerCase().slice(0, inputLength) === inputValue
      if (keep) {
        count += 1
      }
      return keep
    }) 
  }
}
class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
    suggestions: [],
    allSuggestions: [], // suggestions before filtering
    shouldFetchData: true,
  }
  
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.props.suggestions),
    })
  }

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  handleChange = async (event, { newValue }) => {
    const limit = 2
    const { shouldFetchData } = this.state
    this.setState({
      value: newValue,
    })
    if (shouldFetchData && newValue.length === limit) {
      green('** go get data')
      await this.props.requestReadCities(newValue)
      this.setState({
        suggestions: this.props.suggestions,
        allSuggestions: this.props.suggestions,
        shouldFetchData: false,
      })
    }
    if (newValue.length < limit) {
      this.setState({
        shouldFetchData: true,
      })
    }
    
  }

  render() {
    const { classes } = this.props
    console.log(this.state.allSuggestions)
    
    return (
      <div>
        <span className={classes.testCount}>(all: {this.state.allSuggestions.length}, filtered: {this.state.suggestions.length})</span>
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
        
      </div>
    )
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object.isRequired,
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
  testCount: {
    color: 'white',
  },
})

const mapStateToProps = (state) => {
  return {
    suggestions: locationSelectors.getCities(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, locationActions)
)(IntegrationAutosuggest)