import React from 'react';
import EachMessage from './eachmessage'
import {connect} from 'react-redux'

class ShowMessages extends React.Component {

  state={
    messages: [],
    message:''
  }


  componentDidMount(){
    this.interval = setInterval(() => {
      fetch(`https://handy-dandy-app.herokuapp.com/user_messages/${this.props.messageBox.id}`,{
        headers: {
          "Authorization":`${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(messages=>this.setState({messages}))
    }, 1000);
  }

  componentWillUnmount() {
  clearInterval(this.interval);
}

    renderMeesages=()=>{
      return this.state.messages.map(message=><EachMessage message={message} currentUser={this.props.currentUser} />)
    }



    messagetext = (e) => {
      this.setState({message:e.target.value})
    }

    submit = (e) => {
      this.setState({message: ''})
      fetch("https://handy-dandy-app.herokuapp.com/user_messages",{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization': `${localStorage.token}`
        },
        body: JSON.stringify({
          user_id: this.props.currentUser.id,
          message_id: this.props.messageBox.id,
          text: this.state.message
        })
      })
      .then(res => res.json())
      .then(data => {
        this.setState({messages: [...this.state.messages , data]})
      })

    }



  render() {
    return (
      <div className="messageSender">
        {this.renderMeesages()}
        <div className="inputForMessage">
        <input type='text' value={this.state.message} onChange={this.messagetext} />
        <button className="glow-on-hover" type="button" onClick={this.submit}>Send</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(ShowMessages);
