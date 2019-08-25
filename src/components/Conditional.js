import React, { Component } from "react";

class Conditional extends Component {
  constructor(props) {
    super();
  }
  render(props) {
    console.log(this.props.isLoading);

    return (
      <React.Fragment>
        {/* Depending on where the checking logic is required the parent may have this check */}
        {this.props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff</h1>}
        <h1>test</h1>
      </React.Fragment>
    );
  }
}

export default Conditional;
