import React from 'react';
import EachUserSkills from './eachuserskills'

class RenderUsers extends React.Component {

  state={
    profile: false
  }

  renderSkills = () => {
    return this.props.user.skills.map((skill, index) => <EachUserSkills skillInfo={this.skillInfo} key={index} skill={skill} />)
  }

  skillInfo = (info) => {
    console.log(info)
  }

  render() {
    return (
      <div>
      <h1>{this.props.user.username} </h1>
      {this.renderSkills()}
      <button className="glow-on-hover" type="button"  onClick={()=> this.props.profile(this.props.user)}>view profile  </button>
      </div>
    )
  }
}


export default RenderUsers;
