import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import AddCircle from '@material-ui/icons/AddCircle'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import * as eventsSelectors from '../store/selectors/events-selectors'
import { green } from 'logger'
import * as tagActions from 'store/actions/tag-actions'

const styles = theme => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  chipRow: {
    padding: '5px',
    border: 'solid 1px white'
  }
})

class ChipsArray extends React.Component {

  handleDelete = data => () => {
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)') // eslint-disable-line no-alert
      return
    }

    const chipData = [...this.state.chipData]
    const chipToDelete = chipData.indexOf(data)
    chipData.splice(chipToDelete, 1)
    this.setState({chipData})
  }

  addChipClick = (e) => {
    green('addChipClick', e)
    this.props.requestCreateNewTag({name: 'Drone Battle'})
  }

  render() {
    const {classes, events} = this.props
    const chips = events.map(event => {
      return (
        <div className={classes.chipRow} key={event._id}>
          {
            event.tags.map(t => {
              return (
                <Chip
                  className={classes.chip}
                  key={t}
                  label={t}
                  onDelete={this.handleDelete(t)}
                />
              )
            })
          }
          <AddCircle
            onClick={(event) => this.addChipClick(event)}
          />
        </div>
      )
    })
    return (
      <Paper className={classes.root}>
        {chips}

      </Paper>
    )
  }
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    events: eventsSelectors.getAllEvents(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, tagActions)
)(ChipsArray)

