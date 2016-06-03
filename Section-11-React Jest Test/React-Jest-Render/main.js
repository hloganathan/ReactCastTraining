
var React=require('react');
var ReactDOM = require('react-dom');
var TestUtils=require('react-addons-test-utils');
// jest librray to test react comp
var Component=require('./com.react');

describe("test helloworld props",function(){
	it("check props",function(){
		var helloworld=TestUtils.renderIntoDocument(<Component text='Tarun'></Component>)
		var text=ReactDOM.findDOMNode(helloworld).textContent;
		expect(text).toContain('hello1');
	})
})
