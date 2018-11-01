import React from 'react'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const ContentFiller = (props) => {
  const { classes } = props
  return (
    <div id='ContentFiller-wrapper' className={classes.wrapper}>
      <Typography variant='body1' align='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae justo. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Duis tristique sollicitudin nibh sit amet commodo. Pellentesque adipiscing commodo elit at. Ullamcorper sit amet risus nullam eget felis eget. Diam quis enim lobortis scelerisque. Leo vel fringilla est ullamcorper eget nulla facilisi. Imperdiet dui accumsan sit amet nulla facilisi morbi. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Feugiat nibh sed pulvinar proin. Congue eu consequat ac felis donec. Iaculis nunc sed augue lacus viverra vitae congue eu. Duis at consectetur lorem donec massa. Tincidunt ornare massa eget egestas.
      </Typography>
      <Typography variant='body1' align='center'>
        In nisl nisi scelerisque eu ultrices. Vitae semper quis lectus nulla at volutpat diam ut venenatis. In pellentesque massa placerat duis ultricies lacus sed. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Viverra justo nec ultrices dui sapien eget. Nulla malesuada pellentesque elit eget gravida. Velit sed ullamcorper morbi tincidunt ornare massa eget. Vitae suscipit tellus mauris a diam maecenas sed enim. Quam id leo in vitae turpis massa. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Leo urna molestie at elementum eu.
      </Typography>
      <Typography variant='body1' align='center'>
        Id venenatis a condimentum vitae sapien. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Euismod lacinia at quis risus sed vulputate odio. Leo vel orci porta non pulvinar neque laoreet suspendisse. Id volutpat lacus laoreet non curabitur gravida arcu ac. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Proin fermentum leo vel orci porta non pulvinar. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Elit pellentesque habitant morbi tristique senectus et netus. In vitae turpis massa sed. Quam lacus suspendisse faucibus interdum. Vitae ultricies leo integer malesuada nunc. Posuere sollicitudin aliquam ultrices sagittis orci. Nisl condimentum id venenatis a condimentum. In nulla posuere sollicitudin aliquam ultrices sagittis orci. Imperdiet proin fermentum leo vel orci porta non. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Massa sed elementum tempus egestas sed sed. Est placerat in egestas erat imperdiet sed euismod nisi.
      </Typography>
      <Typography variant='body1' align='center'>
        Gravida in fermentum et sollicitudin ac orci. Leo vel orci porta non pulvinar neque. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Neque egestas congue quisque egestas diam in arcu cursus. Pretium vulputate sapien nec sagittis aliquam. Enim eu turpis egestas pretium aenean pharetra. Lectus magna fringilla urna porttitor. Non blandit massa enim nec dui nunc mattis. Tellus cras adipiscing enim eu turpis. Quam nulla porttitor massa id neque aliquam.
      </Typography>
      <Typography variant='body1' align='center'>
        Vitae congue eu consequat ac felis donec. Vel eros donec ac odio tempor. Nisl tincidunt eget nullam non nisi est sit. Nisi lacus sed viverra tellus in hac. Neque aliquam vestibulum morbi blandit. Felis donec et odio pellentesque diam. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Orci porta non pulvinar neque. Elit sed vulputate mi sit. Eu volutpat odio facilisis mauris sit amet massa vitae tortor.
      </Typography>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    overflow: 'scroll',
  },
})

export default withStyles(styles)(ContentFiller)

