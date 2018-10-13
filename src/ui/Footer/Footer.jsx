import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
} from '@material-ui/core'

import iTVC from './media/tvc-wordmark-2.svg'
import iMongo from './media/mongodb.svg'
import iExpress from './media/express.svg'
import iReact from './media/react-word.svg'
import iNode from './media/nodejs.svg'
import TVCLinks from './TVCLinks.jsx'
import classNames from 'classnames'
import Display1 from 'ui/ui-elements/typography/Display1'
import Body2 from 'ui/ui-elements/typography/Body2'
import Mern from './Mern'
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
      <Grid container spacing={24}>
        <Grid item sm={4}>
          <ItemPaper classes={classes}>
            <Body2 color='white'>Made with pride by</Body2>
            <img src={iTVC} alt='tri valley coders' />
          </ItemPaper>
        </Grid>
        <Grid item sm={6} className={classes.line}>
          <ItemPaper classes={classes}>
            <Mern />
          </ItemPaper>
        </Grid>
      </Grid>
    </div>
  )
}

const styles = theme => ({
  line: {
    borderLeft: '1px solid white',
  },
  wrapper: {
    flexGrow: 1,
    padding: '5% 10% 5% 10%',
    // backgroundColor: 'orange'
    backgroundColor: 'rgb(22, 22, 22)',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    // color: theme.palette.text.secondary
    backgroundColor: 'transparent'
    // width: 50,
    // height: 50
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
