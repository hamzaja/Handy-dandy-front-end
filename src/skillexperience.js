import React from 'react';
import AddExperience from './addexperience';


class SkillExperience extends React.Component {

  state={
    index: 0,
    allSkillsDone: false
  }


  nextIndex = () => {
    console.log(this.state.index ,this.props.skills.length )
    if (this.state.index < this.props.skills.length-1){
      this.setState({index : this.state.index+1})
    }
    else( this.setState({allSkillsDone:true}) )
  }

  doneWithSignup = () => {
    this.props.history.push('./profile')
  }

  render() {
    return (
      <div>
      <AddExperience skill={this.props.skills[this.state.index]} user={this.props.user} />
      {
      this.state.allSkillsDone ?

        <button onClick={this.doneWithSignup}>Done</button>
        :
        <button onClick={this.nextIndex}>Next</button>
      }
      </div>
    )
  }
}


export default SkillExperience;
