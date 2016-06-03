var React=require('react');
var Hello=React.createClass({
render:function(){
	var text=this.props.text;
	return (<div>{"hello"+text}</div>)
}
})
module.exports=Hello;