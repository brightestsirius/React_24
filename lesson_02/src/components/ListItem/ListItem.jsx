import React, { PureComponent } from 'react'

import Button from './../Button/Button'

export default class ListItem extends PureComponent {

  componentDidMount(){
    console.log(`in componentDidMount ListItem`);
  }

  componentDidUpdate(){
    console.log(`in componentDidUpdate ListItem`);
  }

  componentWillUnmount(){
    console.log(`in componentWillUnmount ListItem`);
  }

  render() {
    let {item} = this.props;
    return (
        <li>{item} <Button text={"Delete"} /></li>
    )
  }
}