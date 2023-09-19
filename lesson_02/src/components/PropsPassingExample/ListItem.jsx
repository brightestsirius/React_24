import React, { Component } from "react";

import Button from "./Button";

export default class ListItem extends Component {
  render() {
    let { item, handleItemDelete } = this.props;

    return (
      <li>
        {item} <Button text={"Delete"} clickAction={handleItemDelete} />
      </li>
    );
  }
}
