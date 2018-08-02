import React from 'react'
import { Card, CardMedia } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}

const placeholderImage = 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/image-placeholder.png'

const MediaCard = ({ classes, src }) => {
  return (
    <Card>
      <CardMedia
          className={classes.media}
          image={src ? src : placeholderImage}
        />
    </Card>
  )
}

export default withStyles(styles)(MediaCard)