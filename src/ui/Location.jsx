import React from 'react'
import { connect } from 'react-redux'
import { filter } from 'ramda'
import Autosuggest from 'react-autosuggest'
import { match, parse } from 'autosuggest-highlight'
import {
  TextField,
  Paper,
  MenuItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'

// eslint-disable-next-line
import { green } from 'logger'


class Location extends React.Component {
  state = {
    searchString: '',
    cities: [],
    shouldGetCities: true,
  }
  // componentDidMount() {
  //   this.props.requestReadCities('hicks')
  // }

  handleInputChange = async (event) => {
    const limit = 1
    // green('event.target.name', event.target.name)
    // green('event.target.value', event.target.value)
    const { shouldGetCities } = this.state
    const searchString = event.target.value
    this.setState({
      searchString: searchString
    })
    if (shouldGetCities && searchString.length === limit) {
      await this.props.requestReadCities(searchString)
      this.setState({
        cities: this.props.cities
      })
      this.setState({
        shouldGetCities: false,
      })
    }
    if (searchString.length < limit) {
      this.setState({
        shouldGetCities: true,
      })
    }

  }

  includeCity = city => {
    const { searchString } = this.state
    const cityStateString = `${city.cityName.toLowerCase()}, ${city.stateName.toLowerCase()}`
    // green('searchString', searchString)
    // green('city', city.cityName)
    const b = cityStateString.startsWith(searchString.toLowerCase())
    // green('b', b)
    return b
    
    // return true
  }

  renderCities = () => {
    green('** renderCities')
    const { cities } = this.state
    let citiesToMap = []
    // let returnCities = []
    if (cities.length > 0) {
      // green('cities.length', cities.length)
      citiesToMap = filter(this.includeCity, cities)
    } else {
      return null
    }
    return citiesToMap.map(c => {
      return <li key={c.postalCode}>{c.postalCode} {c.cityName}, {c.stateName}</li>
    })

  }

  render() {

    return (
      <div>
        <h1>Cities (won't be staying here)</h1>
        <p>Type a city name to see list of cities</p>
        <input type='text' value={this.state.searchString} name='searchString' onChange={this.handleInputChange} />
        ({this.props.cities.length})
        <ul>
          {this.renderCities()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: locationSelectors.getCities(state)
  }
}

export default connect(mapStateToProps, locationActions)(Location)