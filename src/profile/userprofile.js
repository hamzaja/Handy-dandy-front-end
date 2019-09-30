import React from 'react';
import EachUserSkills from './eachuserskills'
import {connect} from 'react-redux'

class RenderUsers extends React.Component {

  state={
    skill: [],
    time:'',
    date:''
  }

  renderSkills = () => {
    return this.props.user.skills.map(skill => <EachUserSkills skill={skill} skillInfo={this.skillInfo} />)
  }
  skillInfo=(skill)=>{
    this.setState({skill})
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  makeABooking = (e) => {
    e.preventDefault()
    // fetch("http://localhost:3000/bookings",{
    //   method:'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'Authorization': `${localStorage.token}`
    //   },
    //   body: JSON.stringify({
    //     'other_user_id': this.props.currentUser.id,
    //     'this_user_id': this.props.user.id,
    //     'time': this.state.time,
    //     'date': this.state.date
    //   })
    // })

    fetch("http://localhost:3000/bookings",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${localStorage.token}`
      },
      body: JSON.stringify({
        'this_user_id': this.props.currentUser.id,
        'other_user_id': this.props.user.id,
        'time': this.state.time,
        'date': this.state.date
      })
    }).then(res => res.json())
    .then(window.location.reload())
  }


  render() {
    return (
      <div>
      <p><strong>First Name</strong>: {this.props.user.first_name} </p>
      <p><strong>Last Name:</strong> {this.props.user.last_name} </p>
      <p><strong>Username: </strong>{this.props.user.username} </p>
      <p><strong>Avalability:</strong> {this.props.user.avalability} </p>
      {this.renderSkills()}
      {
        (this.state.skill.length!==0)?
        <form onChange={this.onChange} onSubmit={this.makeABooking}>
          <input type='time' name='time'/>
          <input type='date' name='date'/>
          <input type="submit" value='Book User'/>
        </form>
        :
        <div>
        <h2>please choose a skill you need help with and hire this person...</h2  >
        <button onClick={this.props.backButton} className="glow-on-hover" type="button">Or Go Back </button>
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(RenderUsers);
