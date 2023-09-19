import React, { Component } from "react";

import ListItem from './ListItem'

export default class PropsPassingExample extends Component {
  state = {
    list: [`cat`, `dog`, `lion`],
  };

  handleItemDelete(index){
    this.setState(actualState => ({
        list: actualState.list.filter((item,i) => i !== index)
    }), () => {
        console.log(this.state.list);
    })
  }

  render() {
    let { list } = this.state;

    return list.length ? (
      <ul>
        {list.map((item, index) => (
          <ListItem key={index} item={item} handleItemDelete={() => this.handleItemDelete(index)} />
        ))}
      </ul>
    ) : null;
  }
}
