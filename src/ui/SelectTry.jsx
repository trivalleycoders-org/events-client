import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import SelectField from 'ui/ui-elements/SelectField'
import { MenuItem } from'@material-ui/core'

const SelectTry = () => {
  return (
    <div>
      <form>
        <SelectField
          name='category'
        >
          <MenuItem value='Quadcopter'>Quadcopter</MenuItem>
          <MenuItem value='Octocopter'>Octocopter</MenuItem>
          <MenuItem value='Racing'>Racing</MenuItem>
          <MenuItem value='Video'>Video</MenuItem>
        </SelectField>
      </form>
    </div>
  )
}

export default compose(
  reduxForm({
    form: 'SelectTry'
  })
)(SelectTry)