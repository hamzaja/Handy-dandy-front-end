import React from 'react';
import EachBooking from './eachbooking'

class MyBookings extends React.Component {

  renderBooking = () => {
    return this.props.user.booked_users.map(booking => <EachBooking booking={booking} /> )
  }

  render() {
    console.log(this.props.user.booked_users)
    return (
    this.props.user.booked_users?
      <div>
        {this.renderBooking()}
      </div>
        :
        <div>you currently have no booking</div>
    )
  }
}


export default MyBookings;
