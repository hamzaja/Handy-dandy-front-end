import React from 'react';
import EachUserSkills from './eachuserskills'

class RenderUsers extends React.Component {

  state={
    profile: false
  }

  renderSkills = () => {
    return this.props.user.skills.map((skill, index) => <EachUserSkills
     skillInfo={this.skillInfo}
     key={index}
     skill={skill}
     user_id={this.props.user.id} />)
  }

  skillInfo = (info) => {
    console.log(info)
  }

  render() {
    const {username,first_name,last_name, avalability} = this.props.user
    return (
      <div className="eachPersonOnHomePage">
        <h1>{username} </h1>
        <p>Name: {first_name} {last_name}</p>
        <p>Avalability : {avalability}</p>
        {this.renderSkills()}
        <button className="glow-on-hover" type="button"  onClick={()=> this.props.profile(this.props.user)}>view profile  </button>
      </div>
    )
  }
}


export default RenderUsers;
