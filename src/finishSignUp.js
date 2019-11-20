import React from 'react';
import AllSkills from './allSkills'
import {connect} from 'react-redux'


class App extends React.Component {

  state={
    skills: []
  }

  componentDidMount(){
    fetch('https://handy-dandy-app.herokuapp.com/skills',{
      headers: {
        'Authorization': `${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(skills => {
      this.setState({skills})
      this.props.addSkillsToReducer(skills)

  })
  }

  render() {
    return (
      <div>
        <AllSkills history={this.props.history} everyskill={this.state.skills}/>
      </div>
    )
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      addSkillsToReducer: (skill) => {dispatch({type : "allSkills",  payload:skill })}
    }
  }
export default connect(null, mapDispatchToProps)(App);
