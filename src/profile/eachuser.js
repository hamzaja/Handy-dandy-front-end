import React from 'react';

class RenderUsers extends React.Component {

  render() {
    console.log(this.props.user.username)
    return (
      <div>
      <p>  Each User {this.props.user.username} </p>
      </div>
    )
  }
}


export default RenderUsers;
