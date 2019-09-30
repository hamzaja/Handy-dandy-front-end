import React from 'react';
import Skill from './skill'
import SkillExperience from './skillexperience'
import {connect} from 'react-redux'

class AllSkill extends React.Component {

  state={
    userskills: [],
    next: true,
    user: [],
    makeANewSkill:false,
    newSkill:''
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

 makeANewSkill = () => {
   this.setState({makeANewSkill:true})
 }

 addNewSkill = (e) => {
   this.setState({newSkill:e.target.value})
 }

 submit = () => {
   fetch("http://localhost:3000/skills",{
     method:'POST',
     headers: {
       'Authorization': `${localStorage.token}`,
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     body: JSON.stringify({
       name: this.state.newSkill
     })
   })
   .then(res => res.json())
   .then(skill => {
     this.setState({ makeANewSkill:false })
     this.props.addSkillsToReducer(skill)
   })
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
        {!this.state.makeANewSkill?
        <button class="glow-on-hover" type="button"  onClick={this.makeANewSkill}>Not listed?</button>
      :
      <div>
        <input type='text' value={this.state.newSkill} onChange={this.addNewSkill} />
        <button class="glow-on-hover" type="button" onClick={this.submit}>Add</button>
      </div>
    }
        {(this.state.userskills.length!==0)?
          <button class="glow-on-hover" type="button"  onClick={this.nextClicked}>next</button>
          :
          <p><button class="glow-on-hover" type="button"  onClick={this.noSkillClicked}>Continue Without any skill</button></p>
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

  const mapDispatchToProps = (dispatch) => {
    return {
      addSkillsToReducer: (skill) => {dispatch({type : "addskill",  payload:skill })}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AllSkill);
