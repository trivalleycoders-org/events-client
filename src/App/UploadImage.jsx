import React from 'react'
import { connect } from 'react-redux'
import * as imageActions from 'store/image-actions'

const wrapper = {
  padding: '30px',
  color: 'white',
}

class UploadImage extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('this.fileInput.files[0]', this.fileInput.files[0])
    let formData = new FormData()
    formData.append('upload', this.fileInput.files[0])
    this.props.requestUploadOneImage(formData)

  }

  render() {
    return (
      <div style={wrapper}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input
              type="file"
              ref={input => {
                this.fileInput = input
              }}
              name='upload'
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps, imageActions)(UploadImage)
