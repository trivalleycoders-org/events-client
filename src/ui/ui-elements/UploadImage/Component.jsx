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
  wrapper: {
    margin: 0,
    minHeight: 500,
    // border: '1px solid red'
  },
  p1: {
    // border: '1px solid green',
    padding: 10,

  },
  p2: {
    maxWidth: '100%',
    height: 'auto',
    // border: '1px solid blue',
    // minHeight: 200,
    // display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch'
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
  imageDiv: {
    position: 'relative',
    zIndex: '0',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: '1',

  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
})

class UploadImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accepted: [],
      rejected: [],
      // previewBlob: '',
      imageUrl: '',
    }
  }
  // onDropAccepted = (files) => {
  //   console.log('onDragAccepted', files)
  //   this.setState({
  //     previewBlob: files[0].preview
  //   })
  // }
  // onDropRejected = (a) => {
  //   console.log('onDragRejected', a)
  // }
  // previewBlob = () => {
  //   if (!this.state.accepted[0] === undefined) {
  //     console.log('it is not undefined')
  //     console.log('blob', this.state.accepted[0])
  //   } else {
  //     console.log('it is undefined')
  //   }
  //   return ''
  // }
  onDrop = async (accepted, rejected) => {

    this.setState({
      accepted,
      rejected,
    })
    // const fileName = accepted[0].name
    let formData = new FormData()
    formData.append('upload', accepted[0])
    await this.props.requestUploadOneImage(formData)
    green('onDrop: uploadedImageUrl', this.props.uploadedImageUrl)
    this.setState({
      imageUrl: this.props.uploadedImageUrl
    })
    this.props.onChange(this.props.uploadedImageUrl)
  }
  render() {
    const { classes } = this.props
    // console.log('file', this.state.accepted[0])
    green('render.state', this.state)

    return (
      <div className={classes.wrapper}>
        <div className={classes.p1}>
          <Paper className={classes.p2}>
            {
              this.state.imageUrl
                ? <div className={classes.imageDiv}>
                    <MediaCard src={this.state.imageUrl} />
                    <Button mini variant="fab" color='secondary' aria-label="Delete" className={classes.fab}>
                      <DeleteIcon />
                    </Button>
                  </div>
                : <Dropzone
                    style={style}
                    acceptStyle={acceptStyle}
                    rejectStyle={rejectStyle}
                    accept="image/jpeg, image/png"
                    onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
                    // onDropAccepted={this.onDropAccepted}
                    // onDropRejected={this.onDropRejected}
                  >
                    <ResponsiveImage src='https://s3-us-west-2.amazonaws.com/photo-app-tvc/drag-or-browse.png' alt='drag and drop of click to browse' />
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
    requestUploadOneImage: imageActions.requestKeyUploadOneImage,
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