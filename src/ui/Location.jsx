import React, { Component } from 'react'
import { connect } from 'react-redux'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'
// eslint-disable-next-line
import { green } from 'logger'

class Location extends React.Component {
  state = {
    searchString: '',
    cities: this.props.cities,
    shouldGetCities: true,
  }
  // componentDidMount() {
  //   this.props.requestReadCities('hicks')
  // }

  handleInputChange = async (event) => {
    const limit = 1
    green('event.target.name', event.target.name)
    green('event.target.value', event.target.value)
    const { shouldGetCities } = this.state
    const searchString = event.target.value
    this.setState({
      searchString: searchString
    })
    if (shouldGetCities && searchString.length === limit) {
      await this.props.requestReadCities(searchString)
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
  render() {
    const { cities } = this.props
    const renderCities = cities.map(c => {
      return <li>{c.postalCode} {c.cityName}, {c.stateName}</li>
    })
    return (
      <div>
        <h1>Cities (won't be staying here)</h1>
        <p>Type a city name to see list of cities</p>
        <input type='text' value={this.state.searchString} name='searchString' onChange={this.handleInputChange} />
        ({this.props.cities.length})
        <ul>
          {renderCities}
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