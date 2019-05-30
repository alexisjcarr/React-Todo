import React, { Component } from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoArray: todo,
      task: '',
      id: '',
      completed: ''
    };
  }

  addTo = e => {
    e.preventDefault();

    const newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoArray: [...this.state.todoArray, newItem],
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <TodoList todoArray={this.state.todoArray} />
        <TodoForm handleChange={this.handleChange} addTo={this.addTo}/>
      </div>
    );
  }
}

export default App;
