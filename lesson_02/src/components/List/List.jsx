import React, { PureComponent } from "react";

import ListItem from './../ListItem/ListItem'

export default class List extends PureComponent {

  componentDidMount(){
    console.log(`in componentDidMount List`, this.state, this.props);

    // setTimeout(() => {
    //   this.setState({listStyle: `decimal`})
    // }, 3000)

    // setTimeout(() => {
    //   this.setState(actualState => ({
    //     list: []
    //   }), () => {
    //     console.log(this.state);
    //   })
    // }, 2000)
  }
  
  componentDidUpdate(){
    console.log(`in componentDidUpdate List`, this.state, this.props);
  }

  componentWillUnmount(){
    console.log(`in componentWillUnmount List`);
  }

  state = {
    listStyle: `circle`,
    list: this.props.list
  };

  render() {
    let { color } = this.props;
    let { list, listStyle } = this.state;

    return list.length ? (
      <ul style={{ color, listStyleType: listStyle }}>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    ) : null;
  }
}
