import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Paper, Typography, Button, } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { withStyles } from '@material-ui/core/styles'

/* User */
// import styles from './styles'
import * as imageActions from 'store/actions/image-actions'
import * as imageSelectors from 'store/selectors/images-selectors'
import { isNil } from 'ramda'

import { green } from 'logger'

const styles = {}

class UploadImageComponent extends React.Component {

  state = {
    currentImage: this.props.currentImage,
    imageUrl: '',
    imageName: '',
  }

  handleUploadClick = (event) => {
    // event.preventDefault() redux-form doc says you don't need this
    let formData = new FormData()
    formData.append('upload', this.fileInput.files[0])
    this.props.requestUploadOneImage(formData)
    this.props.getImageUrl(this.props.currentImageUrl)
  }

  localOnChange = async (event) => {
    let formData = new FormData()
    formData.append('upload', this.fileInput.files[0])
    // await this.props.requestUploadOneImage(formData)
    await this.props.requestUploadOneImage(formData)// .then(s => {
    //   console.log('THEN', s)
    // })
    green('localOnChange: currentImageUrl', this.props.currentImageUrl)
    this.props.onChange(this.props.currentImageUrl)

  }

  currentImage = () => {
    const img = this.props.currentImageUrl
    if (isNil(img)) {
      return null
    } else {
      return <img src={img} alt='uploaded' />
    }
  }

  render() {
    const { classes } = this.props
    // green('this.props', this.props)
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
            onChange={this.localOnChange}
          />
          <Button 
            size="small" 
            variant="contained" 
            color="primary" 
            className={classes.button} 
            onClick={this.handleSubmit}
          >
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
)(UploadImageComponent)
