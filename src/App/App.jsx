import { cardData } from '../mock-data/card-data'
import Card from './Card'
import CardNew from './CardNew'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AppBar from 'elements/AppBar'
import React, { Component, Fragment } from 'react'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'

const styles = theme => ({
  // cardWrapper: {
  //   display: 'flex',
  // },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 313.5,
    width: 330,
  }
})

class App extends Component {
  state = {
    spacing: '16',
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Router>
        <Fragment>
          <AppBar title='Events' />
          <Route path='/new' render={() => (
            <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={Number(spacing)}>
                  {cardData.map(c => (
                    <Grid key={c.title} item>
                     <CardNew
                       time={c.time}
                       image={c.image}
                       venu={c.venu}
                       price={c.price}
                       title={c.title}
                     />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          )} />
          <Route path='/old' render={() => (
            <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={Number(spacing)}>
                  {cardData.map(c => (
                    <Grid key={c.title} item>
                     <Card
                       time={c.time}
                       image={c.image}
                       venu={c.venu}
                       price={c.price}
                       tags={c.tags}
                       title={c.title}
                     />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          )} />

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
