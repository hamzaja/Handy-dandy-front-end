import React from 'react';
import RenderFollowedUsers from '../connections/renderconnections'
import {connect} from 'react-redux'

class Connections extends React.Component {

  state={
    followed_users:this.props.currentUser.followed_users,
    following_users:this.props.currentUser.following_users
  }

  renderFollowedUsers = () => {
    return this.state.followed_users.map(user => <RenderFollowedUsers userId= {user.followee_id} />)
  }

  render() {

    return (
      <div className="FollowedUsersDiv">
      {this.renderFollowedUsers()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Connections);
