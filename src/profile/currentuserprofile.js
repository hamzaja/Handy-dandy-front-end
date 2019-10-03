import React from 'react';
import EachUserSkills from './eachuserskills'
import {connect} from 'react-redux'

class CurrentUserProfile extends React.Component {

  render() {
    const{first_name,username, last_name,avalability,email} = this.props.currentUser
    return (
      <div className="currentUserProfile" >
          <p>First Name : {first_name}</p><hr/>
          <p>last Name: {last_name}</p><hr/>
          <p>User Name : {username}</p><hr/>
          <p>Avalability : {avalability}</p><hr/>
          <p>Email:{email}</p><hr/>
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
