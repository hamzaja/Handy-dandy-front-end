import React from 'react';
import HomePage from './homePage'
import Profile from './profile'
import FinishSignUp from './finishSignUp'
import { Switch, Route, withRouter } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route path={'/profile'} component={Profile}/>
        <Route path={'/'} component={HomePage}/>
        <Route path={'/finish-sign-up'} component={FinishSignUp}/>
      </Switch>
    )
  }
}

export default withRouter(App);
