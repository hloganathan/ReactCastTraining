import React from 'react';


class Hello extends React.Component {

  handleClick(event) {
    this.setState({honorific: 'Overlord'})
  }

  constructor(props) {
    super(props);
    this.state = {honorific: 'Captain'};
  }

  render() {
    return <h1 onClick={this.handleClick.bind(this)}>Hello {this.state.honorific} {this.props.name}</h1>;
  }
}


export default Hello;