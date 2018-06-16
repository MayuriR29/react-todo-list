import React, { Component } from 'react';
class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      name: 'List of todos'
    };
  }

  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}
export default HelloWorld;