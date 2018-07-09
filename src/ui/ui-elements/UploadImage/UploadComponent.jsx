import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

/* User */
import * as imageActions from 'store/actions/image-actions'
/* Dev */
// import { green } from 'logger'

const styles = {}

class UploadImageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: this.props.initial || null,
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
            onChange={this.localOnChange}
          />
        </div>
        
        <img src={this.state.imageUrl} alt='uploaded' />
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    requestUploadOneImage: imageActions.requestKeyUploadOneImage
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, imageActions)
)(UploadImageComponent)
