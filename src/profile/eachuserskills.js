import React from 'react';


class RenderUsers extends React.Component {

  state={
    user:[]
  }

  componentDidMount(){
    fetch(`http://localhost:3000/user_skills/${this.props.skill.id}`,{
      headers: {
        'Authorization': `${localStorage.token}`
      }
    })
    .then(res => res.json())
    // .then(console.log)
    .then(userSkills => userSkills.map(userskill => {
        if (userskill.user_id == this.props.user_id){
          this.setState({user:[...this.state.user , userskill]})
        }
      })
    )
  }

  render() {
    console.log(this.state.user)
    return (
      <div onClick={()=>this.props.skillInfo(this.props.skill)}>
        <p>
          <strong>Skill:</strong>  {this.props.skill.name}
           <strong> 🛠 Experience:</strong>{this.state.user[0]? this.state.user[0].experience :null }
           <strong> 💰 Rate/hour: </strong> {this.state.user[0]? this.state.user[0].hourly_price :null }
        </p>
      </div>
    )
  }
}


export default RenderUsers;
