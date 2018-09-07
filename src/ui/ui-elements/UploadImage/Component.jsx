import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { Paper, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'

/* User */
import * as imageActions from 'store/actions/upload-actions'
import * as uploadSelectors from 'store/selectors/upload-selectors'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import MediaCard from 'ui/ui-elements/MediaCard'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const style = {
  backgroundColor: 'transparent',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column nowrap'
}

const acceptStyle = {
  backgroundColor: '#C8E6C9'
}

const rejectStyle = {
  backgroundColor: '#FFCDD2'
}

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  dropZoneMessage: {
    color: 'lightgray',
    textAlign: 'center',

  },
  dropZoneMessages: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column nowrap',
    flexBasis: '70%',
    fontSize: '5px !important'
  },
  dropZoneControls: {
    flexBasis: '30%',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: '1',

  },
  imageDiv: {
    position: 'relative',
    zIndex: '0',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  p1: {
    padding: 10,

  },
  p2: {
    maxWidth: '100%',
    height: 'auto',
    alignItems: 'stretch',
    justifyContent: 'stretch'
  },
  wrapper: {
    margin: 0,
  },
})

const dropZoneDefault = <ResponsiveImage
  src='https://s3-us-west-2.amazonaws.com/photo-app-tvc/drag-or-browse.png' alt='drag and drop of click to browse'
  />

const dropZoneReject = <ResponsiveImage
  src='https://s3-us-west-2.amazonaws.com/tvc-events/media/drag-reject.png' alt='image rejected'
  />

class UploadImage extends React.Component {
  constructor(props) {
    super(props)
    const initial = this.props.initial
    const uploadedImageUrl = this.props.uploadedImageUrl
    let imageUrl = ''
    if (typeof initial !== 'undefined') {
      imageUrl = initial
    } else if (!uploadedImageUrl === null) {
      imageUrl = uploadedImageUrl
    } else {
      imageUrl = ''
    }
    this.state = {
      accepted: [],
      rejected: [],
      // previewBlob: '',
      imageUrl: imageUrl,
    }
  }

  onDrop = async (accepted, rejected) => {

    this.setState({
      accepted,
      rejected,
    })
    let formData = new FormData()
    formData.append('upload', accepted[0])
    await this.props.imageUploadOneRequest(formData)
    this.setState({
      imageUrl: this.props.uploadedImageUrl
    })
    this.props.onChange(this.props.uploadedImageUrl)
  }
  removeImage = () => {
    green('removeImage()')
    this.setState({
      imageUrl: undefined
    })
    this.props.onChange('')
  }
  render() {
    const { classes } = this.props

    return (
      <div className={classes.wrapper}>
        <div className={classes.p1}>
          <Paper className={classes.p2}>
            {
              this.state.imageUrl
                ? <div className={classes.imageDiv}>
                    <MediaCard src={this.state.imageUrl} />
                    <Button
                      mini
                      variant="fab"
                      color='secondary'
                      aria-label="Delete"
                      className={classes.fab}
                      onClick={this.removeImage}
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                : <Dropzone
                    style={style}
                    acceptStyle={acceptStyle}
                    rejectStyle={rejectStyle}
                    accept="image/jpeg, image/png"
                    onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
                  >
                    {(props) => {
                      if (props.isDragActive) {
                        return props.isDragAccept ? dropZoneDefault : dropZoneReject
                      } else {
                        return dropZoneDefault
                      }
                  }}
                  </Dropzone>
            }
          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imageUploadOneRequest: imageActions.imageUploadOneRequestKey,
    uploadedImageUrl: uploadSelectors.getUploadedImageUrl(state),
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, imageActions)
)(UploadImage)

UploadImage.propTypes = {
  classes: PropTypes.object.isRequired,
  initial: PropTypes.string,
  uploadedImageUrl: PropTypes.string,

}