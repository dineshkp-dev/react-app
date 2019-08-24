import React, { Component } from "react";
import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import todosData from './todosData';

class MainContent extends Component {
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

    let todosComponents = todosData.map(todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />);

    return (
      <React.Fragment>
        {/* <h1 style= { {color: "#ffcc00", backgroundColor: "blue"} }>Good {`${timeOfDay} ${firstName} ${lastName}`}</h1> */}
        <h1 style={styles}>Good {`${timeOfDay} ${firstName} ${lastName}`}</h1>
        <div className="todo-list">
            {todosComponents}
        </div>
      </React.Fragment>
    );
  }
}

export default MainContent;
