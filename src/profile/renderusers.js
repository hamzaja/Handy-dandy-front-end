import React from 'react';
import EachUser from './eachuser'

class RenderUsers extends React.Component {

  // state={
  //   users: this.props.allusers
  // }

  // renderUsers = () => {
  //   let users = []
  //   setInterval( () => {
  //     users = []
  //     for (let i=0 ; i<4; i++){
  //       users.push(this.props.allusers[Math.floor(Math.random() * this.props.allusers.length)])
  //       this.abc(users)
  //     }}, 6000); }
  //
  //   abc = (users) => {
  //     console.log(users)
  //   return users.map(user => <EachUser user={user} key ={user.id} profile={this.props.profile}/>)
  // }

  // componentDidMount(){
  //   let users = []
  //   setInterval( () => {
  //     for (let i=0 ; i<4; i++){
  //       users.push(this.props.allusers[Math.floor(Math.random() * (this.props.allusers.length-1))])}
  //       if(users.length>4){
  //         this.setState({users})
  //       }
  //     }, 6000); }
  //
  //     renderUsers = () => {
  //     return this.state.users.map(user => <EachUser user={user} key ={user.id} profile={this.props.profile}/>)
  //   }

  renderUsers = () => {
    return this.props.allusers.map(user => <
      EachUser
      user={user}
      key ={user.id}
      profile={this.props.profile}
      
      /> )
  }

  //
  // renderUsers = () => {
  //   let users = []
  //   let abc
  //   let randomNumber
  //   if (this.props.allusers.length>0){
  //      setInterval( () => {
  //        users = []
  //        for (let i=0 ; i<=4; i++){
  //          randomNumber = Math.floor(Math.random() * (this.props.allusers.length-1))
  //          abc = this.props.allusers[randomNumber]
  //          users.push(abc)
  //          if(users.length>4){
  //            this.setState({users})
  //          }
  //        }
  //      }, 10000 )
  //   }
  //   return this.state.users.map(user => <
  //     EachUser
  //     user={user}
  //     key ={user.id}
  //     profile={this.props.profile}
  //     /> )
  // }


  render() {
    return (
      <div className='AllUsersOnProfilePage'>
      {this.renderUsers()}
      </div>
    )
  }
}


export default RenderUsers;
