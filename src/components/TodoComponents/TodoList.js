import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <h1>To-Do List</h1>
      {props.todoArray.map(el => (
        <Todo todoItem={el} toggleTask={props.toggleTask} key={el.id}/>
      ))}
    </div>
  );
};

export default TodoList;
