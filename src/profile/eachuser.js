import React from 'react';
import EachUserSkills from './eachuserskills'

class RenderUsers extends React.Component {

  state={
    profile: false
  }

  renderSkills = () => {
    return this.props.user.skills.map(skill => <EachUserSkills skill={skill} />)
  }

  render() {
    return (
      <div>
      <p>Each User {this.props.user.username} </p>
      {this.renderSkills()}
      <button onClick={()=> this.props.profile(this.props.user)}>view profile  </button>
      </div>
    )
  }
}


export default RenderUsers;
