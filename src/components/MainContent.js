import React, { Component } from "react";
import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";
import Joke from "./Joke";

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
    return (
      <React.Fragment>
        {/* <h1 style= { {color: "#ffcc00", backgroundColor: "blue"} }>Good {`${timeOfDay} ${firstName} ${lastName}`}</h1> */}
        <h1 style={styles}>Good {`${timeOfDay} ${firstName} ${lastName}`}</h1>
        {/* <div className = "todo-list">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        </div> */}
        <ContactCard
          contact={{
            name: "Mr. Sheldon",
            imgUrl: "http://placekitten.com/300/200",
            phone: "1234567",
            email: "mrsheldon@email.com"
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. Howard",
            imgUrl: "http://placekitten.com/400/200",
            phone: "12345656",
            email: "mrhoward@email.com"
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. Leonard",
            imgUrl: "http://placekitten.com/100/300",
            phone: "12345656",
            email: "mrleonard@email.com"
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. Raj",
            imgUrl: "http://placekitten.com/300/400",
            phone: "12345656",
            email: "mrraj@email.com"
          }}
        />
        <Joke
          joke={{
            answer: "That is funny"
          }}
        />
        <Joke
          joke={{
            question: "What is your age?",
            answer: "That is funny too"
          }}
        />
      </React.Fragment>
    );
  }
}

export default MainContent;
