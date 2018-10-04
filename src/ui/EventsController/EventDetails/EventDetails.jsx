import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import * as authSelectors from 'store/selectors/auth-selectors'
import Toolbar from './Toolbar'
import ResponsiveImage from 'ui/ui-elements/ResponsiveImage'
import Title from 'ui/ui-elements/typography/Title'
import ConfirmModal from 'ui/ui-elements/ConfirmModal'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class EventDetails extends React.Component {
  state = {
    values: '',
    confirmModal: false,
  }
  eventId = this.props.event._id
  event = this.props.event

  handleDeleteClick = () => {
    this.setState({ confirmModal: true })
  }

  closeConfirmModal = (close) => {
    // the modal always closes when button yes or no is clicked
    this.setState({ confirmModal: false })
    // but only delete event on yes click
    if (close) {
      this.props.eventDelete()
      this.props.goBack()
    }
  }
  
  render() {
    const { confirmModal } = this.state

    return (
      <div>
        <Toolbar
          handleDeleteClick={this.handleDeleteClick}
          id={this.eventId}
        />
        <h1>Event Details</h1>
        <ConfirmModal
          message={'Are you sure you want to delete this event?'}
          open={confirmModal}
          close={this.closeConfirmModal}
        />
        {
          (this.eventId === undefined)
            ? <div>
                event not found
              </div>
            : <div>
                <ResponsiveImage
                  src={this.event.imageUrl}
                  alt={this.event.title} />
                <Title>What: {this.event.title}</Title>
                <Title>Who: {this.event.organization}</Title>
                <Title>When: {this.event.dates.startDateTime} - {this.event.dates.endDateTime}</Title>
                <Title>Where:</Title>
                <Title>{this.event.venueName}</Title>
                <Title>{this.event.location.cityName}, {this.event.location.stateCode} {this.event.location.postalCode}</Title>
                <Title>How: {this.event.linkToUrl}</Title>
                <Title>How much: {this.props.free ? 'FREE' : '$' + this.event.price}</Title>
                <Title>Tags: {this.event.tags !== undefined ? this.event.tags.join(', ') : '<none>'}</Title>
              </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const currentUserId = authSelectors.getUserId(state)
  return {
    currentUserId,
  }
}

const styles = {}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(EventDetails)