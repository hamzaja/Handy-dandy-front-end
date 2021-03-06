import React, { Component } from 'react';

class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
    e.target.reset()
    fetch('https://handy-dandy-app.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.token = data.token
        this.props.history.push('/profile')
      }
    })
  }

  render() {
    return (
      <div class="login">
        <h1>Log in please!</h1>
        <form onSubmit={this.handleSubmit}>
        Username :  <input onChange={this.handleChange} value={this.state.username} type="text" name="username"/><br/>
        Password :  <input onChange={this.handleChange} value={this.state.password} type="text" name="password"/><br/>
          <input type="submit" value="Log in"/>
        </form>
      </div>
    );
  }
}

export default LoginPage;
