import React from 'react'
import { connect } from 'react-redux'
import { filter } from 'ramda'
/* User */
import * as locationActions from 'store/actions/location-actions'
import * as locationSelectors from 'store/selectors/location-selectors'
import LocAutoSug from './LocAutoSug'

// eslint-disable-next-line
import { green } from 'logger'


class LocAutoSugContainer extends React.Component {
  render() {
    return (
      <LocAutoSug
        suggestions={this.props.cities}
      />
    )
  }  
}

const mapStateToProps = (state) => {
  return {
    cities: locationSelectors.getCities(state)
  }
}

export default connect(mapStateToProps, locationActions)(LocAutoSugContainer)