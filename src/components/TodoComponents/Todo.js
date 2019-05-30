import React from "react";
import "./Todo.scss";

const Todo = props => {
  return (
    <div
      className={`todo${props.todoItem.completed ? " completed" : ""}`}
      onClick={() => props.toggleTask(props.todoItem.id)}
    >
      {props.todoItem.task}
    </div>
  );
};

export default Todo;
