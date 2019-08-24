import React, { Component } from "react";

class Joke extends Component {
  render() {
    let question = this.props.question;
    let answer = this.props.answer;

    return (
      <div>
        <div style={{ display: question ? "block" : "none" }}>
          Q: {question}
        </div>
        <div>A: {answer}</div>
      </div>
    );
  }
}

export default Joke;
