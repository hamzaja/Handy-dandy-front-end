import React from 'react';
import RenderUsers from './renderusers'
import UserProfile from './userprofile'
import {connect} from 'react-redux'

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
      allusers.map(user => {
        if (this.props.currentUser.id !== user.id){
          this.setState({allusers: [...this.state.allusers ,  user]})
        }
      })
    })
  }

  profile = (user) => {
    this.setState({profile:true, user: user})
  }
  allusers = () => {
    this.setState({profile:false})
  }

  render() {
    return (

    !this.state.profile?
      <div>
      <RenderUsers allusers={this.state.allusers} profile={this.profile} history={this.props.history} />
      </div>
      :
      <div>
      <UserProfile user={this.state.user} allusers={this.allusers} backButton={this.allusers}  />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(AllUsers);
