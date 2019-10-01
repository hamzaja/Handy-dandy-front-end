import React from 'react';

class ShowUserNames extends React.Component {

  showUserNames = () => {
    return this.props.allusers.map(user => <ShowUserNames/>)
  }

  render() {
    const {first_name,last_name} = this.props.user
    return (
      <div className="each-message-person-name" onClick={()=>this.props.userToChatWith(this.props.user) } >
      {first_name.toUpperCase()} { last_name.toUpperCase()}
      <hr/>
      </div>
    )
  }
}


export default ShowUserNames;
