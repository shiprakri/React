import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

  state = {
    name: "Shipra"
  }

  changeName = ()=>{
    this.setState({
      name: "Simran"
    })
  }

  render() {
    return (
      <div>
         <Child name={this.state.name} changeName={this.changeName}/>
      </div>
    );
  }
}
export default Parent;