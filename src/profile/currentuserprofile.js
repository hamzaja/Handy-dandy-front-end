import React from 'react';
import {connect} from 'react-redux'

class CurrentUserProfile extends React.Component {




  render() {
    const{username} = this.props.currentUser
    return (
      <div className="currentUserProfile" >
      User Name : {username}
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
