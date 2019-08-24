import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <p>Placeholder text</p>
        <br />
      </div>
    );
  }
}

export default TodoItem;
