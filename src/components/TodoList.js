import React from "react";
import Title from "./Title"
import Todo from "./Todo"
const TodoList = props => {
  console.log('in Todolist props',props);
  console.log('in Todolist props.todos',props.todos);
  return (
    <div>
      <Title name={props.title} />
      <ul>
        {props.todos.map((eachObject, index) => {
          return <Todo key={index} value={eachObject} />;
        })}
      </ul>
    </div>
  );
};
export default TodoList