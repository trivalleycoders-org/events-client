import React from 'react'
import { mount } from 'enzyme'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { SearchEvent } from '../../../ui/AppBar/SearchEvent'
import styles from '../../../ui/AppBar/styles'

const Composer = ({
  classes
}) => (
  <SearchEvent classes={classes}/>
)

Composer.propTypes = {
  classes: PropTypes.object.isRequired
}

const Composition = withStyles(styles)(Composer)

describe('<SearchEvent />', () => {

  let wrapper

  beforeAll(() => {
    wrapper = mount(<Composition />)
  })

  test('should render SearchEvent correctly', () => {
    expect(wrapper.find(SearchEvent)).toHaveLength(1)
  })

  test('should handle onChange on search term textfield', async() => {
    const term = 'briia'
    const termInput = wrapper.find(TextField).find('input')

    // Method 2: sends the term but the state is not updated as it is async
    termInput.simulate('change', {
      persist: () => {},
      target: { value: term }
    })

    expect(wrapper.find(TextField).prop('value')).toEqual(term)
  })

})
