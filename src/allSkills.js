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
  noSkillClicked = () => {
    this.props.history.push('./profile')
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
      <div class= "allSkills" >
        <h1>please select all the skills you have</h1>
        <p>{renderSkill}</p>
        {(this.state.userskills.length!==0)?
          <button class="glow-on-hover" type="button"  onClick={this.nextClicked}>next</button>
          :
          <button class="glow-on-hover" type="button"  onClick={this.noSkillClicked}>Continue Without any skill</button>
        }
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
