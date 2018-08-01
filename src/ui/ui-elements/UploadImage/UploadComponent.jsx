import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'

/* User */
import * as imageActions from 'store/actions/upload-actions'
import * as uploadSelectors from 'store/selectors/upload-selectors'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
/* Dev */
// import { green } from 'logger'

class UploadImageComponent extends React.Component {
  constructor(props) {
    super(props)

    let imageUrl = ''
    const initial = this.props.initial
    const uploadedImageUrl = this.props.uploadedImageUrl

    if (typeof initial !== 'undefined') {
      imageUrl = initial
    } else if (!uploadedImageUrl === null) {
      imageUrl = uploadedImageUrl
    } else {
      imageUrl = ''
    }

    this.state = {
      imageUrl: imageUrl,
      imageName: '',
    }

  }

  localOnChange = async (event) => {
    let formData = new FormData()
    formData.append('upload', this.fileInput.files[0])
    await this.props.requestUploadOneImage(formData)
    // Calling redux-form's .onChange()
    this.setState({
      imageUrl: this.props.uploadedImageUrl
    })
    this.props.onChange(this.props.uploadedImageUrl)
  }
  // <AddPhotoAlternate className={classes.addPhotoAlternate} />
  renderImage = (classes) => {
    return this.state.imageUrl
      ?  <ResponsiveImage src={this.state.imageUrl} alt='uploaded' />
      :  <div style={{ border: '1px solid red' }}>

         </div>

  }


  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root} elevation={1}>
        <Paper className={classes.root}>
          {this.renderImage(classes)}
        </Paper>
        <Typography>
          Upload an image
        </Typography>
        <input
          className={classes.fileInput}
          type="file"
          ref={input => {
            this.fileInput = input
          }}
          name='upload'
          onChange={this.localOnChange}
        />
      </Paper>
    )
  }
}

const styles = theme => {
  return ({
    addPhotoAlternate: {
      color: 'white',
    },
    addPhotoWrapper: {
      margin: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      minHeight: 100,

    },
    fileInput: {
      color: theme.palette.text.primary,
    },
    root: {
      border: '1px solid green',

    }

  })

}

const mapStateToProps = (state) => {
  return {
    requestUploadOneImage: imageActions.requestKeyUploadOneImage,
    uploadedImageUrl: uploadSelectors.getUploadedImageUrl(state),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, imageActions)
)(UploadImageComponent)

UploadImageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  initial: PropTypes.string,
  uploadedImageUrl: PropTypes.string,

}