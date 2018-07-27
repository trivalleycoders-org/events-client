import React from 'react'
import { mount } from 'enzyme'
import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import { SearchEvent } from '../../../ui/AppBar/SearchEvent'
import styles from '../../../ui/AppBar/styles'


describe('SearchEvent', () => {
  let mountedSearchEvent
  const onChangeMock = jest.fn()
  const onChange = jest.fn(() => {
    onChangeMock()
  })

  const searchEvent = () => {
    if (!mountedSearchEvent) {
      const Composer = ({
        classes,
        onChange
      }) => (
          <SearchEvent onChange={onChange} classes={classes} />
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
    expect(wrapper.find(SearchEvent)).toHaveLength(1)
  })

  describe('the rendered SearchEvent component', () => {
    it('contains everything else that gets rendered', () => {

    })
  })

  it('always renders search button', () => {

  })

  describe('when search button is clicked', () => {
    beforeEach(() => {

    })

    it('renders cancel button', () => {

    })

    it('triggers a call to the api to fetch events based on the search term', () => {

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

    const params = { persist: () => { }, target: { value: term } }
    wrapper
      .find(SearchEvent)
      .at(0)
      .props()
      .onChange(params)

    expect(onChange).toHaveBeenCalledWith(params)
  })



})
