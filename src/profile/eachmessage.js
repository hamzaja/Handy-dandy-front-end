import React from 'react';

class EachMessage extends React.Component {


  render() {
    console.log(this.props.currentUser.id === this.props.message.user_id)
    return (
      <div className="message-sender-receiver">
        <div className={(this.props.currentUser.id === this.props.message.user_id)? 'sender':"receiver"}>
          <p className="sender-receiver" >{this.props.message.text}</p>
        </div>
      </div>
    )
  }
}


export default EachMessage;
