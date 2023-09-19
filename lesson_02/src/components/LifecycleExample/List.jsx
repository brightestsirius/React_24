import React, { Component } from "react";

export default class List extends Component {
  state = {
    list: [`cat`, `dog`, `lion`]
  };

  componentDidMount(){
    const removeItemsInterval = setInterval(() => {
        console.log(`in setInterval`);

        this.setState(actualState => ({
            list: actualState.list.slice(0,-1)
        }), () => {
            console.log(this.state.list);
            !this.state.list.length && clearInterval(removeItemsInterval);
        })
    }, 1000);

    this.setState({removeItemsInterval});
  }

  componentDidUpdate(){
    console.log(`in componentDidUpdate`);
  }

  componentWillUnmount(){
    console.log(`in componentWillUnmount List`);
    clearInterval(this.state.removeItemsInterval);
  }

  render() {
    let { list } = this.state;

    return list.length ? (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}