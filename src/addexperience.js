import React from 'react';


class AddExperience extends React.Component {

  state={
    experience: ''
  }

  experience = (e) => {
    this.setState({experience: e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/user_skills",{
      method:'POST',
      headers: {
        "Content-Type": 'application/json',
        'Accept': 'application/json',
        'Authorization': `${localStorage.token}`
      },
      body: JSON.stringify(
        {
          user_id: this.props.user.id,
          skill_id: this.props.skill.id,
          experience: this.state.experience
        })
    })
  }

  render() {
    console.log(this.props , this.state.experience )
    return (
      <div>
      {this.props.skill.name}
      <p>please tell us how much experience you got in {this.props.skill.name}</p>
      <form onSubmit={this.submit}>
      <input type='text' value={this.state.experience} onChange={this.experience} />
      <input type='submit'/>
      </form>
      </div>
    )
  }
}


export default AddExperience;
