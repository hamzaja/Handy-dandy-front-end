import React from 'react';

class RenderUsers extends React.Component {

  render() {
    return (
      <div>
        <p onClick={()=>this.props.skillInfo(this.props.skill)}>Skill: {this.props.skill.name} </p>
      </div>
    )
  }
}


export default RenderUsers;
