import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

/* User */
import * as imageActions from 'store/actions/image-actions'
import * as imageSelectors from 'store/selectors/images-selectors'
import { isNil } from 'ramda'
/* Dev */
import { green } from 'logger'

const styles = {}

class UploadImageComponent extends React.Component {
  constructor(props) {
    super(props)
    green('*********8props', props)
    this.state = {
      imageUrl: this.props.uploadedImageUrl,
      imageName: '',
    }

  }
  

  localOnChange = async (event) => {
    let formData = new FormData()
    formData.append('upload', this.fileInput.files[0])
    await this.props.requestUploadOneImage(formData)
    // Calling redux-form's .onChange()
    this.props.onChange(this.state.imageUrl)
  }

  currentImage = () => {
    const img = this.state.imageUrl
    if (isNil(img)) {
      return null
    } else {
      return <img src={img} alt='uploaded' />
    }
  }

  render() {
    const { classes } = this.props
    green('UploadComponent.render: props', this.props)
    green('UploadComponent.render: state', this.state)
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
        </div>
        {this.currentImage()}
        <img src={this.state.uploadedImageUrl} />
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  const o = {
  uploadedImageUrl: imageSelectors.getUploadedImageUrl(state),
  uploadedImageName: imageSelectors.getUploadedImageName(state),
  requestUploadOneImage: imageActions.requestKeyUploadOneImage
  }
  // green('o', o)
  return o
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, imageActions)
)(UploadImageComponent)
