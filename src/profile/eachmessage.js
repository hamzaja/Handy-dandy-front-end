import React from 'react';

class EachMessage extends React.Component {


  render() {
    console.log(this.props.currentUser.id === this.props.message.user_id)
    return (
      <div className={(this.props.currentUser.id === this.props.message.user_id)? 'otherUserMessage':"thisUserMessage"}>
        {this.props.message.text}
      </div>
    )
  }
}


export default EachMessage;
