import React from 'react'
import { mount } from 'enzyme'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import configureStore from '../../../store'

import ConnectedSearchEvent, { SearchEvent } from '../../../ui/AppBar/SearchEvent'
import styles from '../../../ui/AppBar/styles'


describe('SearchEvent', () => {

  const store = configureStore()
  let mountedSearchEvent
  const onChangeMock = jest.fn()
  const onChange = jest.fn(() => {
    onChangeMock()
  })

  const onClickMock = jest.fn()
  const onClick = jest.fn(() => {
    onClickMock()
  })
  // const onClick = jest.fn()


  const searchEvent = () => {
    if (!mountedSearchEvent) {
      const Composer = ({
        classes,
        onChange
      }) => (
          <Provider store={store}>
            <ConnectedSearchEvent onChange={onChange} classes={classes} />
          </Provider>
        )

      Composer.propTypes = {
        classes: PropTypes.object.isRequired
      }

      const Composition = withStyles(styles)(Composer)
      mountedSearchEvent = mount(<Composition onChange={onChange} />)
    }
    return mountedSearchEvent
  }

  beforeEach(() => {
    mountedSearchEvent = undefined
  })

  it('always renders SearchEvent', () => {
    const wrapper = searchEvent()
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find(SearchEvent)).toHaveLength(1)
  })

  it('always renders search button', () => {
    const wrapper = searchEvent()
    expect(wrapper.find(SearchEvent).find('Search')).toHaveLength(1)
  })

  describe('when search button is clicked', () => {
    it('it renders cancel button', () => {
      const wrapper = searchEvent()
      wrapper.find(SearchEvent).find('Search').simulate('click')
      const newWrapper = searchEvent()
      expect(newWrapper.find(SearchEvent).find('Cancel')).toHaveLength(1)
    })
  })

  describe('when cancel button is clicked', () => {
    beforeEach(() => {

    })

    it('renders the search button', () => {

    })

    it('triggers a call to the api to fetch all events', () => {

    })

  })

  it('should change search term', async () => {
    const wrapper = searchEvent()
    const term = 'briia'
    const termInput = wrapper.find(TextField).find('input')

    // Simulates a call to onChnage passing in the term
    // but the state is not updated as it is async
    termInput.simulate('change', {
      persist: () => { },
      target: { value: term }
    })
    expect(wrapper.find(TextField).prop('value')).toEqual(term)
  })

})
