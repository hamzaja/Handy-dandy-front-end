import React from 'react';

class SignUpPage extends React.Component {
  state={
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
    fetch('http://localhost:3000/signup',{
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
        this.props.history.push('/profile')
      }
    })
  }



  render() {
    return (
      <form onChange={this.onChange} onSubmit={this.submit}>
      signup<br/>
      first_name<input value={this.state.first_name} type="text" name="first_name"/><br/>
      last_name<input value={this.state.last_name} type="text" name="last_name"/><br/>
      username<input value={this.state.username} type="text" name="username"/><br/>
      email<input value={this.state.email} type="text" name="email"/><br/>
      password<input value={this.state.password} type="text" name="password"/><br/>
      avalability<input value={this.state.avalability} type="text" name="avalability"/><br/>
      <input type="submit" />
      </form>
    )
  }
}

export default SignUpPage;
