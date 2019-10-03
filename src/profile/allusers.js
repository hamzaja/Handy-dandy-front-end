import React from 'react';
import RenderUsers from './renderusers'
import UserProfile from './userprofile'
import {connect} from 'react-redux'

class AllUsers extends React.Component {

  state={
    allusers:[],
    copiedArray:[],
    profile: false,
    user:[],
    search:'Search here for users with perticular skills'
  }

  componentDidMount(){
    this.props.removeusers()
    fetch("http://localhost:3000/users",{
      headers:{
        'Authorization': `${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(allusers => {
      allusers.map(user => {
        if (this.props.currentUser.id !== user.id){
            this.props.addallusers(user)
            this.setState({allusers: [...this.state.allusers ,  user]})
            this.setState({copiedArray: [...this.state.copiedArray ,  user]})
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
  searchBarClicked = () => {
    this.setState({search:''})
  }
  filter = (e) => {
    this.setState({search:e.target.value})
    this.setState({copiedArray:this.state.allusers.filter(user => ((user.skills.filter(skill=>skill.name.includes(e.target.value))).length) > 0 ? true : false)})
  }

  render() {
    return (

    !this.state.profile?
      <div className="AllUsersOnHomePage">
        <div className="searchbar">
          <input type='text' value={this.state.search} onChange={this.filter} onClick={this.searchBarClicked} />
        </div>
        <RenderUsers
         allusers={this.state.copiedArray}
         profile={this.profile}
         history={this.props.history} />
      </div>
      :
      <div className="UserProfileDiv">
      <UserProfile
      user={this.state.user}
      allusers={this.allusers}
      backButton={this.allusers}  />
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser,
  allUsersFromReducers: state.allUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addallusers: (user) => {dispatch({type : "allusers",  payload:user })},
    removeusers: (user) =>{dispatch({type:"removeusers", payload:user })}
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(AllUsers);
