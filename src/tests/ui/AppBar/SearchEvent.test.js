import React from 'react'
import { mount } from 'enzyme'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import fetchMock from 'fetch-mock'

import configureStore from '../../../store'
import eventsData from '../../fixtures/events'
import ConnectedSearchEvent, { SearchEvent } from '../../../ui/AppBar/SearchEvent'
import styles from '../../../ui/AppBar/styles'


describe('SearchEvent', () => {

  const store = configureStore()
  let mountedSearchEvent
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve))

  const searchEvent = () => {
    if (!mountedSearchEvent) {
      const Composer = ({
        classes
      }) => (
          <Provider store={store}>
            <ConnectedSearchEvent classes={classes} />
          </Provider>
        )

      Composer.propTypes = {
        classes: PropTypes.object.isRequired
      }

      const Composition = withStyles(styles)(Composer)
      mountedSearchEvent = mount(<Composition />)
    }
    return mountedSearchEvent
  }

  beforeEach(() => {
    mountedSearchEvent = undefined
  })

  it('always renders SearchEvent', () => {
    const wrapper = searchEvent()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(SearchEvent)).toHaveLength(1)
  })

  describe('when search button is clicked', () => {

    beforeEach(() => {
      fetchMock.restore()
    })

    const wrapper = searchEvent()
    it('it fetches the events that match search criteria', async () => {
      const term = 'briia'
      const termInput = wrapper.find(TextField).find('input')
      const searchUrl = '/search?searchTerm=' + JSON.stringify(term)
      fetchMock.get(searchUrl, { data: eventsData.event }, 200)

      termInput.simulate('change', {
        persist: () => { },
        target: { value: term }
      })

      await wrapper.find(SearchEvent).find('Search').simulate('click')
      return flushAllPromises().then(() => {
        expect(store.getState().events).toEqual(eventsData.event)
      })
    })

    it('it renders cancel button', async () => {
      expect(wrapper.find(SearchEvent).find('Cancel')).toHaveLength(1)
    })

    it('when cancel button is clicked, renders search button', async () => {
      await wrapper.find(SearchEvent).find('Cancel').simulate('click')
      expect(wrapper.find(SearchEvent).find('Search')).toHaveLength(1)
    })

  })

  it('should change search term input', async () => {
    const wrapper = searchEvent()
    const term = 'briia'
    const termInput = wrapper.find(TextField).find('input')

    // Simulates a call to onChange passing in the term
    // checking for state here doesn't work as it is async
    termInput.simulate('change', {
      persist: () => { },
      target: { value: term }
    })
    expect(wrapper.find(TextField).prop('value')).toEqual(term)
  })

})
