import React, { Component } from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./App.scss";

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
      task: "",
      id: "",
      completed: ""
    };
  }

  saveStateToLocalStorage = () => {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  };

  hydrateStateWithLocalStorage = () => {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  };

  componentDidMount = () => {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  };

  addTo = e => {
    e.preventDefault();

    let newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => {
      return{
        todoArray: [...prevState.todoArray, newItem]
      }
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleTask = id => {
    this.setState(prevState => {
      return {
        todoArray: prevState.todoArray.map(todoItem => {
          if (todoItem.id === id) {
            return {
              ...todoItem,
              completed: !todoItem.completed
            };
          } else {
            return todoItem;
          }
        })
      };
    });
  };

  clearCompleted = e => {
    e.preventDefault();

    this.setState(prevState => {
      return {
        todoArray: prevState.todoArray.filter(todoItem => !todoItem.completed)
      };
    });
  };

  render() {
    return (
      <div className="app">
        <TodoList
          todoArray={this.state.todoArray}
          toggleTask={this.toggleTask}
        />
        <TodoForm
          handleChange={this.handleChange}
          addTo={this.addTo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
