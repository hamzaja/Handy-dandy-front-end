import React from 'react'
import LoginPage from './loginpage'
import SignUpPage from './signUpPage'

class HomePage extends React.Component {

  render() {
    return (
      <div>
      <LoginPage history={this.props.history} />
      <SignUpPage history={this.props.history}/>
      </div>
    )
  }
}

export default HomePage;
