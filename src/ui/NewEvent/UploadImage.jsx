import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Paper, Typography, Button, } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import * as imageActions from 'store/actions/image-actions'
import * as imageSelectors from 'store/selectors/images-selectors'
// import { green } from 'logger'
import { isNil } from 'ramda'

const wrapper = {
  padding: '30px',
  color: 'white',
}

class UploadImage extends React.Component {

  state = {
    currentImage: this.props.currentImage,
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('upload', this.fileInput.files[0])
    await this.props.requestUploadOneImage(formData)
    this.props.getImageUrl(this.props.currentImageUrl)
  }

  currentImage = () => {
    const img = this.props.currentImageUrl
    // green('img', img)
    // green('img.Location', img.Location)
    if (isNil(img)) {
      // green('currentImage: returning null')
      return null
    } else {
      // green('currentImage: returning <img')
      return <img src={img} alt='uploaded' />
    }

  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant='subheading'>
          Upload Image
          </Typography>
        <div>
          <input
            type="file"
            ref={input => {
              this.fileInput = input
            }}
            name='upload'
          />
          <Button size="small" variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
            Upload
          <CloudUploadIcon className={classes.rightIcon} />
          </Button>
        </div>
        {this.currentImage()}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  currentImageUrl: imageSelectors.getCurrentImageUrl(state),
  currentImageName: imageSelectors.getCurrentImageName(state),
  requestUploadOneImage: imageActions.requestKeyUploadOneImage
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, imageActions)
)(UploadImage)
