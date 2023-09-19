import React, { Component } from "react";

import List from "./components/List/List";

export default class App extends Component {
  state = {
    animals: [`cat`, `dog`, `lion`],
    color: `orange`,
    showListComponent: true
  };

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState((actualState) => ({
    //     animals: [...actualState.animals, `tiger`]
    //   }))
    // }, 2000)

    setTimeout(() => {
      this.setState({showListComponent: false})
    }, 3000)
  }

  render() {
    let {showListComponent, animals, color} = this.state;

    return (
      <>
        {showListComponent && <List list={animals} color={color} />}
      </>
    );
  }
}
