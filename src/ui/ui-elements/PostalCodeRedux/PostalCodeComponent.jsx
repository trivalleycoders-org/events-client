import React from 'react'
import { debounce } from 'lodash'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
// 
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { TextField, MenuItem, Paper } from '@material-ui/core'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'
/* Dev */
// eslint-disable-next-line
import { green, blue } from 'logger'

function filterSuggestions(value, suggestions) {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  if (inputLength === 0) {
    return []
  } else {
    return suggestions.filter(s => {
      const str1 = s.searchString.toLowerCase().slice(0, inputLength)
      const str2 = inputValue
      return str1 === str2
    }) 
  }
}

function getSuggestionValue(suggestion) {
  const ret = suggestion.searchString
  return ret
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  // blue('suggestion', suggestion)
  // blue('query', query)
  // blue('isHighlighted', isHighlighted)
  green('typeof suggestion', typeof suggestion)
  const matches = match(suggestion.searchString, query)
  // green('matches', matches)

  const parts = parse(suggestion.searchString, matches)
  // green('parts', parts)
  return (
    <MenuItem selected={isHighlighted} component="div" id={suggestion._id}>
      <div>
        {parts.map((part, index) => {
          // green('part', part)
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

const renderInput = inputProps => {
  const { classes, ref, ...other } = inputProps
  return (
    <TextField
      fullWidth
      inputRef={ref}
      inputProps={{
        
        classes: {
          input: classes.input,
        },
        ...other,
      }}      
    />
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

class PostalCodeLookup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: [],
      allSuggestions: [],
      queryLength: 0,
    }

    this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 1000) // 1000ms is chosen for demo purposes only.
  }
  
  loadSuggestions = async (value) => {
    const limit = 2
    this.setState({
      isLoading: true,
    
    })
    const { queryLength } = this.state
    const valueLength = value.length
    if (valueLength < queryLength) {
      this.setState({
        queryLength: 0,
        allSuggestions: [],
      })
    }
    let getData
    if (valueLength >= limit) {
      if (queryLength === 0) {
        getData = true
      } else if (valueLength < queryLength) {
        getData = true
      } else {
        getData = false
      }
    }
    if (getData) {
      await this.props.requestReadPostalCodes(value)
      const suggestions = filterSuggestions(value, this.props.suggestions)
      this.setState({
        suggestions: suggestions,
        allSuggestions: suggestions,
        queryLength: valueLength,
      })
    } else {
      this.setState({
        suggestions:  filterSuggestions(value, this.state.allSuggestions)
      })
    }
    
  }
  
  localOnChange = (event, { newValue }) => {
    green('event', event.target.children[0])
    this.setState({
      value: newValue
    })
    this.props.onChange(newValue)
  }
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.debouncedLoadSuggestions(value)
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  render() {
    const { value, suggestions } = this.state
    const { classes } = this.props
    const inputProps = {
      placeholder: 'type a postal/zip code',
      classes: classes,
      value,
      onChange: this.localOnChange,
    }

    return (
      <div>
        {/* <div>
          all: {this.state.allSuggestions.length}, current: {this.state.suggestions.length}
        </div> */}
        <Autosuggest 
          theme={{
            container: classes.container,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
          renderInputComponent={renderInput}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          renderSuggestionsContainer={renderSuggestionsContainer}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    )
  }
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

const mapStateToProps = (state) => {
  return {
    suggestions: locationSelectors.getPostalCodes(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, locationActions)
)(PostalCodeLookup)