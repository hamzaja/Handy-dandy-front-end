import React from 'react';
import Logout from './logout'
import AllUsers from './profile/allusers'
import {connect} from 'react-redux'

class Profile extends React.Component {
  state={
    user: null
  }

componentDidMount() {
  if (localStorage.token) {
    fetch('http://localhost:3000/profile',{
      headers: {
      'Authorization': `${localStorage.token}`
  }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({user: user})
      this.props.addCurrentUser(this.state.user)
    })
  }
  else {
    this.props.history.push('/finish-sign-up')
  }
}

  render() {
    return (
      <div>
        <Logout history={this.props.history} />
        profile
        <AllUsers/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addCurrentUser: (userInfo) => {dispatch({type: "currentUser" , payload:userInfo})}
  }
}

export default connect(null , mapDispatchToProps)(Profile);
