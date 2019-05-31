import React from "react";
import "./TodoForm.scss";

const TodoForm = props => {
  return (
    <form onSubmit={props.addTo}>
      <input
        placeholder="...todo"
        value={props.value}
        type="text"
        onChange={props.handleChange}
        name="task"
      />
      <button type="submit">Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
