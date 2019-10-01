import React from 'react';
import EachBooking from './eachbooking'

class MyBookings extends React.Component {

  renderBooking = () => {
    return this.props.user.booked_users.map(booking => <EachBooking booking={booking} /> )
  }

  render() {
    return (
    this.props.user.booked_users?
      <div className = 'my-bookings' >
        <h1>My Bookings</h1>
        {this.renderBooking()}
      </div>
        :
        <div className='my-bookings'>you currently have no booking</div>
    )
  }
}


export default MyBookings;
