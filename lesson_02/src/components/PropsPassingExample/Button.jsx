import React, { Component } from "react";

export default class Button extends Component {
  render() {
    let { text, clickAction } = this.props;

    return <button onClick={clickAction}>{text}</button>;
  }
}
