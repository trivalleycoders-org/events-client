import React, {Component} from 'react'
import Title from 'elements/Title'
import {withStyles} from '@material-ui/core/styles'
import {Field, reduxForm} from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {compose} from 'recompose'
import UploadImage2 from './UploadImage2'
import UploadImage from './zz.UploadImage'

const styles = {}

class Admin extends Component {
  handleSubmit = (event, values) => {
    event.preventDefault()
    console.log('handleSubmit')
    // console.log('values', values)

  }
  renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }, ) => (
    <TextField
      placeholder={label}
      {...input}
      {...custom}
    />
  )


  render() {

    // console.log('props', this.props)
    // const {handleSubmit} = this.props
    return (
      <div>
        {/* <UploadImage /> */}
        <UploadImage2 />
        <form onSubmit={this.handleSubmit}>
          {/* <div>
            <Button
              variant='raised'
              component="label"
              color="primary"
              // className={buttonClassname}
              // disabled={this.state.loading}
              // onClick={this.handleButtonClick}
            >
              {'Upload'}
              <input
                  onChange={e => console.log(e.target.files[0])}
                  style={{ display: 'none' }}
                  type="file"
              />
            </Button>
          </div> */}
          <div>

            <Field
              name="title"
              component={this.renderTextField}
              label="Event title"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text"/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// export default withStyles(styles)(Admin)

// Admin = reduxForm({form: 'admin'})(Admin)

export default compose(withStyles(styles), reduxForm({form: 'admin'}))(Admin)
