import "./App.css";
import React, { Component } from 'react';
import {value} from "../seedData"
import HelloWorld from "./HelloWorld"
import TodoList from "./TodoList"
class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <TodoList title="home todos" todos={value} />
        
        {/* <TodoList title="work todos" todos={["javascript", "ruby"]} /> */}
      </div>
    );
  }
}




export default App;
