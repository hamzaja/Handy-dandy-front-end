import React from 'react';
import Logout from './logout'
import AllUsers from './profile/allusers'
import Buttons from './profile/buttons'
import MyBookings from './profile/mybookings'
import CurrentUserProfile from './profile/currentuserprofile'
import Messages from './profile/messages'
import Connections from './profile/connections'


import {connect} from 'react-redux'

class Profile extends React.Component {

  state={
    user: null,
    currentUserProfile:false,
    whichButtonClicked: null
  }

componentDidMount() {
  if (localStorage.token) {
    fetch('http://localhost:3000/profile',{
      headers: {
      'Authorization': `${localStorage.token}`
  }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({user: user})
      this.props.addCurrentUser(this.state.user)
      this.props.bookings(user.booked_users)
    })
  }
  else {
    this.props.history.push('/finish-sign-up')
  }
}

  currentUserProfile = () => {
    return <div><CurrentUserProfile/></div>
  }

  profile=()=>{
    this.setState({whichButtonClicked:'profile'})
  }
  homePage=()=>{
    this.setState({whichButtonClicked:null})
  }
  messages=()=>{
    this.setState({whichButtonClicked:'messages'})
  }
  connections=()=>{
    this.setState({whichButtonClicked:'connections'})
  }


  whichPageToShow=()=>{
    const {whichButtonClicked } = this.state
    if (whichButtonClicked === 'profile'){
      return <CurrentUserProfile/>
    }
    if (whichButtonClicked === 'messages'){
      return <Messages/>
    }
    if (whichButtonClicked === 'connections'){
      return <Connections/>
    }
  }





  render() {
    return (
      <div className="mainDiv" >
        <Logout history={this.props.history} />
        <Buttons
         profile={this.profile}
         homePage={this.homePage}
         messages={this.messages}
         connections={this.connections}
         />
        {this.state.whichButtonClicked?
          this.whichPageToShow()
          :
          this.state.currentUserProfile?
          <CurrentUserProfile/>
          :
          <AllUsers  history={this.props.history} />
        }

        {this.state.user?
          <div className="bookingInApage"><MyBookings user={this.state.user}/></div>
          :
          <p>noo booking</p>
        }
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addCurrentUser: (userInfo) => {dispatch({type: "currentUser" , payload:userInfo})},
    bookings:(bookings) =>{dispatch({type:"bookings", payload:bookings})}
  }
}

export default connect(null , mapDispatchToProps)(Profile);
