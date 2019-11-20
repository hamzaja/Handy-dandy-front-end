import React from 'react';

class MyBookings extends React.Component {
  state={
    helperInfo:{}
  }

  componentDidMount(){
    fetch(`https://handy-dandy-app.herokuapp.com/users/${this.props.booking.other_user_id}`, {
      headers: {
        "Authorization":`${localStorage.token}`
      }
    }).then(res => res.json())
    .then(helperInfo => this.setState({helperInfo}))
  }


  render() {
    return (
      <div className='each-booking'>
      <p>Date:{this.props.booking.date}</p>
      <p>Time:{this.props.booking.time}</p>
      <p>helper Name: {this.state.helperInfo.first_name} {this.state.helperInfo.last_name} </p>

      </div>
    )
  }
}


export default MyBookings;
