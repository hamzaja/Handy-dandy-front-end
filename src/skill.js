import React from 'react';


class Skill extends React.Component {

  state={
    clicked: false
  }
  clicked = () =>{
    this.setState({clicked:true})
    this.props.userskills(this.props.skill)
  }

  render() {
    const {skill} = this.props
    return (
      <div className={!this.state.clicked? "eachSkillsUnclicked" : "eachSkillsclicked"} onClick={this.clicked} >
        {skill.name}
      </div>
    )
  }
}


export default Skill;
