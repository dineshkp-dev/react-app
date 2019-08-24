import React, { Component } from "react";

class TodoItem extends Component {

  render(props) {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.completed} onChange={()=> console.log("Changed.")}/>
        <p>{this.props.text}</p>
        <br />
      </div>
    );
  }
}

export default TodoItem;
