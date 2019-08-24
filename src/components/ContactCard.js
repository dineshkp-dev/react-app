import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="contact-card">
        <img src={this.props.imgUrl} />
        <h3>{this.props.name}</h3>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.email}</p>
      </div>
    );
  }
}

export default ContactCard;
