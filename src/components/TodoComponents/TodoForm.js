import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addTo}>
      <input placeholder="...todo" 
        value={props.value} 
        type="text"
        onChange={props.handleChange}        
        name="task"
        />

      <button type="submit">Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;


