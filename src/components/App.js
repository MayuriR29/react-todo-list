import React, { Component } from "react";
import "./App.css";
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
const Todo = props => {
  return <li>{props.liValue}</li>;
};
const TodoList = props => {
  return (
    <div>
      <Title name={props.title} />
      <ul>
        {props.todos.map((todo, index) => {
          return <Todo key={index} liValue={todo} />;
        })}
      </ul>
    </div>
  );
};
const Title = props => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default App;
