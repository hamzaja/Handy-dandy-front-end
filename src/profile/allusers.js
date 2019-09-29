import React from 'react';
import RenderUsers from './renderusers'

class AllUsers extends React.Component {

  state={
    allusers:[]
  }

  componentDidMount(){
    fetch("http://localhost:3000/users",{
      headers:{
        'Authorization': `${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(allusers => {
      this.setState({allusers})
    })
  }

  render() {

    return (
      <div>
      <RenderUsers allusers={this.state.allusers}/>
      </div>
    )
  }
}


export default AllUsers;
