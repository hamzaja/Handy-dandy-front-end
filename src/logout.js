import React from 'react';

class Logout extends React.Component {

  click = ( ) => {
    localStorage.clear()
    this.props.history.push('/')
    // <div className='log-out-div'>
    // <button  onClick={this.click}>logout</button>
    // </div>
  }

  render() {
    return (
      <div className='log-out-div' onClick={this.click}>
        <div ontouchstart="">
          <div class="button">
            <a href="#">Log Out</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Logout;
