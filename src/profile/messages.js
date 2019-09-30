import React from 'react';
import ShowUserNames from './showusernames'
import ChatBox from './chatbox'
import {connect} from 'react-redux'

class Messages extends React.Component {

  state={
    otherUser : null
  }


  showUserNames = () => {
    return this.props.allusers.map(user => <ShowUserNames
      user={user}
      userToChatWith={this.userToChatWith}
      />)
  }

  userToChatWith = (otherUser) => {
    this.setState({otherUser})
  }

  render() {
    console.log(this.state.otherUser)
    return (
    <div>
      <div>
      please click on any user you want to chat with
      {this.showUserNames()}
      </div>
      <div>
        <h1>ChatBox</h1>
        {this.state.otherUser?
          <ChatBox otherUser={this.state.otherUse} />:null
        }

      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  allusers: state.allUsers
  }
}


export default connect(mapStateToProps)(Messages);
