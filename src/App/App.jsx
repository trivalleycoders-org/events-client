import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import AppBar from 'elements/AppBar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Card from './Card'
import CardNew from './CardNew'
import { green } from 'logger'
import { cardData } from '../mock-data/card-data'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

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
      <Fragment>
       <AppBar title='Events' />

       <Grid container className={classes.root} spacing={16}>
         <Grid item xs={12}>
           <Grid container justify="center" spacing={Number(spacing)}>
             {cardData.map(c => (
               <Grid key={c.title} item>
                 <CardNew
                   date={c.date}
                   image={c.image}
                   location={c.location}
                   price={c.price}
                   title={c.title}
                 />
               </Grid>
             ))}
           </Grid>
         </Grid>
       </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App)

/*
<Fragment>

  <div className={classes.cardWrapper}>
    {cardData.map(c => {
      return <Card
        date={c.date}
        image={c.image}
        location={c.location}
        price={c.price}
        title={c.title}
      />
    })}
  </div>
</Fragment>
*/
