import React from 'react';

class RenderFollowedUsers extends React.Component {

  state = {
    user:[]
  }


  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.userId}`, {
      headers: {
        "Authorization":`${localStorage.token}`
      }
    }).then(res => res.json())
    .then(user => this.setState({user}))
  }

  render() {
    const {username} = this.state.user
    return (
      <div >
        <p> username: {username} </p>
      </div>
    )
  }
}


export default RenderFollowedUsers;
