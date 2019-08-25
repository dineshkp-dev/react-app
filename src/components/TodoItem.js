import React, { Component } from "react";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      changedId: 0
    };
  }

  render(props) {
    console.log(this.props);
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={e => this.props.handleChange(this.props.todo.id)}
        />
        <p>{this.props.todo.text}</p>
        <br />
      </div>
    );
  }
}

export default TodoItem;
