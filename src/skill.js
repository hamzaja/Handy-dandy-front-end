import React from 'react';


class Skill extends React.Component {

  render() {
    const {skill} = this.props
    return (
      <div onClick={() => this.props.userskills(this.props.skill)}>
        {skill.name}
      </div>
    )
  }
}


export default Skill;
