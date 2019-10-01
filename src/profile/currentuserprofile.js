import React from 'react';
import {connect} from 'react-redux'

class CurrentUserProfile extends React.Component {




  render() {
    const{first_name,username, last_name,avalability,email} = this.props.currentUser
    return (
      <div className="currentUserProfile" >

          <p>First Name : {first_name}</p>
          <p>last Name: {last_name}</p>
          <p>User Name : {username}</p>
          <p>Avalability : {avalability}</p>
          <p>Email:{email}</p>

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
