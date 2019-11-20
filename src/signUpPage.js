import React from 'react';
import {connect} from 'react-redux'

class SignUpPage extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    avalability: ''
  }


  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    e.target.reset()
    fetch('https://handy-dandy-app.herokuapp.com/signup',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        console.log(data, this.props)
        localStorage.token = data.token
        this.props.history.push('/finish-sign-up')

        fetch('https://handy-dandy-app.herokuapp.com/profile',{
          headers: {
          'Authorization': `${localStorage.token}`
      }
        })
        .then(res => res.json())
        .then(user => {
          this.props.addCurrentUser(user)
        })
      }

    })
  }



  render() {
    return (
      <div class = 'signup'>
      <form onChange={this.onChange} onSubmit={this.submit} >
      <h1>Sign up</h1>
      First name : <input value={this.state.first_name} type="text" name="first_name"/><br/>
      Last name : <input value={this.state.last_name} type="text" name="last_name"/><br/>
      Username : <input value={this.state.username} type="text" name="username"/><br/>
      Email : <input value={this.state.email} type="text" name="email"/><br/>
      Password : <input value={this.state.password} type="text" name="password"/><br/>
      Avalability : <input value={this.state.avalability} type="text" name="avalability"/><br/>
      <input type="submit" />
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addCurrentUser: (userInfo) => {dispatch({type: "currentUser" , payload:userInfo})}
  }
}


export default connect(null, mapDispatchToProps)(SignUpPage);
