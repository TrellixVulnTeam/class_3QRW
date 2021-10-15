import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("construction du composant");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log(" we did an update ");
  }

  render() {
    return (
      <p>
        {this.state.count}
        <br />
        hi bros !!
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {" "}
          ADD
        </button>
      </p>
    );
  }

  componentWillUnmount() {
    console.log("no one is helping ");
  }
}
