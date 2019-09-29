import React from 'react';

class MyBookings extends React.Component {

  render() {
    console.log(this.props.booking)
    return (
      <div>
      {this.props.booking.time}
      </div>
    )
  }
}


export default MyBookings;
