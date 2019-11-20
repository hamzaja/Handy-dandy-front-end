import React from 'react';
import EachUserSkills from './eachuserskills'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

class CurrentUserProfile extends React.Component {

  addSkills=()=>{
    this.props.push.history('./finish-sign-up?')
  }

  render() {
    const{first_name,username, last_name,avalability,email} = this.props.currentUser
    return (
      <div className="currentUserProfile" >
          <p>First Name : {first_name}</p><hr/>
          <p>last Name: {last_name}</p><hr/>
          <p>User Name : {username}</p><hr/>
          <p>Avalability : {avalability}</p><hr/>
          <p>Email:{email}</p><hr/>
          <Link to='/finish-sign-up'> Add Skills </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(CurrentUserProfile);
