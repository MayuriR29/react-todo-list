import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList"
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList title="home todos" todos={["Buy Vegetable", "Go gym"]} />
        <TodoList title="work todos" todos={["javascript", "ruby"]} />
      </div>
    );
  }
}




export default App;
