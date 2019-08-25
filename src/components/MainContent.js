import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import HandleEvents from "./HandleEvents";
import ChangeState from "./ChangeState";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Changed parent", id);
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      }
    });
  }

  render() {
    const firstName = "Bob";
    const lastName = "Ziroli";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay = "Day";
    const styles = { color: "#ffcc00", backgroundColor: "blue" };
    if (hours > 17) {
      timeOfDay = "Night";
      styles.color = "Red";
    }

    let todosComponents = this.state.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
    ));

    return (
      <React.Fragment>
        {/* <h1 style= { {color: "#ffcc00", backgroundColor: "blue"} }>Good {`${timeOfDay} ${firstName} ${lastName}`}</h1> */}
        <br />
        {/* <LoginStatus/> */}

        <h1 style={styles}>Good {`${timeOfDay} ${firstName} ${lastName}`}</h1>
        <div className="todo-list">{todosComponents}</div>

        {/* <ChangeState /> */}
      </React.Fragment>
    );
  }
}

export default MainContent;
