import React, { Component } from "react";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      changedId: 0
    };
  }

  componentDidMount() {
    // run once
    // do API calls
  }

  componentWillReceiveProps(nextProps) {
    // run when parent passes props or updates props
    // can check the props and change component properties
    // deprecated
  }

  shouldComponentUpdate(nextProps, nextProps) {
    // return true to update
    // return false to not-update
  }

  componentWillUnmount() {
    // to do cleanup 
    // eg. remove event listener
  }

  getDerivedStateFromProps(props, state) {
    // return new updated state based on the props
  }

  getSnapshotBeforeUpdate() {
    // can be used to create backup before update
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
