import React from 'react';
import EachUserSkills from './eachuserskills'
import {connect} from 'react-redux'

class RenderUsers extends React.Component {

  state={
    skill: [],
    time:'',
    date:'',
    connection:false
  }


  componentDidMount(){
    this.props.currentUser.followed_users.map( connection => {
      if (connection.followee_id === this.props.user.id){
        this.setState({connection:true})
      }
    })
  }

  renderSkills = () => {
    return this.props.user.skills.map(skill => <EachUserSkills
       skill={skill}
       skillInfo={this.skillInfo}
       user_id={this.props.user.id} />)
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

  addConnection=()=>{
    fetch("http://localhost:3000/connections",{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${localStorage.token}`
      },
      body: JSON.stringify({
        'follower_id': this.props.currentUser.id,
        'followee_id': this.props.user.id,
      })
    }).then(res => res.json())
    .then(connection => {
      this.setState({connection:true})
    })
    }



  render() {
    return (
      <div className="userShowPageDiv">
      <p><strong>Username: </strong>{this.props.user.username} </p><hr/>
      <p><strong>Last Name:</strong> {this.props.user.last_name} </p>
      <p><strong>First Name</strong>: {this.props.user.first_name} </p>
      <p><strong>Avalability:</strong> {this.props.user.avalability} </p>
      {!this.state.connection?
        <button onClick={this.addConnection} className="glow-on-hover" type="button">Add {this.props.user.first_name} as connection </button>
        :
        <p>{this.props.user.first_name} is a connection</p>
      }
      <button onClick={this.props.backButton} className="glow-on-hover" type="button">Send {this.props.user.first_name} a messages</button>

      {this.renderSkills()}
      {
        (this.state.skill.length!==0)?
        <form className="formfordateandtime" onChange={this.onChange} onSubmit={this.makeABooking}>
          <input type='time' name='time'/>
          <input type='date' name='date'/>
          <input type="submit" value='Book User'/>
        </form>
        :
        <div>
        <h2>please Click on a skill you need help with and hire this person...</h2  >
        <button onClick={this.props.backButton} className="glow-on-hover goback" type="button">Or Go Back </button>
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
const mapDispatchToProps = (dispatch) => {
  return {
    bookings: (bookings) => {dispatch({type : "bookings",  payload:bookings })}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(RenderUsers);
