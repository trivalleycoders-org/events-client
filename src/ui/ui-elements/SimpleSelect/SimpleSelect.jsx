import React from 'react'
import { debounce } from 'lodash'
// 
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { TextField, MenuItem, Paper, Select, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'
/* Dev */
// eslint-disable-next-line
import { green, blue, red } from 'logger'

// function getSuggestionValue(suggestion) {
//   // return the value of the current suggestion
// }

// function renderSuggestion(suggestion, { query, isHighlighted }) {
//   // render the MenuItem for each selection
// }


// const renderInput = inputProps => {
//   const { classes, ref, ...other } = inputProps
//   return (
//     <TextField
//       fullWidth
//       // inputRef={ref}
//       inputProps={{
//         classes: {
//            input: classes.input,
//         },        
//         ...other,
//       }}      
//     />
//   )
// }

const renderInput = (inputProps) => {
  return (
    <Input
      readOnly={false}
      {...inputProps}
    />
  )
}

// function renderSuggestionsContainer(options) {
//   // I don't know
// }

// function filterSuggestions(value, suggestions) {
//   green('1: filterSuggestions')
//   green('filterSuggestions: suggestions', suggestions)
//   // filter down the current set of suggestions
//   return suggestions
// }

const renderMenuItems = (suggestions) => {

  // green('2: renderSuggestions')
  // green('renderMenuItems: suggestions', suggestions)
  const test = suggestions.map(s => {
    return (
      <MenuItem key={s._id} value={s._id}>
        {s.searchString}
      </MenuItem>
    )
  })
  green('test', test)
  return test
  // const test2 = [
  //   <MenuItem key='a'>One</MenuItem>,
  //   <MenuItem key='b'>Two</MenuItem>,
  // ]
  // green('test2', test2)
  // return test2

  
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

    // this.debouncedLoadSuggestions = debounce(this.loadSuggestions, 1000) // 1000ms is chosen for demo purposes only.
  }
  
  async componentWillMount() {
    await this.props.requestReadPostalCodes('945')
    // green('componentDidMount: suggestions', this.props.suggestions)
  
  }

  // loadSuggestions = async (value) => {
  //   const limit = 2
  //   await this.props.requestReadPostalCodes('9458')
  //   this.setState({
  //     suggestions: this.props.suggestions,
  //   })
  // }
  
  localOnChange = (event) => {
    green('event.target.value', event.target.value)
    // green('event.target.name', event.target.name)
    
    // this.setState({
    //   value: newValue
    // })
    // redux this.props.onChange(newValue)
  }

  render() {
    const { value } = this.state
    const { classes, suggestions } = this.props


    // green('render.suggestions', suggestions)
    if (suggestions.length === 0) { 
      red('suggestions is null')
      return null
    } else {
      red('suggestions is NOT null')
    }
    const inputProps = {
      name: 'age',
      id: 'age-simple',
    }
    return (
      <div>
        <FormControl className={classes.formControl} fullWidth>
          
          <Select
            
            value={value}
            onChange={e => this.localOnChange(e)}
            input={renderInput(inputProps)}
            
          >
          {/* <MenuItem key='a'>One</MenuItem>
          <MenuItem key='b'>Two</MenuItem> */}
            {renderMenuItems(suggestions)}
          </Select>
        </FormControl>
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