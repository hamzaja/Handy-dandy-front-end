import React from 'react';


class AddExperience extends React.Component {

  state={
    experience: '',
    price:''
  }

  experience = (e) => {
    this.setState({experience: e.target.value})
  }
  price = (e) => {
    this.setState({price: e.target.value})
  }

  submit = (e) => {
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
          experience: this.state.experience,
          hourly_price: this.state.price
        })
    })
    .then(res => res.json())
    .then( () =>
      {this.setState({experience:''})
      this.setState({price:''})
      this.props.nextIndex()}
    )
  }

  render() {
    return (
      <div>
      <h1>{this.props.skill.name.toUpperCase()}</h1>
      <p>please tell us how much experience you got in {this.props.skill.name}</p>
      Experience<input type='text' value={this.state.experience} onChange={this.experience} /><br/>
      Hourly/Price<input type='text' value={this.state.price} onChange={this.price} /><br/>
      {(this.props.lastskill.id === this.props.skill.id )?
        <button class="glow-on-hover" type="button" onClick={()=>{return (this.submit() , this.props.done())}}>Done</button>
        :
        <button class="glow-on-hover" type="button" onClick={this.submit}>Next</button>
      }
      </div>
    )
  }
}


export default AddExperience;
