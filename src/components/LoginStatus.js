import React, { Component } from "react";

class LoginStatus extends Component {
  constructor() {
    super();
    this.state = {
        loggedIn : true
    }
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.loggedIn ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default LoginStatus;
