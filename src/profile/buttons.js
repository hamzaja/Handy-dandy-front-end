import React from 'react';

class Buttons extends React.Component {


  render() {
    return (
      <div>
        <div onClick={this.props.homePage} className="wrapper1">
          <a className="navigationButtons-a" href="#"><span>Home page</span></a>
        </div>
        <div onClick={this.props.profile} className="wrapper2">
          <a className="navigationButtons-a" href="#"><span>Profile</span></a>
        </div>
        <div onClick={this.props.messages} className="wrapper3">
          <a className="navigationButtons-a" href="#"><span>Messages</span></a>
        </div>
        <div onClick={this.props.connections} className="wrapper4">
          <a className="navigationButtons-a" href="#"><span>Connection</span></a>
        </div>
      </div>
    )
  }
}





export default Buttons;
