import React from 'react';
const Todo = props => {
  console.log('in Todo',props)
   
    return <li id={props.value.isCompleted?"done":""}>{props.value.name}</li>;
  };
export default Todo;