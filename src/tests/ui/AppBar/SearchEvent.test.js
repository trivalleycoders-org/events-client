import React from 'react'
import { shallow } from 'enzyme'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

import { SearchEvent } from '../../../ui/AppBar/SearchEvent'
import styles from '../../../ui/AppBar/styles'

const Composer = ({
  classes,
}) => (
  <SearchEvent classes={classes} />
)

Composer.propTypes = {
  classes: PropTypes.object.isRequired,
}

const Composition = withStyles(styles)(Composer)

describe('<SearchEvent />', () => {
  it('should render a styled SearchEvent', () => {
    const wrapper = shallow(<Composition />)
    // console.log('wrapper: ', wrapper.dive().html())
    // Note the use of dive() because Composition is now wrapped by the withStyles higher order component.
    expect(wrapper.dive().find(SearchEvent)).toHaveLength(1)
  })
})
