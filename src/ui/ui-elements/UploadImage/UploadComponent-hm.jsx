import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { isEmpty, isNil } from 'ramda'
import { Paper, Typography, Button, TextField, FormLabel } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import FolderIcon from '@material-ui/icons/Folder'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import * as imageActions from 'store/actions/upload-actions'
import * as imageSelectors from 'store/selectors/upload-selectors'

class UploadComponent extends React.Component {

  constructor(props) {
    super(props)
    console.log('this.props in constructor: ', this.props)
    this.fileInput = React.createRef()
    this.state = {
      selectedFileName: ''
    }
  }

  localOnChange = async (event) => {
    let formData = new FormData()
    formData.append('upload', this.fileInput.current.files[0])
    await this.props.requestUploadOneImage(formData)// .then(s => {
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

  updateTextField = (e) => {
    this.setState((prevState, props) => ({
      selectedFileName: this.fileInput.current.files[0].name
    }))
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
            className={classes.fileInput}
            type="file"
            id="fileinput"
            ref={this.fileInput}
            name='upload'
            onChange={this.updateTextField}
          />
          <Button
            variant="fab"
            color="primary"
            aria-label="add"
            className={classes.button}
            htmlFor="fileinput"
          >
            <label htmlFor="fileinput">
              <FolderIcon className={classes.folderIcon} />
            </label>
          </Button>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            value={this.state.selectedFileName}
          />
          <Button disabled={isEmpty(this.state.selectedFileName)} size="small" variant="contained" color="primary" className={classes.button} onClick={this.localOnChange}>
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
  currentImageUrl: imageSelectors.getUploadedImageUrl(state),
  currentImageName: imageSelectors.getUploadedImageName(state),
  requestUploadOneImage: imageActions.requestKeyUploadOneImage
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, imageActions)
)(UploadComponent)