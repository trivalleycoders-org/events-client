import React from 'react'
import {shallow} from 'enzyme'

import SearchEvent from '../../../ui/AppBar/SearchEvent'

test('should render search correctly', () => {
  const wrapper = shallow(<SearchEvent />)
  expect(wrapper).toMatchSnapshot()
})

