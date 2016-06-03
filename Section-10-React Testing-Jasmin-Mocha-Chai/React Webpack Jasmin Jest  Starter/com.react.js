var React=require('react');


var Hello=React.createClass({
render:function(){
	var text=this.props.text;
	return (
		<div>
		{"hello"+text}
		<ul className="container"></ul>
		</div>);
}
})
module.exports=Hello;