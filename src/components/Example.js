import React, { Component } from "react";

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "React",
    };
  }
  render() {
    return (
      <div>
        {this.state.name}
        haal
      </div>
    );
  }
}
