import React from 'react';
import HomePage from './homePage'
import Profile from './profile'
import { Switch, Route, withRouter } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path={'/profile'} component={Profile}/>
        <Route path={'/'} component={HomePage}/>
      </Switch>
    )
  }
}

export default withRouter(App);
