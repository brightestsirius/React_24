import React, { Component } from "react";
import List from "./List";

export default class LifecycleExample extends Component {
  componentDidMount() {
    setTimeout(() => {
        this.setState({showListComponent: false})
    }, 2000);
  }

  state = {
    showListComponent: true,
  };

  render() {
    let { showListComponent } = this.state;
    return <>{showListComponent && <List />}</>;
  }
}
