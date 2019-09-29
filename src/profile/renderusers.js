import React from 'react';
import EachUser from './eachuser'

class RenderUsers extends React.Component {

  renderUsers = () => {
    console.log(this.props.allusers)
    return this.props.allusers.map(user => <
      EachUser
      user={user}
      key ={user.id}
      profile={this.props.profile}
      /> )
  }

  render() {
    console.log(this.props.allusers)
    return (
      <div>
      {this.renderUsers()}
        sdasd
      </div>
    )
  }
}


export default RenderUsers;
