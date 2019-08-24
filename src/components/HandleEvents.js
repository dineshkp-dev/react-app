import React, { Component } from "react";

class HandleEvents extends Component {

  render() {
    function clickHandler(e) {
        console.log('Clicked');
    }
   return (
      <div>
        <img src="https://www.fillmurray.com/200/100" />
        <br />
        <br />
        <button onClick={clickHandler}>Click me</button>
      </div>
    );
  }
}

export default HandleEvents;
