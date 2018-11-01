import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}

function MediaCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='https://s3-us-west-2.amazonaws.com/photo-app-tvc/drag-or-browse.png'
          title='Contemplative Reptile'
        />
    </Card>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MediaCard)
