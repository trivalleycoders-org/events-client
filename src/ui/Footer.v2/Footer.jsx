import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
} from '@material-ui/core'

import iTVC from './media/tvc-wordmark-2.svg'
import Display1 from 'ui/ui-elements/typography/Display1'
import Body2 from 'ui/ui-elements/typography/Body2'
import Mern from './Mern'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import ByTvc from './ByTvc'

// const titleVariant = 'h4'

const Title = ({classes, children}) => (
  <Display1
    className={classes.title}
    align='center'
    color='white'
  >
    {children}
  </Display1>
)

const ItemPaper = ({ classes, children }) => (
  <Paper
    elevation={0}
    className={classes.paper}
  >
    {children}
  </Paper>
)

const Footer = ({ classes }) => {

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={8} className={classes.outerGrid} alignContent='stretch'>
        <Grid item sm={4} className={classes.leftGrid}>
          <Paper className={classes.paper}>
            <ByTvc />
          </Paper>
        </Grid>
        <Grid item sm={8} className={classes.rightGrid}>
          <Paper className={classes.paper}>
            <Grid container direction='column'>
              <Grid item xs={12} className={classes.rightTop}>
                kk
              </Grid>
              <Grid item xs={12} className={classes.rightBottom}>
                ll
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

const styles = theme => ({
  rightTop: {
    backgroundColor: 'blue'
  },
  rightTop: {
    backgroundColor: 'blue'
  },
  paper: {
    backgroundColor: 'orange',
  },
  outerGrid: {
    backgroundColor: 'grey',
  },
  leftGrid: {
    backgroundColor: 'red',
  },
  rightGrid: {
    borderLeft: '1px solid white',
    backgroundColor: 'green'
  },
  wrapper: {
    flexGrow: 1,
    padding: '5% 10% 5% 10%',

    backgroundColor: 'rgb(22, 22, 22)',
  },

  grid: {
    margin: '2px 0 2px 0',
    minHeight: 300
  },
  grid1: {
    backgroundColor: 'red'
  },
  grid2: {
    backgroundColor: 'green'
  },
  grid3: {
    backgroundColor: 'blue'
  },
  subItem: {
    // border: '1px solid white'
    // backgroundColor: 'orange'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  title: {
    color: 'white',
    paddingBottom: 24
  },
  mernItem: {
    maxHeight: 40
  },
  expressItem: {
    maxHeight: 35
  }
})

export default withStyles(styles)(Footer)
