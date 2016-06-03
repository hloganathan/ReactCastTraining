var React=require('react');

var DemoApp=React.createClass({
	render:function(){
		var text=this.props.text;
		return (<div> 
			<div className="container">Example </div>
			<ul>
			<li>hello User {this.props.name}</li>
			<li>hello User {this.props.name}</li>
			</ul>
			</div>);
	}
})
module.exports=DemoApp;
