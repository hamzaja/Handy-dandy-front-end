import React from 'react';
import ShowUserNames from './showusernames'
import ChatBox from './chatbox'
import ShowMessages from './showmessages'
import {connect} from 'react-redux'

class Messages extends React.Component {

  state={
    otherUser : null,
    messageBox:null,
    messages:[]
  }


  showUserNames = () => {
    return this.props.allusers.map(user => <ShowUserNames
      user={user}
      userToChatWith={this.userToChatWith}
      />)
  }

  userToChatWith = (otherUser) => {
    this.setState({otherUser})
    let abc;
    let messageContainer;
    abc = [this.props.currentUser.username,otherUser.username,this.props.currentUser.id,otherUser.id].sort().join()
    fetch("https://handy-dandy-app.herokuapp.com/messages",{
      headers:{
        'Authorization': `${localStorage.token}`
      }
    }).then(res => res.json())
    .then(messageBoxes => {
      messageContainer = messageBoxes.filter(messageBox => messageBox.name === abc )
      if(messageContainer.length === 0){
        fetch("https://handy-dandy-app.herokuapp.com/messages",{
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization': `${localStorage.token}`
          },
          body: JSON.stringify({
            name: abc
          })
        }).then(res=> res.json())
        .then(messageBox => {
          this.setState({messageBox})
        }
        )
      }
      else(
        this.setState({messageBox:messageContainer[0]}))
    })
  }

  abc = () => {
    fetch(`https://handy-dandy-app.herokuapp.com/user_messages/${this.state.messageBox.id}`,{
      headers: {
        "Authorization":`${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(messages=>this.setState({messages}))
  }


  render() {
    return (
    <div >
      <div className="messagePeopleName">
      please click on any user you want to chat with
      <h2>{this.showUserNames()}</h2>
      </div>
      <div className="chatroom" >
        {this.state.messageBox?
          <div><div className="chattingWithUserMsg">You are chatting with: {this.state.otherUser.first_name}</div>
          <ShowMessages
           messageBox={this.state.messageBox}
           messages={this.state.messages}/></div>
          :
          null
        }
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  allusers: state.allUsers,
  currentUser: state.currentUser

  }
}


export default connect(mapStateToProps)(Messages);
