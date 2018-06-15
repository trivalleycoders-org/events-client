import { cardData } from '../mock-data/card-data'
// import Card01 from './Card01'
// import Card02 from './Card02'
// import Card03 from './Card03'
// import Grid from '@material-ui/core/Grid''
import { withStyles } from '@material-ui/core/styles'
import AppBar from 'elements/AppBar'
import React, { Component, Fragment } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
// import EventGrid from './EventGrid'
// import EventGridWithCard from './EventGridWithCard'
import Typography from '@material-ui/core/Typography'
// import EventGrid2 from './EventGrid2'
import EventGrid3 from './EventGrid3'
// import OneCardOnGrid from './OneCardOnGrid'
import UploadImage from './UploadImage'


const styles = theme => ({
  gridItem: {
    // flexBasis: '33.33333%',
  },
  root: {
    flexGrow: 1,
    fontSize: '2em',
  },
})

class App extends Component {
  state = {
    spacing: '16',
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    })
  }

  render() {
    const { classes } = this.props
    const { spacing } = this.state

    return (
      <Router>
        <Fragment>
          <AppBar title='Events' />
          <Route path='/upload' component={UploadImage} />
          <Route path='/' component={EventGrid3} />
          {/* <Route path='/one-card' component={OneCardOnGrid} />
          <Route path='/grid-with-card' component={EventGridWithCard} />
          <Route path='/01' render={() => (
            <Fragment>
              <h1 style={{color: 'white', textAlign: 'center',}}>Card-01</h1>
              <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={Number(spacing)}>
                    {cardData.map(c => (
                      <Grid key={c.title} item>
                        <Card01
                          image={c.image}
                          price={c.price}
                          time={c.time}
                          title={c.title}
                          tags={c.tags}
                          venu={c.venu}
                       />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Fragment>
          )} />*/}
          {/* <Route path='/02' render={() => (
            <Fragment>
              <h1 style={{color: 'white', textAlign: 'center',}}>Card-02</h1>
              <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={Number(spacing)}>
                    {cardData.map(c => (
                      <Grid key={c.title} item>
                       <Card02
                         image={c.image}
                         price={c.price}
                         time={c.time}
                         title={c.title}
                         tags={c.tags}
                         venu={c.venu}
                       />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Fragment>
          )} /> */}
          {/* <Route path='/03' render={() => (
            <Fragment>
              <h1 style={{color: 'white', textAlign: 'center',}}>Card-03</h1>
              <Grid container className={classes.root} spacing={16}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={Number(spacing)}>
                    {cardData.map(c => (
                      <Grid className={classes.gridItem} key={c.title} item>
                       <Card03
                         image={c.image}
                         price={c.price}
                         time={c.time}
                         title={c.title}
                         tags={c.tags}
                         venu={c.venu}
                       />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Fragment>
          )} /> */}


        </Fragment>
      </Router>
    )
  }
}

export default withStyles(styles)(App)

/*
<Fragment>

  <div className={classes.cardWrapper}>
    {cardData.map(c => {
      return <Card
        time={c.time}
        image={c.image}
        venu={c.venu}
        price={c.price}
        title={c.title}
      />
    })}
  </div>
</Fragment>
*/
