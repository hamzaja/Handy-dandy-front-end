import React from 'react';
import HomePage from './homePage'
import Profile from './profile'
import { Switch, Route, withRouter } from 'react-router-dom'


class App extends React.Component {
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
      .then(user => this.setState({user: user}))
    } else {
      this.props.history.push('/profile')
    }
}


  render() {
    console.log(this.state.user)
    return (
      <Switch>
        <Route path={'/profile'} component={Profile}/>
        <Route path={'/'} component={HomePage}/>
      </Switch>
    )
  }
}

export default withRouter(App);
