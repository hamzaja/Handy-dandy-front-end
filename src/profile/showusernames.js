import React from 'react';

class ShowUserNames extends React.Component {

  showUserNames = () => {
    return this.props.allusers.map(user => <ShowUserNames/>)
  }

  render() {
    console.log(this.props.user.first_name)
    return (
      <div onClick={()=>this.props.userToChatWith(this.props.user)} >
      {this.props.user.first_name}<br/>
      </div>
    )
  }
}


export default ShowUserNames;
