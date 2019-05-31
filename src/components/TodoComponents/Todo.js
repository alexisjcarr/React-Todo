import React from "react";
import "./Todo.scss";

const Todo = props => {
  return (
    <div
      className={`todo${props.todoItem.completed ? " completed" : ""}`}
      onClick={() => props.toggleTask(props.todoItem.id)}
    >
      <p className="text">{props.todoItem.task}</p>
    </div>
  );
};

export default Todo;
