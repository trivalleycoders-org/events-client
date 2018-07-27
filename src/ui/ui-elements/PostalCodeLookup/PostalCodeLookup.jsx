import React from 'react'
import { debounce } from 'lodash'
import Autosuggest from 'react-autosuggest'
// 
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'
/* Dev */
// eslint-disable-next-line
import { green, blue } from 'logger'

function filterSuggestions(value, suggestions) {
  // green('** filterSuggestions')
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  if (inputLength === 0) {
    return []
  } else {
    return suggestions.filter(s => {
      const str1 = s.searchString.toLowerCase().slice(0, inputLength)
      const str2 = inputValue
      green('compare', `${str1} = ${str2}`)
      return str1 === str2
    }) 
  }
}

function getSuggestionValue(suggestion) {
  // green('** getSuggestionValue')
  const ret = suggestion.searchString
  // green('ret', ret)
  return ret
}

function renderSuggestion(suggestion) {
  // green('** renderSuggestion')
  return (
    <span>{suggestion.searchString}</span>
  )
}
const renderInput = inputProps => {
  const { classes, ref, ...other } = inputProps
  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        ...other,
      }}
    />
  )
}

class PostalCodeLookup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: [],
      isLoading: false,
      allSuggestions: [],
      queryLength: 0,
    }

    this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 1000) // 1000ms is chosen for demo purposes only.
  }
  
  loadSuggestions = async (value) => {
    // green('** loadSuggestions')
    const limit = 2
    this.setState({
      isLoading: true,
    
    })
    const { queryLength } = this.state
    const valueLength = value.length
    // green(`valueLength(${valueLength}) < queryLength(${queryLength})`, valueLength < queryLength)
    // green(`valueLength(${valueLength}) >= limit()${limit}`, valueLength >= limit)
    // green(`queryLength(${queryLength}) === 0`, queryLength === 0)
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
      // blue('** Get Data')
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
  
  onChange = (event, { newValue }) => {
    // green('** onChange')
    this.setState({
      value: newValue
    })
  }
  
  onSuggestionsFetchRequested = ({ value }) => {
    // green('** onSuggestionsFetchRequested')
    this.debouncedLoadSuggestions(value)
  }

  onSuggestionsClearRequested = () => {
    // green('** onSuggestionsClearRequested')
    this.setState({
      suggestions: []
    })
  }

  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'type a postal/zip code',
      value,
      onChange: this.onChange,
    }
    // green('suggestions.length', this.state.suggestions.length)
    // green('render: queryLength', this.state.queryLength)

    return (
      <div>
        {/* <div>
          all: {this.state.allSuggestions.length}, current: {this.state.suggestions.length}
        </div> */}
        <Autosuggest 
          renderInputComponent={renderInput}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </div>
    )
  }
}

const styles = {
  input: {}
}

const mapStateToProps = (state) => {
  return {
    suggestions: locationSelectors.getPostalCodes(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, locationActions)
)(PostalCodeLookup)