import React from 'react';

class RenderFollowedUsers extends React.Component {

  state = {
    user:[]
  }


  componentDidMount(){
    fetch(`https://handy-dandy-app.herokuapp.com/users/${this.props.userId}`, {
      headers: {
        "Authorization":`${localStorage.token}`
      }
    }).then(res => res.json())
    .then(user => this.setState({user}))
  }

  render() {
    const {username , first_name , last_name, avalability} = this.state.user
    return (
      <div className="connectionsDiv" >
        <p> First Name: {first_name} </p>
        <p> Last Name: {last_name} </p>
        <p> Username:{username}</p>
        <p>Avalability:{avalability}</p>
        <hr/>
      </div>
    )
  }
}


export default RenderFollowedUsers;
