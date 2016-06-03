import React from 'react';
import Base from './Base';

export default class Example extends Base {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div> 
    	<div className="container">Example </div>
             <ul>
             <li>Hello User {this.props.name}</li>
              <li>Hello User {this.props.name}</li>
             </ul>
    	</div>);
  }

}
