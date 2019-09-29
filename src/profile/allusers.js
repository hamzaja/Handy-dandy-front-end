import React from 'react';
import RenderUsers from './renderusers'
import UserProfile from './userprofile'

class AllUsers extends React.Component {

  state={
    allusers:[],
    profile: false,
    user:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/users",{
      headers:{
        'Authorization': `${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(allusers => {
      this.setState({allusers})
    })
  }

  profile = (user) => {
    this.setState({profile:true, user: user})
  }
  allusers = () => {
    this.setState({profile:false})
  }

  render() {
    console.log(this.state.user)
    return (

    !this.state.profile?
      <div>
      <RenderUsers allusers={this.state.allusers} profile={this.profile} />
      </div>
      :
      <div>
      <UserProfile user={this.state.user} allusers={this.allusers} />
      </div>
    )
  }
}


export default AllUsers;
