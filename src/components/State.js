import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes"
    };
  }

  render() {
    return (
      <div>
        <h1>Is state important to know?</h1>
        <h1>{this.state.answer}</h1>
      </div>
    );
  }
}

export default State;