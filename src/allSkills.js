import React from 'react';
import Skill from './skill'
import SkillExperience from './skillexperience'
import {connect} from 'react-redux'

class AllSkill extends React.Component {

  state={
    userskills: [],
    next: true,
    user: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/profile',{
      headers: {
      'Authorization': `${localStorage.token}`
  }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({user: user})
    })
  }

  nextClicked = () => {
    this.setState({next: false})
    }

  click = (skill) => {
    if (!this.state.userskills.includes(skill)) {
      this.setState({userskills: [...this.state.userskills, skill]})
    }
  }

  render() {

    const renderSkill = this.props.allSkills.map(skill => <Skill
      key={skill.name}
      skill={skill}
      userskills={this.click}/>)

    return (
      this.state.next?
      <div>
        <p>please select all the skills you have</p>
        <p>{renderSkill}</p>
        <button onClick={this.nextClicked}>next</button>
      </div>
      :
      <div>
        <SkillExperience  skills={this.state.userskills} user={this.state.user} history={this.props.history}/>
      </div>
    )
  }
}


  const mapStateToProps = (state) => {
    return {
    allSkills: state.allSkills,
    userinfo:state.currentUser
    }
  }

export default connect(mapStateToProps)(AllSkill);
