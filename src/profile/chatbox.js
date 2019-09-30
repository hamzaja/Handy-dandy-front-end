import React from 'react';

class ChatBox extends React.Component {
  render() {


    return (
      <div>
        <input type='text' onChange={this.addNewSkill} />
        <button class="glow-on-hover" type="button" onClick={this.submit}>Send</button>
      </div>
    )
  }
}


export default ChatBox;
