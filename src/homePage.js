import React from 'react'
import LoginPage from './loginpage'
import SignUpPage from './signUpPage'
import IntroPage from './intropage'

class HomePage extends React.Component {

  render() {
    return (
      <div className="HomePage">
        <IntroPage/>
        <LoginPage history={this.props.history} />
        <SignUpPage history={this.props.history}/>
      </div>
    )
  }
}

export default HomePage;
