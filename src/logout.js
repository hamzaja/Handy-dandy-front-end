import React from 'react';

class Logout extends React.Component {

  click = ( ) => {
    localStorage.clear()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
      abc
      <button onClick={this.click}>logout</button>
      </div>
    )
  }
}

export default Logout;
