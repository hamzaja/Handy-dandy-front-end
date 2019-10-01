import React from 'react';
import ShowMessages from './showmessages'
import {connect} from 'react-redux'

class ChatBox extends React.Component {



  render() {
    return (
      <div>
        gvnbhgjbknl
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ChatBox);
